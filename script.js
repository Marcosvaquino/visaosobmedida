// === Atualiza o ano automaticamente no rodapé ===
document.getElementById('year').textContent = new Date().getFullYear();

// === Menu Mobile ===
const btnMenu = document.getElementById('btnMenu');
const nav = document.getElementById('nav');

if (btnMenu && nav) {
  btnMenu.addEventListener('click', () => {
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
  });
}

// === Scroll suave para âncoras ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // fecha o menu ao clicar em mobile
      if (window.innerWidth < 760) {
        nav.style.display = 'none';
      }
    }
  });
});

// === Ajuste visual opcional no scroll ===
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (window.scrollY > 20) {
    header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.3)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  }
});
