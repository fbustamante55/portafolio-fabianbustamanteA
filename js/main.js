(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- Terminal boot ---------- */
  const boot = $('#boot'), bootText = $('#boot-text');
  const lines = [
    'INITIALIZING...',
    'LOADING PROFILE: FABIAN_BUSTAMANTE',
    '<span class="red">ACCESS GRANTED</span>'
  ];
  function endBoot() { boot.classList.add('done'); setTimeout(() => boot.remove(), 700); }
  if (reduce) { endBoot(); }
  else {
    let i = 0, html = '';
    (function next() {
      if (i >= lines.length) return setTimeout(endBoot, 600);
      html += (i ? '\n' : '') + '> ' + lines[i++];
      bootText.innerHTML = html + '<span class="cursor">_</span>';
      setTimeout(next, 650);
    })();
    boot.addEventListener('click', endBoot);
  }

  /* ---------- Matrix rain ---------- */
  const cv = $('#matrix'), ctx = cv.getContext('2d');
  const chars = 'アイウエオカキクケコサシスセソ01{}[]<>/\\$#%&=+*'.split('');
  const fs = 16; let cols, drops;
  function size() {
    cv.width = cv.offsetWidth; cv.height = cv.offsetHeight;
    cols = Math.ceil(cv.width / fs);
    drops = Array.from({ length: cols }, () => Math.random() * -50);
  }
  size(); addEventListener('resize', size);
  let last = 0;
  function rain(t) {
    requestAnimationFrame(rain);
    if (t - last < 50 || document.hidden) return;
    last = t;
    ctx.fillStyle = 'rgba(10,10,10,.08)';
    ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.font = fs + 'px "Share Tech Mono", monospace';
    for (let i = 0; i < cols; i++) {
      ctx.fillStyle = Math.random() > .975 ? '#ff3333' : '#00ff41';
      ctx.fillText(chars[Math.random() * chars.length | 0], i * fs, drops[i] * fs);
      if (drops[i] * fs > cv.height && Math.random() > .975) drops[i] = 0;
      drops[i]++;
    }
  }
  if (!reduce) requestAnimationFrame(rain);

  /* ---------- Typing loop ---------- */
  const words = ['Penetration Tester', 'CTF Player', 'Red Team Enthusiast'];
  const typed = $('#typed');
  if (reduce) typed.textContent = words[0];
  else {
    let w = 0, c = 0, del = false;
    (function tick() {
      const word = words[w];
      typed.textContent = word.slice(0, c);
      let d = del ? 40 : 90;
      if (!del && c === word.length) { del = true; d = 1400; }
      else if (del && c === 0) { del = false; w = (w + 1) % words.length; d = 350; }
      else c += del ? -1 : 1;
      setTimeout(tick, d);
    })();
  }

  /* ---------- Glitch every 5s ---------- */
  const g = $('.glitch');
  if (!reduce) setInterval(() => {
    g.classList.add('on');
    setTimeout(() => g.classList.remove('on'), 480);
  }, 5000);

  /* ---------- Reveal, skill bars, counters ---------- */
  $$('.card,.stat,.tl,.title').forEach(el => el.classList.add('reveal'));
  function count(el) {
    const end = parseFloat(el.dataset.count), dec = +el.dataset.dec || 0;
    if (reduce) { el.textContent = end.toFixed(dec); return; }
    const t0 = performance.now();
    (function f(t) {
      const p = Math.min((t - t0) / 1400, 1);
      el.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(dec);
      if (p < 1) requestAnimationFrame(f);
    })(t0);
  }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target; io.unobserve(el);
    el.classList.add('in');
    $$('.bar i', el).forEach(b => b.style.width = b.dataset.w + '%');
    $$('[data-count]', el).forEach(count);
    if (el.matches('[data-count]')) count(el);
  }), { threshold: .2 });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- Nav ---------- */
  const burger = $('.burger'), menu = $('#menu');
  burger.addEventListener('click', () => {
    const o = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', o);
  });
  $$('#menu a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open'); burger.setAttribute('aria-expanded', false);
  }));
  const links = $$('#menu a');
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.hash === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section').forEach(s => spy.observe(s));
})();
