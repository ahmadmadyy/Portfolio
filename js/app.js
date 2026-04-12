// ─────────────────────────────────────────────
//  Initial load: fast orbit spin (reload feel)
// ─────────────────────────────────────────────
(function initLoadOrbit() {
  const orbit = document.querySelector('.hero-orbit');
  if (!orbit) return;
  orbit.classList.add('orbit-spin-fast');
  const end = () => orbit.classList.remove('orbit-spin-fast');
  if (document.readyState === 'complete') {
    setTimeout(end, 950);
  } else {
    window.addEventListener('load', () => setTimeout(end, 950));
  }
})();

// ─────────────────────────────────────────────
//  Faster in-page scroll (nav anchor links)
// ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const id = this.getAttribute('href');
    if (!id || id.length < 2 || id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const nav = document.querySelector('nav');
    const navH = nav ? nav.offsetHeight : 0;
    const y = target.getBoundingClientRect().top + window.scrollY - navH - 10;
    const start = window.scrollY;
    const dist = y - start;
    const dur = 320;
    const t0 = performance.now();
    const ease = t => 1 - (1 - t) * (1 - t);
    const step = now => {
      const t = Math.min((now - t0) / dur, 1);
      window.scrollTo({ top: start + dist * ease(t), behavior: 'auto' });
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
});

// ─────────────────────────────────────────────
//  Particles
// ─────────────────────────────────────────────
const PE = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDelay = Math.random() * 8 + 's';
  p.style.animationDuration = (6 + Math.random() * 6) + 's';
  PE.appendChild(p);
}

// ─────────────────────────────────────────────
//  Scroll reveal
// ─────────────────────────────────────────────
const obs = new IntersectionObserver(
  e => { e.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); }); },
  { threshold: .1 }
);
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ─────────────────────────────────────────────
//  Shared SVG assets
// ─────────────────────────────────────────────
const ghSvg = '<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';

// ─────────────────────────────────────────────
//  Projects
// ─────────────────────────────────────────────
const pG = document.getElementById('pGrid');
P.forEach(p => {
  const c = document.createElement('div');
  c.className = 'pc reveal';
  const media = p.video
    ? `<video src="${p.video}" muted loop autoplay playsinline></video>`
    : `<img src="${p.img}" alt="${p.t}" loading="lazy">`;
  const pli = p.video
    ? `<div class="pli"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>`
    : '';
  c.innerHTML = `
    <div class="pv">
      ${media}
      ${pli}
    </div>
    <div class="pi">
      <h3>${p.t}</h3>
      <p class="pd">${p.d}</p>
      <div class="pm">
        <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <span style="font-family:var(--mono);font-size:.7rem;color:var(--accent)">&rarr; Details</span>
      </div>
    </div>`;
  c.addEventListener('click', () => openP(p));
  pG.appendChild(c);
  obs.observe(c);
});

