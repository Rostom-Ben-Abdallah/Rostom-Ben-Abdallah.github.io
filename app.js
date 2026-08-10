(() => {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const themeToggle = document.getElementById('themeToggle');
  const year = document.getElementById('year');
  const glow = document.querySelector('.cursor-glow');

  year.textContent = new Date().getFullYear();

  // Load the award-specific presentation without expanding the base stylesheet.
  if (!document.querySelector('link[href="award.css"]')) {
    const awardStyles = document.createElement('link');
    awardStyles.rel = 'stylesheet';
    awardStyles.href = 'award.css';
    document.head.appendChild(awardStyles);
  }

  // Keep the formal CV one click away for faculty reviewers without crowding the base markup.
  const contactNav = navLinks.querySelector('a[href="#contact"]');
  if (contactNav && !navLinks.querySelector('a[href="cv.html"]')) {
    const cvNav = document.createElement('a');
    cvNav.href = 'cv.html';
    cvNav.textContent = 'CV';
    navLinks.insertBefore(cvNav, contactNav);
  }

  const heroActions = document.querySelector('.hero-actions');
  if (heroActions && !heroActions.querySelector('a[href="cv.html"]')) {
    const cvButton = document.createElement('a');
    cvButton.className = 'btn btn-ghost';
    cvButton.href = 'cv.html';
    cvButton.innerHTML = 'View CV <span aria-hidden="true">↗</span>';
    heroActions.appendChild(cvButton);
  }

  // Surface the DIGILOG recognition directly on the SafeVision/SIVAR project card.
  const safeVisionTitle = [...document.querySelectorAll('.project-card h3')]
    .find((heading) => heading.textContent.includes('SafeVision'));
  if (safeVisionTitle) {
    const safeVisionCard = safeVisionTitle.closest('.project-card');
    const tags = safeVisionCard?.querySelector('.project-tags');
    if (tags && !safeVisionCard.querySelector('.award-project-badge')) {
      const badge = document.createElement('div');
      badge.className = 'award-project-badge';
      badge.innerHTML = '<span aria-hidden="true">🏆</span><strong>2nd Place</strong><small>DIGILOG Process Optimization Challenge · 2025</small>';
      tags.after(badge);
    }
  }

  // Add a dedicated achievement section between Education and Contact.
  const educationSection = document.querySelector('.education-section');
  const contactSection = document.getElementById('contact');
  if (educationSection && contactSection && !document.getElementById('award')) {
    const awardSection = document.createElement('section');
    awardSection.className = 'section shell award-section reveal';
    awardSection.id = 'award';
    awardSection.setAttribute('aria-labelledby', 'awardTitle');
    awardSection.innerHTML = `
      <div class="section-heading award-heading">
        <div>
          <span class="section-index">06 / RECOGNITION</span>
          <h2 id="awardTitle">Awarded for turning an idea into a <span class="muted">working vision system.</span></h2>
        </div>
        <p>The SIVAR / SafeVision project earned second place in an international process-optimization challenge involving academic partners from Tunisia, Germany and Ghana.</p>
      </div>

      <article class="award-card">
        <div class="award-copy">
          <div class="award-kicker"><span aria-hidden="true">★</span> DIGILOG · PROCESS OPTIMIZATION CHALLENGE</div>
          <div class="award-rank"><span>2</span><sup>nd</sup><small>PLACE</small></div>
          <h3>SIVAR / SafeVision</h3>
          <p class="award-lede">The project was recognized with <strong>second place</strong> in the DIGILOG Process Optimization Challenge, held at ENET’Com Sfax from <strong>23–27 May 2025</strong>.</p>
          <p class="award-detail">The certificate records the challenge as organized by <strong>ENET’Com</strong> (Tunisia), <strong>Leipzig University</strong> (Germany) and <strong>KNUST</strong> (Ghana), with DAAD/BMZ support.</p>
          <div class="award-actions">
            <a class="text-link" href="https://github.com/Rostom-Ben-Abdallah/safevision-multicamera-vision" target="_blank" rel="noreferrer">Explore the awarded project <span>↗</span></a>
            <span class="award-proof">Official certificate available</span>
          </div>
        </div>
        <div class="award-certificate" id="awardCertificate">
          <div class="certificate-frame">
            <div class="certificate-mark" aria-hidden="true">🏆</div>
            <span>OFFICIAL CERTIFICATE</span>
            <strong>DIGILOG · SECOND PLACE</strong>
            <small>Certificate image will appear here after the GitHub media attachment is linked.</small>
          </div>
        </div>
      </article>
    `;
    educationSection.insertAdjacentElement('afterend', awardSection);

    if (contactNav && !navLinks.querySelector('a[href="#award"]')) {
      const awardNav = document.createElement('a');
      awardNav.href = '#award';
      awardNav.textContent = 'Award';
      navLinks.insertBefore(awardNav, contactNav);
    }
  }

  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    root.dataset.theme = savedTheme;
  }

  themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
  });

  menuToggle.addEventListener('click', () => {
    const open = !navLinks.classList.contains('open');
    navLinks.classList.toggle('open', open);
    menuToggle.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 14);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => revealObserver.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const navAnchors = [...navLinks.querySelectorAll('a[href^="#"]')];
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  if (window.matchMedia('(pointer: fine)').matches && glow) {
    window.addEventListener('pointermove', (event) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    }, { passive: true });
  } else if (glow) {
    glow.remove();
  }

  document.querySelectorAll('video').forEach((video) => {
    video.addEventListener('play', () => {
      document.querySelectorAll('video').forEach((other) => {
        if (other !== video && !other.paused) other.pause();
      });
    });
  });
})();
