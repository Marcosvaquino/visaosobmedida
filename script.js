// ano automático no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// menu mobile
const btn = document.getElementById('btnMenu');
const nav = document.getElementById('nav');
btn?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? 'none' : 'flex';
});

// scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(!id || id==='#') return;
    const el = document.querySelector(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      if (window.innerWidth < 760) nav.style.display='none';
    }
  });
});

// "envio" simples do formulário (substitua por backend/Formspree quando quiser)
document.getElementById('formContato')?.addEventListener('submit', e=>{
  e.preventDefault();
  const data = new FormData(e.target);
  const nome = data.get('nome');
  const email = data.get('email');
  const mensagem = data.get('mensagem');
  const body = encodeURIComponent(
    `Olá, sou ${nome} (${email}).\n\n${mensagem}\n\nEnviado via site Visão Sob Medida.`
  );
  // abre e-mail padrão do usuário
  window.location.href = `mailto:contato@visaosobmedida.com.br?subject=Contato%20via%20site&body=${body}`;
});
