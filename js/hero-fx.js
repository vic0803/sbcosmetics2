/* ============================================================
   Hero cursor FX — golden glow trail + subtle parallax.
   Self-contained, no dependencies. Inspired by WebGL studio
   heroes (Immersive Garden) but done lightweight with CSS vars.
   - Disabled on touch devices (no cursor) and reduced-motion.
   - Smoothed with a lerp so motion feels inertial, not twitchy.
   ============================================================ */
(function () {
  "use strict";

  const hero = document.querySelector(".hero2");
  if (!hero) return;

  const media = hero.querySelector(".hero2-media");

  // Bail on touch-only devices and when the user prefers reduced motion.
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (coarse || reduce) return;

  // Targets (where the pointer is) and current (smoothed) values.
  let tX = 0.5, tY = 0.4;   // normalized 0..1 within the hero
  let cX = 0.5, cY = 0.4;
  let raf = null;
  let active = false;

  function onMove(e) {
    const r = hero.getBoundingClientRect();
    tX = (e.clientX - r.left) / r.width;
    tY = (e.clientY - r.top) / r.height;
    // Keep the glow positioned in px (reads nicer across sizes).
    hero.style.setProperty("--mx", (e.clientX - r.left) + "px");
    hero.style.setProperty("--my", (e.clientY - r.top) + "px");
    if (!raf) raf = requestAnimationFrame(tick);
  }

  function onEnter() {
    active = true;
    hero.classList.add("glow-on");
    if (!raf) raf = requestAnimationFrame(tick);
  }

  function onLeave() {
    active = false;
    hero.classList.remove("glow-on");
    // Ease back toward center.
    tX = 0.5;
    tY = 0.4;
    if (!raf) raf = requestAnimationFrame(tick);
  }

  function tick() {
    // Inertial follow (the "studio" feel): move 8% of the remaining gap per frame.
    cX += (tX - cX) * 0.08;
    cY += (tY - cY) * 0.08;

    // Parallax: map 0..1 to roughly -1..1 so the image drifts opposite the cursor.
    const px = (0.5 - cX) * 2;
    const py = (0.5 - cY) * 2;
    if (media) {
      media.style.setProperty("--px", px.toFixed(4));
      media.style.setProperty("--py", py.toFixed(4));
    }

    // Keep animating while active or still settling toward the target.
    const settling = Math.abs(tX - cX) > 0.001 || Math.abs(tY - cY) > 0.001;
    if (active || settling) {
      raf = requestAnimationFrame(tick);
    } else {
      raf = null;
    }
  }

  hero.addEventListener("pointermove", onMove, { passive: true });
  hero.addEventListener("pointerenter", onEnter);
  hero.addEventListener("pointerleave", onLeave);
})();