function openP(p) {
  const mediaHtml = p.video
    ? `<video src="${p.video}" controls playsinline></video>`
    : `<img src="${p.img}" alt="${p.t}">`;
  document.getElementById('dVid').innerHTML = mediaHtml;
  document.getElementById('dBody').innerHTML =
    `<h2>${p.t}</h2><div class="dr">${p.r}</div><div class="ddes">${p.fd}</div>` +
    `<div class="dft"><h4>Key Technical Details</h4>${p.ft.map(f => `<div class="fi">${f}</div>`).join('')}</div>` +
    `<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.5rem">${p.tags.map(t => `<span class="badge">${t}</span>`).join('')}</div>` +
    (p.gh ? `<a href="${p.gh}" class="ghl" target="_blank">${ghSvg}View on GitHub</a>` : '');
  document.getElementById('pOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeP() {
  document.getElementById('pOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('pOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeP();
});

// ─────────────────────────────────────────────
//  Certifications
// ─────────────────────────────────────────────
function openC(c) {
  const mediaHtml = c.img ? `<img src="${c.img}" alt="${c.name}">` : '';
  const skillsHtml = c.skills && c.skills.length
    ? `<div style="margin-bottom:1.5rem">
         <h4 style="font-size:.9rem;margin-bottom:.75rem;color:var(--t1)">Skills & Topics</h4>
         <div class="cert-skills">${c.skills.map(s => `<span class="cert-skill">${s}</span>`).join('')}</div>
       </div>`
    : '';
  const verifyHtml = c.url
    ? `<a href="${c.url}" class="ghl" target="_blank">${ghSvg}Verify Credential</a>`
    : '';
  document.getElementById('cVid').innerHTML = mediaHtml;
  document.getElementById('cBody').innerHTML =
    `<h2>${c.name}</h2><div class="dr">${c.issuer}</div><div class="ddes">${c.desc}</div>` +
    skillsHtml + verifyHtml;
  document.getElementById('cOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeC() {
  document.getElementById('cOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('cOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeC();
});

const certGrid = document.getElementById('certGrid');
CERTS.forEach(c => {
  const el = document.createElement('div');
  el.className = 'cert-card reveal';
  el.style.cursor = 'pointer';
  const imgHtml = c.img
    ? `<div class="cert-img${c.badge ? ' badge' : ''}"><img src="${c.img}" alt="${c.name}"></div>`
    : `<div class="cert-img"><div class="cert-img-placeholder">🏅</div></div>`;
  const metaHtml = c.credId ? `Credential ID: ${c.credId}` : '';
  el.innerHTML = `
    ${imgHtml}
    <div class="cert-body">
      <div>
        <div class="cert-issuer">${c.issuer}</div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-meta">${c.date}${metaHtml ? ' &nbsp;·&nbsp; ' + metaHtml : ''}</div>
      </div>
      <div style="font-family:var(--mono);font-size:.7rem;color:var(--accent);align-self:flex-end;margin-top:auto">&rarr; Details</div>
    </div>`;
  el.addEventListener('click', () => openC(c));
  certGrid.appendChild(el);
  obs.observe(el);
});

// ─────────────────────────────────────────────
//  Blog
// ─────────────────────────────────────────────
const bG = document.getElementById('bGrid');
BLOGS.forEach(b => {
  const c = document.createElement('div');
  c.className = 'bc reveal';
  c.style.cursor = 'pointer';
  const thumb = b.img
    ? `<img src="${b.img}" alt="${b.t}" loading="lazy"${b.thumbPos ? ` style="object-position:${b.thumbPos}"` : ''}>`
    : '';
  c.innerHTML = `
    <div class="bt">${thumb}</div>
    <div class="bb">
      <div class="bd">${b.dt}</div>
      <h3>${b.t}</h3>
      <div style="font-family:var(--mono);font-size:.7rem;color:var(--accent);margin-top:.75rem">&rarr; Read More</div>
    </div>`;
  c.addEventListener('click', () => openB(b));
  bG.appendChild(c);
  obs.observe(c);
});

function openB(b) {
  let mediaHtml = '';
  if (b.ytEmbed) {
    mediaHtml = `<div class="blog-yt"><iframe src="${b.ytEmbed}" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
  } else if (b.img) {
    const imgPos = b.modalImgPos || b.thumbPos || 'center center';
    mediaHtml = `<img src="${b.img}" alt="${b.t}" style="width:100%;height:100%;object-fit:cover;object-position:${imgPos}">`;
  }
  const galleryHtml = b.gallery
    ? `<div class="blog-gallery">${b.gallery.map(g => `<img src="${g}" loading="lazy" onclick="openLb('${g}')" style="cursor:zoom-in">`).join('')}</div>`
    : '';
  const tagsHtml = b.tags && b.tags.length
    ? `<div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.5rem">${b.tags.map(t => `<span class="badge">${t}</span>`).join('')}</div>`
    : '';
  document.getElementById('bVid').innerHTML = mediaHtml;
  document.getElementById('bBody').innerHTML =
    `<h2>${b.t}</h2><div class="dr">${b.dt}</div><div class="ddes" style="line-height:1.9">${b.content}</div>` +
    galleryHtml + tagsHtml;
  document.getElementById('bOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeB() {
  document.getElementById('bVid').innerHTML = '';
  document.getElementById('bOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.getElementById('bOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeB();
});

// ─────────────────────────────────────────────
//  Lightbox
// ─────────────────────────────────────────────
function openLb(src) {
  const lb = document.getElementById('imgLb');
  document.getElementById('imgLbImg').src = src;
  lb.style.display = 'flex';
}

function closeLb() {
  document.getElementById('imgLb').style.display = 'none';
  document.getElementById('imgLbImg').src = '';
}

// ─────────────────────────────────────────────
//  Global keyboard shortcuts
// ─────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeP(); closeC(); closeB(); closeLb(); }
});

// ─────────────────────────────────────────────
//  Lazy video autoplay — play only when in view
//  Prevents all videos loading/buffering at once
// ─────────────────────────────────────────────
const videoObs = new IntersectionObserver((entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) {
      target.play().catch(() => {});
    } else {
      target.pause();
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('video[muted]').forEach(v => {
  videoObs.observe(v);
});
