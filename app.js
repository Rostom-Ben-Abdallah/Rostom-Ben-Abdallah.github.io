(() => {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const themeToggle = document.getElementById('themeToggle');
  const year = document.getElementById('year');
  const glow = document.querySelector('.cursor-glow');

  if (year) year.textContent = new Date().getFullYear();

  if (!document.querySelector('link[data-portfolio-enhancements]')) {
    const enhancements = document.createElement('link');
    enhancements.rel = 'stylesheet';
    enhancements.href = 'award.css?v=3';
    enhancements.dataset.portfolioEnhancements = 'true';
    document.head.appendChild(enhancements);
  }

  const researchNav = navLinks?.querySelector('a[href="#research"]');
  const contactNav = navLinks?.querySelector('a[href="#contact"]');

  if (researchNav && !navLinks.querySelector('a[href="#about"]')) {
    const aboutNav = document.createElement('a');
    aboutNav.href = '#about';
    aboutNav.textContent = 'About';
    navLinks.insertBefore(aboutNav, researchNav);
  }

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

  const signalStrip = document.querySelector('.signal-strip');
  const researchSection = document.getElementById('research');
  if (signalStrip && researchSection && !document.getElementById('about')) {
    const aboutSection = document.createElement('section');
    aboutSection.className = 'section shell about-section reveal';
    aboutSection.id = 'about';
    aboutSection.setAttribute('aria-labelledby', 'aboutTitle');
    aboutSection.innerHTML = `
      <div class="about-grid">
        <div class="portrait-card" aria-label="Portrait of Rostom Ben Abdallah">
          <div class="portrait-grid" aria-hidden="true"></div>
          <div class="portrait-halo" aria-hidden="true"></div>
          <img src="assets/rostom-ben-abdallah.webp" alt="Rostom Ben Abdallah" loading="eager" />
          <div class="portrait-caption">
            <span>ROSTOM BEN ABDALLAH</span>
            <small>Computer Vision · Visual AI</small>
          </div>
        </div>

        <div class="about-copy">
          <span class="section-index">00 / ABOUT</span>
          <h2 id="aboutTitle">I build vision systems that survive <span class="muted">outside the notebook.</span></h2>
          <p class="about-lede">
            I am an Industrial Computer Engineering student at ENET’Com and a Mitacs research intern at Université de Moncton. My work sits at the intersection of <strong>computer vision, video understanding and intelligent systems</strong>, with hands-on experience moving from data and models to tracking, temporal reasoning, interfaces and deployment.
          </p>
          <p>
            My current research focuses on automated animal behaviour analysis from multi-camera video. Across research and industry projects, I have worked on detection, segmentation, multi-object tracking, Re-ID, action recognition, industrial inspection, edge deployment and robotics perception.
          </p>

          <div class="about-proof-grid" aria-label="Profile highlights">
            <div>
              <strong>MITACS</strong>
              <span>Research internship</span>
              <small>Université de Moncton</small>
            </div>
            <div>
              <strong>2nd PLACE</strong>
              <span>DIGILOG Challenge</span>
              <small>SIVAR / SafeVision</small>
            </div>
            <div>
              <strong>M.Sc.</strong>
              <span>Research target</span>
              <small>Computer Vision / AI</small>
            </div>
          </div>

          <div class="about-links">
            <a class="text-link" href="cv.html">Academic CV <span>↗</span></a>
            <a class="text-link" href="https://github.com/Rostom-Ben-Abdallah" target="_blank" rel="noreferrer">Public code & case studies <span>↗</span></a>
          </div>
        </div>
      </div>
    `;
    signalStrip.insertAdjacentElement('afterend', aboutSection);
  }

  const safeVisionTitle = [...document.querySelectorAll('.project-card h3')]
    .find((heading) => heading.textContent.includes('SafeVision'));
  if (safeVisionTitle) {
    const safeVisionCard = safeVisionTitle.closest('.project-card');
    const tags = safeVisionCard?.querySelector('.project-tags');
    if (tags && !safeVisionCard.querySelector('.award-project-badge')) {
      const badge = document.createElement('div');
      badge.className = 'award-project-badge';
      badge.innerHTML = '<span aria-hidden="true">★</span><strong>2nd Place</strong><small>DIGILOG Process Optimization Challenge · 2025</small>';
      tags.after(badge);
    }
  }

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
          <h2 id="awardTitle">Recognition backed by a <span class="muted">working system.</span></h2>
        </div>
        <p>SIVAR / SafeVision earned second place in the DIGILOG Process Optimization Challenge — external recognition for an applied computer-vision system that combined perception, event reasoning and operator-facing delivery.</p>
      </div>

      <article class="award-card">
        <div class="award-copy">
          <div class="award-kicker"><span aria-hidden="true">★</span> DIGILOG · PROCESS OPTIMIZATION CHALLENGE</div>
          <div class="award-rank"><span>2</span><sup>nd</sup><small>PLACE</small></div>
          <h3>SIVAR / SafeVision</h3>
          <p class="award-lede">Awarded <strong>second place</strong> at the DIGILOG Process Optimization Challenge held at ENET’Com Sfax from <strong>23–27 May 2025</strong>.</p>
          <p class="award-detail">The official certificate names <strong>ENET’Com</strong> (Tunisia), <strong>Leipzig University</strong> (Germany) and <strong>KNUST</strong> (Ghana) as organizers, with DAAD/BMZ support.</p>
          <div class="award-actions">
            <a class="text-link" href="https://github.com/Rostom-Ben-Abdallah/safevision-multicamera-vision" target="_blank" rel="noreferrer">Explore the awarded project <span>↗</span></a>
            <a class="award-proof" href="https://github.com/user-attachments/assets/d5e3b550-bbe9-4639-b5ea-5c1748143e43" target="_blank" rel="noreferrer">View official certificate</a>
          </div>
        </div>

        <a class="award-certificate" href="https://github.com/user-attachments/assets/d5e3b550-bbe9-4639-b5ea-5c1748143e43" target="_blank" rel="noreferrer" aria-label="Open DIGILOG second-place certificate">
          <div class="certificate-frame certificate-real">
            <img src="https://github.com/user-attachments/assets/d5e3b550-bbe9-4639-b5ea-5c1748143e43" alt="DIGILOG certificate confirming Rostom Ben Abdallah won second place in the Process Optimization Challenge" loading="lazy" />
          </div>
          <span class="certificate-open">Official certificate · open full size ↗</span>
        </a>
      </article>
    `;
    educationSection.insertAdjacentElement('afterend', awardSection);

    if (contactNav && !navLinks.querySelector('a[href="#award"]')) {
      const awardNav = document.createElement('a');
      awardNav.href = '#award';
      awardNav.textContent = 'Recognition';
      navLinks.insertBefore(awardNav, contactNav);
    }
  }

  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    root.dataset.theme = savedTheme;
  }

  themeToggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('portfolio-theme', next);
  });

  menuToggle?.addEventListener('click', () => {
    const open = !navLinks.classList.contains('open');
    navLinks.classList.toggle('open', open);
    menuToggle.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle?.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  const onScroll = () => {
    header?.classList.toggle('scrolled', window.scrollY > 14);
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
