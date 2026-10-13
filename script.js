(() => {
  const video = document.querySelector('#heroVideo');
  const scrollHint = document.querySelector('#scrollHint');
  const progressFill = document.querySelector('#progressFill');
  const progressReadout = document.querySelector('#progressReadout');
  const sceneLabel = document.querySelector('#sceneLabel');
  const sceneIndex = document.querySelector('#sceneIndex');
  const root = document.documentElement;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SEEK_FPS = 30;
  const SEEK_INTERVAL = 1000 / SEEK_FPS;
  const MIN_SEEK_DELTA = 1 / SEEK_FPS;

  let target = 0;
  let current = 0;
  let started = false;
  let rafId = 0;
  let desiredTime = 0;
  let seekBusy = false;
  let lastSeekAt = 0;

  const scenes = [
    { at: 0.00, label: 'ENVIRONMENT 01 / FOREST', index: '01' },
    { at: 0.15, label: 'ENVIRONMENT 02 / FIRE', index: '02' },
    { at: 0.34, label: 'ENVIRONMENT 03 / COAST', index: '03' },
    { at: 0.58, label: 'ENVIRONMENT 04 / DEEP WATER', index: '04' },
    { at: 0.88, label: 'ENVIRONMENT 05 / CITY', index: '05' }
  ];

  function clamp(v, a = 0, b = 1) { return Math.min(b, Math.max(a, v)); }
  function lerp(a, b, t) { return a + (b - a) * t; }

  function readScroll() {
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    target = clamp(scrollY / max);
  }

  function hideHint() {
    if (started) return;
    started = true;
    scrollHint.classList.add('is-hidden');
  }

  function setScene(p) {
    let active = scenes[0];
    for (const scene of scenes) if (p >= scene.at) active = scene;

    if (sceneLabel.textContent !== active.label) {
      sceneLabel.animate(
        [{ opacity: .15, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 260, easing: 'ease-out' }
      );
      sceneLabel.textContent = active.label;
      sceneIndex.textContent = active.index;
    }
  }

  function updateHUD(p) {
    const pct = Math.round(p * 100);
    progressFill.style.height = `${pct}%`;
    progressReadout.style.top = `calc(${pct}% - 7px)`;
    progressReadout.textContent = String(pct).padStart(2, '0');
    setScene(p);
  }

  function canSeek() {
    return Number.isFinite(video.duration) && video.duration > 0 && video.readyState >= 2;
  }

  function queueSeek(p) {
    if (!canSeek()) return;
    desiredTime = clamp(p) * Math.max(0, video.duration - 0.04);
  }

  function flushSeek(now) {
    if (!canSeek() || seekBusy) return;
    if (now - lastSeekAt < SEEK_INTERVAL) return;

    const delta = Math.abs(desiredTime - video.currentTime);
    if (delta < MIN_SEEK_DELTA * 0.55) return;

    seekBusy = true;
    lastSeekAt = now;
    video.currentTime = desiredTime;
  }

  video.addEventListener('seeked', () => {
    seekBusy = false;
  });

  function frame(now) {
    const ease = reduceMotion ? 1 : 0.105;
    current = lerp(current, target, ease);
    if (Math.abs(target - current) < 0.00005) current = target;

    queueSeek(current);
    flushSeek(now);
    updateHUD(current);
    rafId = requestAnimationFrame(frame);
  }

  video.addEventListener('loadedmetadata', () => {
    const playPromise = video.play();
    if (playPromise?.then) {
      playPromise.then(() => {
        video.pause();
        readScroll();
        queueSeek(target);
      }).catch(() => {
        readScroll();
        queueSeek(target);
      });
    }
  }, { once: true });

  addEventListener('scroll', readScroll, { passive: true });
  addEventListener('wheel', hideHint, { passive: true, once: true });
  addEventListener('touchstart', hideHint, { passive: true, once: true });
  addEventListener('keydown', (e) => {
    if (['ArrowDown','ArrowUp','PageDown','PageUp',' ','Home','End'].includes(e.key)) hideHint();
  }, { once: true });

  addEventListener('pointermove', (e) => {
    if (reduceMotion) return;
    const mx = (e.clientX / innerWidth - .5) * 2;
    const my = (e.clientY / innerHeight - .5) * 2;
    root.style.setProperty('--mx', mx.toFixed(3));
    root.style.setProperty('--my', my.toFixed(3));
  }, { passive: true });

  addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(rafId);
    else {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(frame);
    }
  });

  readScroll();
  rafId = requestAnimationFrame(frame);
})();