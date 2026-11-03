/* ============================================================
   Barrier+ page effects (scoped to body.barrier):
   - Header condense + dark-section detection (flip chrome colour)
   - Scroll-driven parallax on media bands
   - Respects prefers-reduced-motion
   ============================================================ */
(function () {
  "use strict";
  if (!document.body.classList.contains("barrier")) return;

  const header = document.querySelector(".header");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const darkSections = Array.from(document.querySelectorAll(".b-sec--dark, .b-final"));
  const medias = Array.from(document.querySelectorAll(".b-media"));
  const logo = document.querySelector(".b-logo");
  const hero = document.querySelector(".b-hero");
  const heroFx = document.querySelector(".b-hero-fx");

  // ---- Intro: play the hero reveal on first paint ----
  const intro = document.querySelector(".b-intro");
  if (intro) {
    // next frame so the initial (hidden) state is committed first
    requestAnimationFrame(() => requestAnimationFrame(() => intro.classList.add("in")));
  }

  // (Hero pointer parallax removed — the hero text stays static.)

  // ---- Hold scroll until the hero video finishes, then release ----
  // The page stays pinned on the hero while the clip plays once; when the
  // video ends, scrolling unlocks and we glide to the next section. After
  // that the clip quietly loops as a background.
  (function heroVideoGate() {
    const section = document.querySelector("[data-hold-video]");
    if (!section) return;
    const video = section.querySelector("video");
    if (!video) return;

    const nextSection = section.nextElementSibling;
    const docEl = document.documentElement;

    // If motion is reduced, never trap the scroll — just show a still frame.
    if (reduce) {
      try { video.removeAttribute("autoplay"); video.pause(); } catch (e) {}
      return;
    }

    // Do NOT trap scrolling on touch / small screens. The "hold until the clip
    // ends" effect is desktop-only (mouse wheel). On phones the page must
    // scroll freely; the video just loops in the background.
    const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches
      || window.matchMedia("(max-width: 860px)").matches;
    if (isTouch) {
      try { docEl.classList.remove("hero-locked"); video.loop = true; } catch (e) {}
      return;
    }

    let armed = true;      // gate is still available to trigger
    let locked = false;    // scroll currently trapped
    let released = false;  // clip finished — gate is done forever
    let escapeTries = 0;   // emergency bail-out if the user insists

    function lock() {
      if (locked || released) return;
      locked = true;
      // Pin to the top so the hero fills the viewport while it plays.
      window.scrollTo(0, 0);
      docEl.classList.add("hero-locked");
      // Restart the clip from the beginning, play once (no loop while gating).
      try {
        video.loop = false;
        video.currentTime = 0;
        const p = video.play();
        if (p && p.catch) p.catch(release); // autoplay blocked -> let scroll go
      } catch (e) { release(); }
      // Safety: if the clip can't report progress, release after its duration.
      const dur = (isFinite(video.duration) && video.duration) ? video.duration : 10;
      clearTimeout(lock._t);
      lock._t = setTimeout(release, (dur + 1.2) * 1000);
    }

    function release() {
      if (released) return;
      released = true;
      armed = false;
      locked = false;
      clearTimeout(lock._t);
      docEl.classList.remove("hero-locked");
      // Resume as a gentle background loop.
      try { video.loop = true; if (video.paused) video.play().catch(() => {}); } catch (e) {}
      // Glide down to the next section.
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    video.addEventListener("ended", release);

    // Arm the gate on the first downward scroll intent while at the top.
    function onWheel(e) {
      if (released) return;
      const atTop = (window.scrollY || window.pageYOffset) <= 2;
      if (armed && !locked && atTop && e.deltaY > 0) {
        e.preventDefault();
        lock();
        return;
      }
      if (locked) {
        e.preventDefault();          // swallow scroll while the clip plays
        if (e.deltaY > 0 && ++escapeTries >= 6) release(); // insistent user -> bail
      }
    }
    window.addEventListener("wheel", onWheel, { passive: false });

    // Touch equivalent.
    let touchY = 0;
    window.addEventListener("touchstart", (e) => { touchY = e.touches[0].clientY; }, { passive: true });
    window.addEventListener("touchmove", (e) => {
      if (released) return;
      const dy = touchY - e.touches[0].clientY; // >0 means swipe up (scroll down)
      const atTop = (window.scrollY || window.pageYOffset) <= 2;
      if (armed && !locked && atTop && dy > 6) { e.preventDefault(); lock(); return; }
      if (locked) { e.preventDefault(); if (dy > 6 && ++escapeTries >= 8) release(); }
    }, { passive: false });

    // Keyboard / accessibility: don't trap keyboard users.
    window.addEventListener("keydown", (e) => {
      if (locked && ["PageDown", "ArrowDown", "End", " ", "Spacebar"].includes(e.key)) release();
    });
  })();

  // ---- Smooth word-by-word reveal for the top-left aside lines ----
  // Words float in softly one after another; normal line wrapping is kept.
  // Line 1 finishes before line 2 starts.
  (function softType() {
    const nodes = Array.from(document.querySelectorAll("[data-type]"));
    if (!nodes.length) return;

    const WORD = 220;   // stagger between words (ms)
    const LINE = 500;   // beat before the next line begins (ms)
    let timers = [];

    function clearAll() { timers.forEach(clearTimeout); timers = []; }

    function run() {
      clearAll();
      const lines = nodes.map((n) => (n.textContent || "").trim());

      if (reduce) { nodes.forEach((n, i) => (n.textContent = lines[i])); return; }

      let delay = 250;
      nodes.forEach((node, li) => {
        const words = lines[li].split(/\s+/).filter(Boolean);
        node.textContent = "";
        const frag = document.createDocumentFragment();
        const spans = [];
        words.forEach((w, wi) => {
          const s = document.createElement("span");
          s.className = "b-type-word";
          s.textContent = w;
          frag.appendChild(s);
          // real space text node between words -> normal wrapping
          if (wi < words.length - 1) frag.appendChild(document.createTextNode(" "));
          spans.push(s);
        });
        node.appendChild(frag);
        spans.forEach((el) => {
          timers.push(setTimeout(() => el.classList.add("in"), delay));
          delay += WORD;
        });
        delay += LINE;
      });
    }

    if (document.readyState === "complete") run();
    else window.addEventListener("load", run, { once: true });

    document.querySelectorAll(".lang button").forEach((b) =>
      b.addEventListener("click", () => setTimeout(run, 80))
    );
  })();

  // Are we on the homepage? (index.html or a bare "/" path)
  const onHome = /(^|\/)index\.html$/.test(location.pathname) || location.pathname.endsWith("/");

  // Logo click:
  //  - On HOME: intercept and smooth-scroll back to the top (no reload).
  //  - On any OTHER page: always navigate to the homepage (href = index.html).
  if (logo) {
    logo.addEventListener("click", (e) => {
      if (onHome) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }
      // else: let the normal link navigate to index.html.
    });
  }

  let ticking = false;

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;

    // On HOME the logo is inert at the very top (you're already there). On any
    // other page it must always stay clickable to return to the homepage.
    if (logo) logo.classList.toggle("is-inert", onHome && y <= 2);

    // Hero fades out and drifts up slightly as you scroll past it.
    if (heroFx && !reduce) {
      const vh = window.innerHeight;
      const p = Math.min(1, y / (vh * 0.8));        // 0..1 over ~80% viewport
      heroFx.style.setProperty("--hero-op", (1 - p).toFixed(3));
      heroFx.style.transform = `translate3d(0, ${(-p * 40).toFixed(1)}px, 0)`;
    }

    // Condense the header after a little scroll.
    if (header) header.classList.toggle("condensed", y > 20);

    // If the header band overlaps a dark section, flip its chrome to light.
    if (header) {
      const hb = header.getBoundingClientRect();
      const probe = hb.top + hb.height / 2;
      let onDark = false;
      for (const s of darkSections) {
        const r = s.getBoundingClientRect();
        if (r.top <= probe && r.bottom >= probe) { onDark = true; break; }
      }
      header.classList.toggle("on-dark", onDark);
    }

    // Parallax: shift each media band's background slightly as it scrolls.
    if (!reduce) {
      const vh = window.innerHeight;
      for (const m of medias) {
        const r = m.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) continue;
        const centre = r.top + r.height / 2;
        const rel = (centre - vh / 2) / vh;      // -0.5..0.5-ish
        const shift = Math.max(-14, Math.min(14, -rel * 16));
        m.style.backgroundPosition = `center calc(50% + ${shift}px)`;
      }
    }

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
})();
