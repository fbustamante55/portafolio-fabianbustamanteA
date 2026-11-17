(() => {
  document.documentElement.classList.add('js');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- i18n: English lives in the HTML, Spanish here ---------- */
  const ES = {
    "cert.iotname": "Intro a IoT y Transformación Digital",
    "cert.pbiname": "Visualización de datos con Power BI",
    "meta.desc": "Portafolio de Fabián Bustamante Aragón: estudiante de ciberseguridad, jugador de CTF y entusiasta de Red Team. SEC1 Certified. San José, Costa Rica.",
    "skip": "Saltar al contenido",
    "menu": "Menú",
    "nav.exp": "Experiencia",
    "nav.proj": "Proyectos",
    "nav.edu": "Educación",
    "nav.contact": "Contacto",
    "hero.contact": "Contáctame",
    "hero.cv": "Ver CV (ES / EN)",
    "hero.certs": "Certificaciones",
    "about.p1": "Aspiring offensive security professional con experiencia práctica en pentesting y defensa de redes.",
    "about.p2": "Hago CTF a diario en <strong>OverTheWire</strong> y <strong>TryHackMe</strong> usando Kali Linux: Nmap, Wireshark, Metasploit, Gobuster y Hashcat. Quedé en <strong>1.er lugar de 23 jugadores</strong> en el <strong>CTF Tropical Hunters</strong>.",
    "stat.ctf": "CTF Tropical Hunters (23 jugadores)",
    "stat.solves": "retos CTF resueltos · 6950 pts",
    "about.loc": "Costa Rica o remoto.",
    "stat.cams": "cámaras IP desplegadas",
    "stat.uptime": "% uptime del sistema CCTV",
    "stat.certs": "certificaciones y cursos",
    "skills.off": "Ofensiva",
    "skills.net": "Redes · Sistemas · Dev",
    "skills.netbar": "Redes (CCNA, VLANs)",
    "skills.note": "Barras = nivel autoevaluado de comodidad práctica.",
    "skills.ctf": "Plataformas CTF",
    "h.certs": "<span>03</span> Certificaciones",
    "certs.intro": "Insignias verificables en <a href=\"https://www.credly.com/users/fabianbustamante.36bc5c01\" target=\"_blank\" rel=\"noopener\">Credly</a>.",
    "btn.pdf": "Ver PDF",
    "btn.img": "Ver imagen",
    "btn.repo": "Ver repo",
    "cert.ccna": "Cisco · Fidélitas · Dic 2024",
    "cert.scrum": "Ene 2025",
    "cert.cca": "Anthropic · Abr 2026",
    "cert.pbi": "Fidélitas · 24 horas · Mar 2024",
    "certs.dev": "Desarrollo y datos",
    "certs.ai": "IA · Anthropic",
    "h.exp": "<span>04</span> Experiencia",
    "exp1.date": "Jun – Nov 2026 · 6 meses",
    "exp1.a": "CCTV en 2 sitios (supermercado + ferretería): 32 cámaras IP, NVR, 99.2% uptime.",
    "exp1.b": "Segmentación VLAN, cableado Cat 6, IPs estáticas, acceso remoto web/móvil.",
    "exp1.c": "Enlace de antena inalámbrica entre bodegas y switch principal.",
    "exp2.date": "May – Ago 2025 · 4 meses",
    "exp2.a": "Soporte técnico Tier 1 en inglés para clientes Verizon.",
    "exp2.b": "Troubleshooting de dispositivos y conectividad; escalación a Tier 2.",
    "exp2.c": "Gestión de tickets y activaciones de servicio.",
    "h.proj": "<span>05</span> Proyectos",
    "nox.p": "Scanner de red en Go de dos etapas: primero encuentra hosts y puertos abiertos rápido, luego identifica qué corre en ellos. Salida en JSON Lines para pipelines, y cada scan se guarda en SQLite para compararlo con el anterior (<code>nox diff</code>).",
    "nox.a": "Descubrimiento de hosts, motor SYN sin estado (Linux, root) con cookies HMAC y adaptación de tasa según pérdida, y escáner TCP connect sin privilegios.",
    "nox.b": "<code>--deep</code>: identifica SSH, HTTP(S)/TLS, SMTP, FTP, MySQL, Redis, SMB, PostgreSQL, RDP, MongoDB y más. Probado contra OpenSSH, nginx, Apache, MariaDB, Redis y Samba reales.",
    "nox.c": "Escaneo UDP, perfiles de timing <code>-T 0–5</code> y sistema de plugins (4 integrados de solo lectura, más los propios en cualquier lenguaje) con reglas en JSON.",
    "nox.d": "Seguridad por diseño: plugins sin shell, entorno mínimo, límite de tiempo y de salida; banners filtrados a ASCII imprimible.",
    "nox.note": "Proyecto independiente, en etapa temprana y probado en loopback y software local. Uso solo en sistemas autorizados.",
    "badge.pub": "GitHub · Público",
    "thm.p": "Notas y writeups de TryHackMe (Cyber Security 101): metodología y comandos de John the Ripper, Hydra, Gobuster, EternalBlue y CVE-2024-21413, más cheatsheet de recon, cracking, shells y privesc. Flags omitidas.",
    "otw.p": "Writeups de Natas (niveles 0–19, en progreso): LFI, command injection, SQLi, XOR con key estática y uploads con polyglots, con la vulnerabilidad, la explotación y la corrección.",
    "th.badge": "CTF · 1.er lugar de 23",
    "th.p": "Quedé en <strong>1.er lugar de 23 jugadores</strong> en el scoreboard del CTF Tropical Hunters con <strong>6950 puntos y 58 retos resueltos</strong> en Intro, Web, Pwn, Reversing, Crypto, Forensics y Misc. Documenté writeups de 49 retos con la vulnerabilidad, la explotación y exploits en Python.",
    "th.a": "<b>Pwn:</b> stack overflow, format string, integer overflow, out-of-bounds, shellcode, double free, use-after-free y TOCTOU.",
    "th.b": "<b>Reversing:</b> binarios empaquetados (UPX), bytecode de Python compilado (.pyc), strings construidas en la pila y validaciones de licencia.",
    "th.c": "<b>Crypto:</b> ataques a RSA (primos pequeños, primo compartido, mensaje corto), XOR y Vigenère.",
    "th.d": "<b>Web · Forensics · Misc:</b> IDOR, análisis de PCAP, desofuscación de PowerShell y esteganografía.",
    "th.alt": "Scoreboard del CTF Tropical Hunters: Fbustamante55 en 1.er lugar con 6950 puntos y 58 retos",
    "th.note": "Los writeups se publican cuando cierre la temporada, como piden las reglas del CTF.",
    "robot.p": "Pentest Copilot local para bug bounty, corriendo con Ollama + Docker.",
    "solca.badge": "TCU · Oct 2026 – Presente",
    "solca.h": "Fundación SOLCA — Inventario de uniformes",
    "solca.p": "Proyecto de Trabajo Comunal Universitario (Fidélitas) para la Fundación SOLCA, ligada al Colegio Calasanz. Sistema web de inventario y almacenamiento de uniformes escolares que apoya a familias de la comunidad educativa sin costo para la Fundación.",
    "solca.mod": "Módulos: usuarios y seguridad · inventario · entregas e ingresos · proveedores y pedidos · dashboard de reportes · donaciones · lista de espera y notificaciones a familias.",
    "tag.inv": "Inventario",
    "tag.com": "Servicio comunitario",
    "bambu.p": "Rediseño web para Grupo MH.",
    "tag.red": "Rediseño",
    "h.edu": "<span>06</span> Educación",
    "edu.deg": "Bachillerato en Ing. Sistemas de Computación",
    "h.contact": "<span>08</span> Contacto",
    "contact.btn": "Enviar correo"
  };
  const EN = {};
  const i18nEls = $$('[data-i18n]'), i18nAttrEls = $$('[data-i18n-attrs]');
  const attrPairs = el => el.dataset.i18nAttrs.split(';').map(p => p.split(':'));
  i18nEls.forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });
  i18nAttrEls.forEach(el => attrPairs(el).forEach(([attr, key]) => { EN[key] = el.getAttribute(attr); }));
  const langBtn = $('#lang');
  function setLang(lang) {
    const dict = lang === 'es' ? ES : EN;
    i18nEls.forEach(el => { const v = dict[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
    i18nAttrEls.forEach(el => attrPairs(el).forEach(([attr, key]) => { if (dict[key] != null) el.setAttribute(attr, dict[key]); }));
    document.documentElement.lang = lang;
    langBtn.textContent = lang === 'es' ? 'English' : 'Español';
    langBtn.lang = lang === 'es' ? 'en' : 'es';
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  let lang = 'en';
  try { if (localStorage.getItem('lang') === 'es') lang = 'es'; } catch (e) {}
  if (lang === 'es') setLang('es');
  langBtn.addEventListener('click', () => { lang = lang === 'es' ? 'en' : 'es'; setLang(lang); });

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
    addEventListener('keydown', endBoot, { once: true });
  }

  /* ---------- Matrix rain ---------- */
  const cv = $('#matrix'), ctx = cv.getContext('2d');
  const chars = 'アイウエオカキクケコサシスセソ01{}[]<>/\\$#%&=+*'.split('');
  const fs = 16; let cols, drops, W, H;
  function size() {
    const w = cv.offsetWidth, h = cv.offsetHeight;
    if (w === W && h === H) return;            // mobile fires resize on scroll: nothing changed
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = w; H = h;
    cv.width = w * dpr; cv.height = h * dpr;   // sharp on high-density screens
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.ceil(w / fs);
    if (n !== cols) { cols = n; drops = Array.from({ length: cols }, () => Math.random() * -50); }
  }
  size(); addEventListener('resize', size);
  let last = 0;
  function rain(t) {
    requestAnimationFrame(rain);
    if (t - last < 50 || document.hidden) return;
    last = t;
    ctx.fillStyle = 'rgba(10,10,10,.08)';
    ctx.fillRect(0, 0, W, H);
    ctx.font = fs + 'px "Share Tech Mono", monospace';
    for (let i = 0; i < cols; i++) {
      ctx.fillStyle = Math.random() > .975 ? '#ff3333' : '#00ff41';
      ctx.fillText(chars[Math.random() * chars.length | 0], i * fs, drops[i] * fs);
      if (drops[i] * fs > H && Math.random() > .975) drops[i] = 0;
      drops[i]++;
    }
  }
  if (!reduce) requestAnimationFrame(rain);

  /* ---------- Typing loop ---------- */
  const words = ['Penetration Tester', '#1 Tropical Hunters CTF', 'Red Team Enthusiast'];
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
  function closeMenu() { menu.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
  addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); burger.focus(); }
  });
  document.addEventListener('click', e => {
    if (menu.classList.contains('open') && !e.target.closest('.nav')) closeMenu();
  });
  const links = $$('#menu a');
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.hash === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section').forEach(s => spy.observe(s));
})();
