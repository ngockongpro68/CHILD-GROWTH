const CURVES = [
  { color: "rgba(220, 78, 86, 0.34)", offset: -0.17 },
  { color: "rgba(225, 151, 48, 0.38)", offset: -0.085 },
  { color: "rgba(39, 139, 105, 0.48)", offset: 0 },
  { color: "rgba(76, 132, 214, 0.42)", offset: 0.085 },
  { color: "rgba(110, 88, 181, 0.28)", offset: 0.17 }
];

export function mountGrowthMotion(root = document) {
  const hosts = Array.from(root.querySelectorAll("[data-growth-motion]"));
  const controllers = hosts.map((host, index) => createMotionScene(host, index)).filter(Boolean);
  return () => controllers.forEach((controller) => controller.dispose());
}

function createMotionScene(host, sceneIndex) {
  const canvas = document.createElement("canvas");
  canvas.className = "growth-motion-canvas";
  host.replaceChildren(canvas);

  const context = canvas.getContext("2d", { alpha: true });
  if (!context) return null;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mode = host.dataset.growthMotion || "calculator";
  const state = {
    width: 1,
    height: 1,
    dpr: 1,
    particles: [],
    active: true,
    raf: 0
  };

  function resize() {
    const rect = host.getBoundingClientRect();
    state.width = Math.max(1, Math.round(rect.width));
    state.height = Math.max(1, Math.round(rect.height));
    const mobile = state.width < 720;
    state.dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.2 : 1.55);
    canvas.width = Math.round(state.width * state.dpr);
    canvas.height = Math.round(state.height * state.dpr);
    canvas.style.width = `${state.width}px`;
    canvas.style.height = `${state.height}px`;
    context.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    createParticles(mobile);
    if (reducedMotion) draw(0);
  }

  function createParticles(mobile) {
    const count = mobile ? 9 : mode === "charts" ? 24 : 18;
    state.particles = Array.from({ length: count }, (_, index) => ({
      progress: (index / count + sceneIndex * 0.13) % 1,
      speed: 0.010 + (index % 5) * 0.0018,
      curve: index % CURVES.length,
      size: 1.7 + (index % 3) * 0.55,
      phase: index * 0.82
    }));
  }

  function pointOnCurve(progress, curveIndex, time) {
    const width = state.width;
    const height = state.height;
    const x = width * (0.025 + progress * 0.95);
    const base = height * (0.76 - Math.pow(progress, 0.62) * 0.44);
    const offset = CURVES[curveIndex].offset * height;
    const ripple = Math.sin(progress * 8.2 + curveIndex * 0.7 + time * 0.00022) * height * 0.006;
    return { x, y: base + offset + ripple };
  }

  function drawGrid(time) {
    const width = state.width;
    const height = state.height;
    const shift = reducedMotion ? 0 : (time * 0.0025) % 54;
    context.save();
    context.lineWidth = 1;
    context.strokeStyle = "rgba(64, 92, 124, 0.07)";
    context.beginPath();
    for (let x = -54 + shift; x <= width + 54; x += 54) {
      context.moveTo(x, height * 0.13);
      context.lineTo(x, height * 0.9);
    }
    for (let y = height * 0.16; y <= height * 0.9; y += Math.max(42, height / 8)) {
      context.moveTo(0, y);
      context.lineTo(width, y);
    }
    context.stroke();
    context.restore();
  }

  function drawCurves(time) {
    CURVES.forEach((curve, curveIndex) => {
      context.save();
      context.strokeStyle = curve.color;
      context.lineWidth = curveIndex === 2 ? 2.2 : 1.35;
      context.beginPath();
      for (let step = 0; step <= 90; step += 1) {
        const progress = step / 90;
        const point = pointOnCurve(progress, curveIndex, time);
        if (step === 0) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
      }
      context.stroke();
      context.restore();
    });
  }

  function drawParticles(time) {
    state.particles.forEach((particle) => {
      const progress = reducedMotion
        ? particle.progress
        : (particle.progress + time * 0.001 * particle.speed) % 1;
      const point = pointOnCurve(progress, particle.curve, time + particle.phase * 160);
      const previous = pointOnCurve(Math.max(0, progress - 0.025), particle.curve, time);
      context.save();
      context.strokeStyle = CURVES[particle.curve].color.replace(/0\.[0-9]+\)/, "0.17)");
      context.lineWidth = 1.5;
      context.beginPath();
      context.moveTo(previous.x, previous.y);
      context.lineTo(point.x, point.y);
      context.stroke();
      context.fillStyle = particle.curve === 2 ? "rgba(28, 118, 87, 0.72)" : CURVES[particle.curve].color;
      context.fillRect(point.x - particle.size, point.y - particle.size, particle.size * 2, particle.size * 2);
      context.restore();
    });
  }

  function drawMeasurement(time) {
    const progress = mode === "charts" ? 0.66 : 0.58;
    const point = pointOnCurve(progress, 3, time);
    const pulse = reducedMotion ? 0 : (Math.sin(time * 0.003) + 1) * 0.5;
    context.save();
    context.strokeStyle = `rgba(37, 99, 235, ${0.2 + pulse * 0.15})`;
    context.lineWidth = 1.5;
    context.beginPath();
    context.arc(point.x, point.y, 10 + pulse * 5, 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = "rgba(37, 99, 235, 0.9)";
    context.beginPath();
    context.arc(point.x, point.y, 4.5, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "rgba(255, 255, 255, 0.95)";
    context.lineWidth = 2;
    context.stroke();
    context.restore();
  }

  function drawScanner(time) {
    if (reducedMotion) return;
    const width = state.width;
    const height = state.height;
    const progress = (time * 0.000055 + sceneIndex * 0.31) % 1;
    const x = width * progress;
    context.save();
    context.strokeStyle = "rgba(37, 99, 235, 0.1)";
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(x, height * 0.1);
    context.lineTo(x, height * 0.92);
    context.stroke();
    context.restore();
  }

  function draw(time) {
    context.clearRect(0, 0, state.width, state.height);
    drawGrid(time);
    drawCurves(time);
    drawParticles(time);
    drawMeasurement(time);
    drawScanner(time);
  }

  function frame(time) {
    state.raf = 0;
    if (!state.active) return;
    draw(time);
    state.raf = requestAnimationFrame(frame);
  }

  function start() {
    if (reducedMotion || !state.active || state.raf) return;
    state.raf = requestAnimationFrame(frame);
  }

  function stop() {
    if (state.raf) cancelAnimationFrame(state.raf);
    state.raf = 0;
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);

  const visibilityObserver = new IntersectionObserver((entries) => {
    state.active = Boolean(entries[0] && entries[0].isIntersecting) && !document.hidden;
    if (state.active) start();
    else stop();
  }, { rootMargin: "120px" });
  visibilityObserver.observe(host);

  const onVisibilityChange = () => {
    state.active = !document.hidden && host.getBoundingClientRect().bottom > -120;
    if (state.active) start();
    else stop();
  };
  document.addEventListener("visibilitychange", onVisibilityChange);

  resize();
  if (reducedMotion) draw(0);
  else start();

  return {
    dispose() {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      canvas.remove();
    }
  };
}
