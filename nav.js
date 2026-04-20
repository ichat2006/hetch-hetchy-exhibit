// Mobile nav
const t = document.querySelector('.nav-toggle');
const n = document.querySelector('.nav-links');
if (t && n) t.addEventListener('click', () => n.classList.toggle('open'));

// Timeline
document.querySelectorAll('.tl').forEach(el => {
  new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('vis'); } }, { threshold: 0.15 }).observe(el);
});

// Active nav link
const cur = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  a.classList.toggle('active', a.getAttribute('href') === cur || (cur === '' && a.getAttribute('href') === 'index.html'));
});
