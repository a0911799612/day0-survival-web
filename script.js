(() => {
  const video = document.querySelector('#heroVideo');
  const scrollHint = document.querySelector('#scrollHint');
  const progressFill = document.querySelector('#progressFill');
  const progressReadout = document.querySelector('#progressReadout');
  const sceneLabel = document.querySelector('#sceneLabel');
  const sceneIndex = document.querySelector('#sceneIndex');
  const root = document.documentElement;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let target = 0;
  let current = 0;
  let duration = 28.3;
  let started = false;
  let rafId = 0;
  let lastSeek = -1;

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
        { duration: 360, easing: 'ease-out' }
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

  function seekVideo(p) {
    if (!Number.isFinite(video.duration) || video.readyState < 2) return;
    const t = clamp(p) * Math.max(0, video.duration - 0.05);
    if (Math.abs(t - lastSeek) > 0.012) {
      video.currentTime = t;
      lastSeek = t;
    }
  }

  function frame() {
    const ease = reduceMotion ? 1 : 0.085;
    current = lerp(current, target, ease);
    if (Math.abs(target - current) < 0.00004) current = target;

    seekVideo(current);
    updateHUD(current);
    rafId = requestAnimationFrame(frame);
  }

  video.addEventListener('loadedmetadata', () => {
    duration = video.duration || duration;
    const play = video.play();
    if (play?.then) play.then(() => video.pause()).catch(() => {});
    readScroll();
    seekVideo(target);
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
    else { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(frame); }
  });

  readScroll();
  rafId = requestAnimationFrame(frame);
})();