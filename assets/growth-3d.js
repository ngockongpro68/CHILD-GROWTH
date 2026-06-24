import * as THREE from "/assets/vendor/three.module.js";

const COLORS = {
  blue: 0x2563eb,
  blueSoft: 0x93c5fd,
  green: 0x16a34a,
  amber: 0xf59e0b,
  red: 0xef4444,
  slate: 0x334155,
  white: 0xffffff
};

export function mountGrowthScene(root = document) {
  const hosts = Array.from(root.querySelectorAll("[data-growth-3d]"));
  if (!hosts.length) return () => {};

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scenes = hosts.map((host, index) => createScene(host, index, reducedMotion)).filter(Boolean);

  return () => {
    scenes.forEach((scene) => scene.dispose());
  };
}

function createScene(host, index, reducedMotion) {
  const canvas = document.createElement("canvas");
  canvas.className = "growth-3d-canvas";
  host.textContent = "";
  host.appendChild(canvas);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });

  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 0.55, 9);

  const group = new THREE.Group();
  group.position.set(index === 0 ? 1.35 : 1.05, index === 0 ? -0.06 : 0.08, 0);
  group.rotation.set(-0.14, -0.35, 0.03);
  scene.add(group);

  scene.add(new THREE.AmbientLight(0xffffff, 1.75));
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
  keyLight.position.set(3.5, 3.8, 5.5);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x93c5fd, 1.25);
  fillLight.position.set(-3, -1, 4);
  scene.add(fillLight);

  const mobile = window.matchMedia("(max-width: 700px)").matches;
  const amplitude = mobile ? 0.72 : 1;

  addReferencePanels(group, amplitude);
  addGrowthGrid(group, amplitude);
  addGrowthCurves(group, amplitude);
  addMeasurementMarkers(group, amplitude, mobile);
  addFloatingCards(group, amplitude, mobile);

  const pointer = { x: 0, y: 0 };
  const onPointerMove = (event) => {
    const rect = host.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  };

  host.addEventListener("pointermove", onPointerMove);

  const resizeObserver = new ResizeObserver(() => resize());
  resizeObserver.observe(host);

  let frame = 0;
  let rafId = 0;

  function resize() {
    const rect = host.getBoundingClientRect();
    const width = Math.max(1, Math.floor(rect.width));
    const height = Math.max(1, Math.floor(rect.height));
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }

  function animate(time = 0) {
    frame = time * 0.001;
    group.rotation.y += ((-0.35 + pointer.x * 0.08) - group.rotation.y) * 0.04;
    group.rotation.x += ((-0.14 - pointer.y * 0.035) - group.rotation.x) * 0.04;
    group.position.y = (index === 0 ? -0.06 : 0.08) + Math.sin(frame * 0.55 + index) * 0.035;

    group.children.forEach((child) => {
      if (child.userData.floatSpeed) {
        child.position.y = child.userData.baseY + Math.sin(frame * child.userData.floatSpeed + child.userData.phase) * child.userData.floatAmount;
        child.rotation.z = child.userData.baseZ + Math.sin(frame * 0.35 + child.userData.phase) * 0.025;
      }
    });

    renderer.render(scene, camera);
    if (!reducedMotion) rafId = requestAnimationFrame(animate);
  }

  resize();
  animate();

  return {
    dispose() {
      cancelAnimationFrame(rafId);
      host.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
      renderer.dispose();
      canvas.remove();
    }
  };
}

function addReferencePanels(group, amplitude) {
  const panelMaterial = new THREE.MeshStandardMaterial({
    color: COLORS.white,
    transparent: true,
    opacity: 0.42,
    roughness: 0.78,
    metalness: 0.02,
    side: THREE.DoubleSide
  });

  [-1.25, 0, 1.25].forEach((offset, index) => {
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(5.9, 0.72), panelMaterial.clone());
    panel.position.set(0, offset * amplitude, -0.18 - index * 0.08);
    panel.rotation.x = -0.06;
    panel.userData = {
      baseY: panel.position.y,
      floatSpeed: 0.24 + index * 0.05,
      floatAmount: 0.028,
      phase: index * 1.7,
      baseZ: panel.rotation.z
    };
    group.add(panel);
  });
}

function addGrowthGrid(group, amplitude) {
  const points = [];
  const width = 6.1;
  const height = 3.2 * amplitude;
  const rows = 5;
  const cols = 9;

  for (let row = 0; row <= rows; row += 1) {
    const y = -height / 2 + (row / rows) * height;
    points.push(new THREE.Vector3(-width / 2, y, 0), new THREE.Vector3(width / 2, y, 0));
  }

  for (let col = 0; col <= cols; col += 1) {
    const x = -width / 2 + (col / cols) * width;
    points.push(new THREE.Vector3(x, -height / 2, 0), new THREE.Vector3(x, height / 2, 0));
  }

  const grid = new THREE.LineSegments(
    new THREE.BufferGeometry().setFromPoints(points),
    new THREE.LineBasicMaterial({ color: 0xcbd5e1, transparent: true, opacity: 0.38 })
  );
  grid.position.z = 0.03;
  group.add(grid);
}

