const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "assets", "app.js");
const who2007Path = path.join(root, "assets", "who-2007-reference.js");
const weightHeightPath = path.join(root, "assets", "who-weight-height-reference.js");
const fentonPath = path.join(root, "assets", "fenton-2013-reference.js");

function createAuditApi() {
  const sandbox = {
    window: {
      location: { pathname: "/", hostname: "127.0.0.1", protocol: "http:", search: "", hash: "" },
      history: { replaceState() {} },
      addEventListener() {},
      removeEventListener() {}
    },
    document: {
      getElementById() { return null; },
      createElement() {
        return {
          value: "",
          set innerHTML(value) {
            this.value = String(value)
              .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
              .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
              .replace(/&amp;/g, "&")
              .replace(/&lt;/g, "<")
              .replace(/&gt;/g, ">")
              .replace(/&quot;/g, "\"")
              .replace(/&#39;/g, "'");
          }
        };
      }
    },
    localStorage: { getItem() { return null; }, setItem() {}, removeItem() {} },
    navigator: { language: "en-US" },
    console,
    Date,
    Math,
    Intl,
    URL,
    AbortController,
    setTimeout,
    clearTimeout,
    fetch: async () => ({ ok: false })
  };
  sandbox.window.window = sandbox.window;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(who2007Path, "utf8"), sandbox);
  vm.runInContext(fs.readFileSync(weightHeightPath, "utf8"), sandbox);
  vm.runInContext(fs.readFileSync(fentonPath, "utf8"), sandbox);

  const appSource = fs.readFileSync(appPath, "utf8");
  const auditSource = appSource.replace(
    "  initialize();\n})();",
    "  window.__growthAudit = { calculateGrowthData, chartSvg, drawSocialSnapshotChart, idealReferenceValue, referenceValue, fentonReferenceValue, monthDiff, normalizeChildName };\n})();"
  );
  if (auditSource === appSource) throw new Error("Could not expose the growth audit API.");
  vm.runInContext(auditSource, sandbox);
  return sandbox.window.__growthAudit;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function addMonthsIso(year, month, day, months) {
  const totalMonths = month - 1 + months;
  return `${year + Math.floor(totalMonths / 12)}-${pad(totalMonths % 12 + 1)}-${pad(day)}`;
}

function addDaysIso(isoDate, days) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function createCanvasAuditContext(label) {
  const checkCoordinates = (...values) => {
    for (const value of values) {
      if (typeof value === "number") {
        assert(Number.isFinite(value), `${label} contains an invalid canvas coordinate.`);
      }
    }
  };

  return {
    beginPath() {},
    moveTo(...values) { checkCoordinates(...values); },
    lineTo(...values) { checkCoordinates(...values); },
    arc(...values) { checkCoordinates(...values); },
    fill() {},
    stroke() {},
    fillText(_text, ...values) { checkCoordinates(...values); },
    strokeText(_text, ...values) { checkCoordinates(...values); },
    setLineDash() {},
    save() {},
    restore() {},
    measureText(text) { return { width: String(text).length * 7 }; }
  };
}

const api = createAuditApi();
let calendarCases = 0;
let calculationCases = 0;
let chartCases = 0;
let snapshotChartCases = 0;
let fentonCases = 0;

assert(api.normalizeChildName("  nGUYỄN   thị-minh  ") === "Nguyễn Thị-Minh", "Child names are not normalized to title case.");
assert(api.normalizeChildName("tran ngoc") === "Tran Ngoc", "Unaccented child names are not normalized to title case.");

for (let year = 2010; year <= 2020; year += 1) {
  for (let month = 1; month <= 12; month += 1) {
    for (const day of [1, 15, 28]) {
      for (const targetMonths of [6, 12, 24, 36, 48, 60, 62, 108, 118, 120, 122, 226, 228]) {
        const dob = `${year}-${pad(month)}-${pad(day)}`;
        const measurementDate = addMonthsIso(year, month, day, targetMonths);
        const actualMonths = api.monthDiff(new Date(`${dob}T00:00:00`), new Date(`${measurementDate}T00:00:00`));
        assert(Math.abs(actualMonths - targetMonths) < 1e-9, `${dob} to ${measurementDate} produced ${actualMonths} months.`);
        calendarCases += 1;
      }
    }
  }
}

for (const sex of ["boy", "girl"]) {
  for (let targetMonths = 6; targetMonths <= 228; targetMonths += 2) {
    const dob = "2010-01-15";
    const measurementDate = addMonthsIso(2010, 1, 15, targetMonths);
    const referenceHeight = api.referenceValue(sex, "height", targetMonths, 0);
    const referenceWeight = api.referenceValue(sex, "weight", targetMonths, 0);
    const referenceBmi = api.referenceValue(sex, "bmi", targetMonths, 0);
    const testWeight = Number.isFinite(referenceWeight)
      ? referenceWeight
      : referenceBmi * ((referenceHeight / 100) ** 2);
    const result = api.calculateGrowthData({
      dob,
      measureDate: measurementDate,
      sex,
      weight: String(testWeight),
      height: String(referenceHeight),
      head: ""
    });
    assert(Math.abs(result.ageMonths - targetMonths) < 1e-9, `${sex} age ${targetMonths} was calculated as ${result.ageMonths}.`);

    const expectedAvailability = {
      height: true,
      weight: targetMonths <= 120,
      wfh: targetMonths <= 60,
      bmi: true
    };

    for (const indicator of ["height", "weight", "wfh", "bmi"]) {
      const svg = api.chartSvg(result, indicator, false);
      const unavailable = svg.includes("chart unavailable");
      assert(unavailable !== expectedAvailability[indicator], `${sex} ${targetMonths}m ${indicator} availability is incorrect.`);
      const idealReference = api.idealReferenceValue(result, indicator);
      assert(Number.isFinite(idealReference) === expectedAvailability[indicator], `${sex} ${targetMonths}m ${indicator} result card availability is incorrect.`);
      assert(!/NaN|Infinity|undefined|>null</.test(svg), `${sex} ${targetMonths}m ${indicator} contains an invalid SVG value.`);
      assert(!/<path d=""/.test(svg), `${sex} ${targetMonths}m ${indicator} contains an empty chart path.`);
      api.drawSocialSnapshotChart(
        createCanvasAuditContext(`${sex} ${targetMonths}m ${indicator}`),
        result,
        indicator,
        20,
        20,
        720,
        300
      );
      chartCases += 1;
      snapshotChartCases += 1;
    }

    const fixedResult = api.calculateGrowthData({
      dob,
      measureDate: measurementDate,
      sex,
      weight: "12.5",
      height: "87",
      head: ""
    });

    for (const indicator of ["height", "weight", "wfh", "bmi"]) {
      const svg = api.chartSvg(fixedResult, indicator, false);
      if (svg.includes("chart unavailable")) continue;
      const point = svg.match(/<circle cx="([^"]+)" cy="([^"]+)"/);
      assert(point, `${sex} ${targetMonths}m ${indicator} is missing the measurement point.`);
      const y = Number(point[2]);
      const top = indicator === "wfh" ? 38 : 32;
      const bottom = indicator === "wfh" ? 454 : 458;
      assert(Number.isFinite(y) && y >= top && y <= bottom, `${sex} ${targetMonths}m ${indicator} point is outside the chart.`);
    }

    calculationCases += 1;
  }
}

const fentonBoundaryCases = [
  { pmaDays: 158, gaWeeks: 22, gaDays: 4, expectedFenton: true, expectLengthHead: false },
  { pmaDays: 165, gaWeeks: 23, gaDays: 4, expectedFenton: true, expectLengthHead: true },
  { pmaDays: 349, gaWeeks: 30, gaDays: 0, expectedFenton: true, expectLengthHead: true },
  { pmaDays: 350, gaWeeks: 30, gaDays: 0, expectedFenton: true, expectLengthHead: true },
  { pmaDays: 351, gaWeeks: 30, gaDays: 0, expectedFenton: false, expectLengthHead: true }
];

for (const sex of ["boy", "girl"]) {
  for (const testCase of fentonBoundaryCases) {
    const dob = "2024-01-01";
    const birthGestationDays = testCase.gaWeeks * 7 + testCase.gaDays;
    const measureDate = addDaysIso(dob, testCase.pmaDays - birthGestationDays);
    const fentonWeight = api.fentonReferenceValue(sex, "weight", Math.min(testCase.pmaDays, 350), 0);
    const fentonHeight = api.fentonReferenceValue(sex, "height", Math.max(165, Math.min(testCase.pmaDays, 350)), 0);
    const fentonHead = api.fentonReferenceValue(sex, "head", Math.max(165, Math.min(testCase.pmaDays, 350)), 0);
    const result = api.calculateGrowthData({
      dob,
      measureDate,
      sex,
      weight: String(fentonWeight || 0.6),
      height: String(fentonHeight || 30),
      head: String(fentonHead || 22),
      preterm: "yes",
      gestationalWeeks: String(testCase.gaWeeks),
      gestationalDays: String(testCase.gaDays)
    });

    assert(result.usesFenton === testCase.expectedFenton, `${sex} at PMA ${testCase.pmaDays} used the wrong reference.`);
    assert(Math.round(result.postmenstrualAgeDays) === testCase.pmaDays, `${sex} PMA ${testCase.pmaDays} was calculated as ${result.postmenstrualAgeDays}.`);
    if (testCase.expectedFenton) {
      const weightMetric = result.metrics.find((metric) => metric.key === "weight");
      const heightMetric = result.metrics.find((metric) => metric.key === "height");
      const headMetric = result.metrics.find((metric) => metric.key === "head");
      assert(weightMetric.status !== "notAvailable", `${sex} PMA ${testCase.pmaDays} is missing Fenton weight.`);
      assert((heightMetric.status !== "notAvailable") === testCase.expectLengthHead, `${sex} PMA ${testCase.pmaDays} length availability is incorrect.`);
      assert((headMetric.status !== "notAvailable") === testCase.expectLengthHead, `${sex} PMA ${testCase.pmaDays} head availability is incorrect.`);
      assert(result.metrics.find((metric) => metric.key === "wfh").status === "notAvailable", "Fenton must not report weight-for-length.");
      assert(result.metrics.find((metric) => metric.key === "bmi").status === "notAvailable", "Fenton must not report BMI-for-age.");

      for (const indicator of ["weight", "height", "head"]) {
        const metric = result.metrics.find((item) => item.key === indicator);
        const svg = api.chartSvg(result, indicator, false);
        assert(!/NaN|Infinity|undefined|>null</.test(svg), `${sex} PMA ${testCase.pmaDays} ${indicator} contains an invalid SVG value.`);
        if (metric.status !== "notAvailable") {
          assert(svg.includes("Fenton 2013"), `${sex} PMA ${testCase.pmaDays} ${indicator} is missing its Fenton chart.`);
          api.drawSocialSnapshotChart(
            createCanvasAuditContext(`${sex} PMA ${testCase.pmaDays} ${indicator}`),
            result,
            indicator,
            20,
            20,
            720,
            300
          );
        }
      }
    }
    fentonCases += 1;
  }
}

console.log(
  `Growth chart check passed: ${calendarCases} calendar ages, ${calculationCases} growth results, `
  + `${chartCases} web charts, ${snapshotChartCases} snapshot charts, and ${fentonCases} Fenton boundary cases.`
);
