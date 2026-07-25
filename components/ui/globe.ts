import createGlobe from "cobe";

const canvas = document.querySelector<HTMLCanvasElement>("[data-cobe-globe]");

if (canvas) {
  let phi = 0;
  let width = 0;
  let dragStart: number | null = null;
  let dragOffset = 0;
  let dragRotation = 0;

  const resize = () => { width = canvas.offsetWidth; };
  resize();

  const globe = createGlobe(canvas, {
    width: width * 2,
    height: width * 2,
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.28,
    dark: 0,
    diffuse: 0.45,
    mapSamples: 16000,
    mapBrightness: 1.25,
    baseColor: [0.96, 0.98, 0.98],
    markerColor: [1, 0.38, 0.25],
    glowColor: [0.92, 0.94, 0.95],
    markers: [
      { location: [51.4545, -2.5879], size: 0.075 },
      { location: [23.8103, 90.4125], size: 0.085 },
    ],
    onRender: (state) => {
      if (dragStart === null && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) phi += 0.0035;
      state.phi = phi + dragRotation;
      state.width = width * 2;
      state.height = width * 2;
    },
  });

  const stopDragging = () => {
    dragStart = null;
    canvas.style.cursor = "grab";
  };

  canvas.addEventListener("pointerdown", (event) => {
    dragStart = event.clientX - dragOffset;
    canvas.setPointerCapture(event.pointerId);
    canvas.style.cursor = "grabbing";
  });
  canvas.addEventListener("pointermove", (event) => {
    if (dragStart === null) return;
    dragOffset = event.clientX - dragStart;
    dragRotation = dragOffset / 180;
  });
  canvas.addEventListener("pointerup", stopDragging);
  canvas.addEventListener("pointercancel", stopDragging);
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pagehide", () => globe.destroy(), { once: true });
  requestAnimationFrame(() => canvas.classList.add("is-ready"));
}
