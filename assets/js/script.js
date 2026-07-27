// ── NAVBAR TOGGLE ──
    const toggle = document.getElementById('nav-toggle');
    const navWrap = document.getElementById('nav-wrap');
    toggle.addEventListener('click', () => {
      const isOpen = navWrap.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });
    // close on link click
    navWrap.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navWrap.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
      });
    });

    // ── SCROLL REVEAL ──
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // stagger children in same parent
            const siblings = entry.target.parentElement.querySelectorAll('.reveal');
            let delay = 0;
            siblings.forEach((s, idx) => { if (s === entry.target) delay = idx * 80; });
            setTimeout(() => entry.target.classList.add('visible'), delay);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach(el => observer.observe(el));
    } else {
      reveals.forEach(el => el.classList.add('visible'));
    }

    // ── COOKIE BANNER ──
    const banner = document.getElementById('cookie-banner');
    const dismiss = () => {
      banner.classList.add('hidden');
      try { localStorage.setItem('kn_cookies', '1'); } catch(e) {}
    };
    if (localStorage.getItem('kn_cookies')) banner.classList.add('hidden');
    document.getElementById('cookie-accept').addEventListener('click', dismiss);
    document.getElementById('cookie-deny').addEventListener('click', dismiss);

    // ── NAVBAR SCROLL SHADOW ──
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 10
        ? '0 4px 24px rgba(0,0,0,.3)'
        : 'none';
    }, { passive: true });

    // ── NAVBAR: aparece só depois de descer a intro (somente na home) ──
    // O rootMargin de -40% encolhe o topo da viewport em 40% da altura da tela,
    // então a intro deixa de intersectar depois de ~40% de rolagem — é aí que o
    // menu entra. Sem IntersectionObserver, mostra o menu de imediato.
    const autoHideHeader = document.querySelector('.header--auto-hide');
    const introSection = document.querySelector('.hero-intro');
    if (autoHideHeader) {
      if (introSection && 'IntersectionObserver' in window) {
        const headerObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            autoHideHeader.classList.toggle('is-visible', !entry.isIntersecting);
            // fecha o menu mobile se ele estiver aberto quando a barra some
            if (entry.isIntersecting && navWrap.classList.contains('open')) {
              navWrap.classList.remove('open');
              toggle.setAttribute('aria-expanded', 'false');
              toggle.setAttribute('aria-label', 'Abrir menu');
            }
          });
        }, { rootMargin: '-40% 0px 0px 0px', threshold: 0 });
        headerObserver.observe(introSection);
      } else {
        autoHideHeader.classList.add('is-visible');
      }
    }
