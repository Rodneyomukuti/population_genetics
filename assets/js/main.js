// Progress bar
const bar = document.getElementById('progress-bar');
if (bar) {
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    bar.style.width = Math.min(pct, 100) + '%';
  });
}

// Discussion question toggles
document.querySelectorAll('.dq-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = answer.classList.toggle('open');
    btn.innerHTML = isOpen
      ? '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg> Hide brainstorm'
      : '<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8.747 4.86L13.543 10.342C14.109 10.987 13.649 12 12.79 12H3.198a1 1 0 0 1-.753-1.659l4.796-5.48a1 1 0 0 1 1.506 0z"/></svg> Show brainstorm / key ideas';
  });
});

// Module tabs
document.querySelectorAll('.module-tab').forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    const target = tab.dataset.module;
    document.querySelectorAll('.module-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.module-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    const content = document.getElementById('module-' + target);
    if (content) content.classList.add('active');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Active nav highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => observer.observe(s));