function addGrowthCurves(group, amplitude) {
  const curves = [
    { color: COLORS.red, offset: 1.06, opacity: 0.48 },
    { color: COLORS.amber, offset: 0.54, opacity: 0.58 },
    { color: COLORS.green, offset: 0, opacity: 0.88 },
    { color: COLORS.amber, offset: -0.54, opacity: 0.58 },
    { color: COLORS.red, offset: -1.06, opacity: 0.48 }
  ];

  curves.forEach((curve, curveIndex) => {
    const points = [];
    for (let i = 0; i <= 72; i += 1) {
      const t = i / 72;
      const x = -2.88 + t * 5.76;
      const baseline = -1.2 * amplitude + Math.pow(t, 0.55) * 2.35 * amplitude;
      const y = baseline + curve.offset * 0.34 * amplitude + Math.sin(t * Math.PI * 2.3 + curveIndex * 0.45) * 0.035;
      const z = 0.14 + Math.sin(t * Math.PI) * 0.42;
      points.push(new THREE.Vector3(x, y, z));
    }

    const material = new THREE.LineBasicMaterial({
      color: curve.color,
      transparent: true,
      opacity: curve.opacity,
      linewidth: 2
    });
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), material);
    line.userData = {
      baseY: 0,
      floatSpeed: 0.16 + curveIndex * 0.02,
      floatAmount: 0.018,
      phase: curveIndex * 0.8,
      baseZ: 0
    };
    group.add(line);
  });

  const medianCurve = new THREE.CatmullRomCurve3(
    Array.from({ length: 16 }, (_, i) => {
      const t = i / 15;
      return new THREE.Vector3(
        -2.88 + t * 5.76,
        -1.2 * amplitude + Math.pow(t, 0.55) * 2.35 * amplitude,
        0.32 + Math.sin(t * Math.PI) * 0.36
      );
    })
  );
  const tube = new THREE.Mesh(
    new THREE.TubeGeometry(medianCurve, 64, 0.026, 8, false),
    new THREE.MeshStandardMaterial({ color: COLORS.blue, roughness: 0.48, metalness: 0.04 })
  );
  group.add(tube);
}

function addMeasurementMarkers(group, amplitude, mobile) {
  const geometry = new THREE.BoxGeometry(0.12, 0.12, 0.12);
  const material = new THREE.MeshStandardMaterial({ color: COLORS.blue, roughness: 0.38, metalness: 0.08 });
  const count = mobile ? 7 : 11;

  for (let i = 0; i < count; i += 1) {
    const t = i / (count - 1);
    const marker = new THREE.Mesh(geometry, material.clone());
    marker.position.set(
      -2.8 + t * 5.6,
      -1.18 * amplitude + Math.pow(t, 0.55) * 2.32 * amplitude + (i % 2 ? 0.08 : -0.03),
      0.48 + Math.sin(t * Math.PI) * 0.35
    );
    marker.rotation.set(0.2 + t, 0.45 - t * 0.2, 0.25);
    marker.userData = {
      baseY: marker.position.y,
      floatSpeed: 0.45 + i * 0.025,
      floatAmount: 0.025,
      phase: i * 0.75,
      baseZ: marker.rotation.z
    };
    group.add(marker);
  }
}

function addFloatingCards(group, amplitude, mobile) {
  if (mobile) return;

  const cardGeometry = new THREE.BoxGeometry(0.92, 0.46, 0.035);
  const cardMaterial = new THREE.MeshStandardMaterial({
    color: COLORS.white,
    transparent: true,
    opacity: 0.68,
    roughness: 0.72,
    metalness: 0.02
  });
  const accentMaterial = new THREE.MeshStandardMaterial({ color: COLORS.blueSoft, roughness: 0.6 });

  [
    [-2.25, 1.62 * amplitude, 0.62, -0.12],
    [2.35, 1.08 * amplitude, 0.8, 0.1],
    [1.15, -1.65 * amplitude, 0.65, -0.05]
  ].forEach(([x, y, z, rz], index) => {
    const card = new THREE.Mesh(cardGeometry, cardMaterial.clone());
    card.position.set(x, y, z);
    card.rotation.set(-0.1, index % 2 ? -0.22 : 0.18, rz);
    card.userData = {
      baseY: y,
      floatSpeed: 0.24 + index * 0.07,
      floatAmount: 0.045,
      phase: index * 2.1,
      baseZ: rz
    };
    group.add(card);

    const accent = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.045, 0.045), accentMaterial.clone());
    accent.position.set(x - 0.1, y - 0.04, z + 0.05);
    accent.rotation.copy(card.rotation);
    accent.userData = {
      baseY: y - 0.04,
      floatSpeed: card.userData.floatSpeed,
      floatAmount: card.userData.floatAmount,
      phase: card.userData.phase,
      baseZ: rz
    };
    group.add(accent);
  });
}
