(function () {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mainMenu = document.getElementById('mainMenu');
  const slides = Array.from(document.querySelectorAll('.start-banner__slide'));
  const insightSlides = Array.from(document.querySelectorAll('.start-insights__slide'));
  const insightPanel = document.getElementById('sidePanelContent');
  const insightTitle = insightPanel?.querySelector('h2');
  const insightDescription = insightPanel?.querySelector('p');
  const insightLink = insightPanel?.querySelector('a');
  const prevButton = document.querySelector('[data-carousel-prev]');
  const nextButton = document.querySelector('[data-carousel-next]');
  const videoModal = document.getElementById('videoModal');
  const videoModalTitle = document.getElementById('videoModalTitle');
  const videoButtons = document.querySelectorAll('[data-video-title]');
  const videoCloseButtons = document.querySelectorAll('[data-video-close]');
  const bannerCarousel = document.querySelector('.start-banner');
  const insightCarousel = document.querySelector('.start-insights');
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeSlide = 0;
  let activeInsightSlide = 0;
  let carouselTimer = null;
  let insightCarouselTimer = null;

  function closeMainMenu() {
    document.body.classList.remove('mobile-menu-open');
    mobileMenuToggle?.setAttribute('aria-expanded', 'false');
    mainMenu?.querySelectorAll('.main-menu__group.is-open').forEach(group => {
      group.classList.remove('is-open');
      group.querySelector('[data-menu-group]')?.setAttribute('aria-expanded', 'false');
    });
  }

  function setActiveSlide(nextIndex) {
    if (!slides.length) return;
    activeSlide = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === activeSlide);
    });
  }

  function restartCarousel() {
    window.clearInterval(carouselTimer);
    if (reducedMotionQuery.matches || document.hidden || bannerCarousel?.matches(':hover') || bannerCarousel?.contains(document.activeElement)) return;
    carouselTimer = window.setInterval(() => setActiveSlide(activeSlide + 1), 6000);
  }

  function pauseCarousel() {
    window.clearInterval(carouselTimer);
    carouselTimer = null;
  }

  function setActiveInsightSlide(nextIndex) {
    if (!insightSlides.length) return;
    activeInsightSlide = (nextIndex + insightSlides.length) % insightSlides.length;
    insightSlides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === activeInsightSlide);
    });

    const activeInsight = insightSlides[activeInsightSlide];
    if (insightTitle && activeInsight.dataset.title) {
      insightTitle.textContent = activeInsight.dataset.title;
    }
    if (insightDescription && activeInsight.dataset.description) {
      insightDescription.textContent = activeInsight.dataset.description;
    }
    if (insightLink && activeInsight.dataset.link) {
      insightLink.setAttribute('href', activeInsight.dataset.link);
      insightLink.textContent = 'Ver cadena';
    }
  }

  function restartInsightCarousel() {
    window.clearInterval(insightCarouselTimer);
    if (reducedMotionQuery.matches || document.hidden || insightCarousel?.matches(':hover') || insightCarousel?.contains(document.activeElement)) return;
    insightCarouselTimer = window.setInterval(() => setActiveInsightSlide(activeInsightSlide + 1), 5200);
  }

  function pauseInsightCarousel() {
    window.clearInterval(insightCarouselTimer);
    insightCarouselTimer = null;
  }

  function bindCarouselPause(container, pause, resume) {
    if (!container) return;
    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);
    container.addEventListener('focusin', pause);
    container.addEventListener('focusout', event => {
      if (!container.contains(event.relatedTarget)) resume();
    });
  }

  function openVideo(title) {
    if (!videoModal) return;
    if (videoModalTitle) videoModalTitle.textContent = title;
    videoModal.hidden = false;
    document.body.classList.add('video-modal-open');
  }

  function closeVideo() {
    if (!videoModal) return;
    videoModal.hidden = true;
    document.body.classList.remove('video-modal-open');
  }

  mobileMenuToggle?.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('mobile-menu-open');
    mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainMenu?.addEventListener('click', (event) => {
    const toggle = event.target.closest('[data-menu-group]');
    if (!toggle) return;

    const group = toggle.closest('.main-menu__group');
    if (!group) return;

    const isOpen = group.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));

    mainMenu.querySelectorAll('.main-menu__group.is-open').forEach(item => {
      if (item === group) return;
      item.classList.remove('is-open');
      item.querySelector('[data-menu-group]')?.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (!mainMenu || !mobileMenuToggle) return;
    if (mainMenu.contains(event.target) || mobileMenuToggle.contains(event.target)) return;
    closeMainMenu();
  });

  prevButton?.addEventListener('click', () => {
    setActiveSlide(activeSlide - 1);
    restartCarousel();
  });

  nextButton?.addEventListener('click', () => {
    setActiveSlide(activeSlide + 1);
    restartCarousel();
  });

  videoButtons.forEach(button => {
    button.addEventListener('click', () => openVideo(button.dataset.videoTitle || 'Tutorial'));
  });

  videoCloseButtons.forEach(button => {
    button.addEventListener('click', closeVideo);
  });

  window.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    closeMainMenu();
    closeVideo();
  });

  window.addEventListener('resize', () => {
    if (window.matchMedia('(min-width: 721px)').matches) closeMainMenu();
  });

  bindCarouselPause(bannerCarousel, pauseCarousel, restartCarousel);
  bindCarouselPause(insightCarousel, pauseInsightCarousel, restartInsightCarousel);

  reducedMotionQuery.addEventListener?.('change', () => {
    if (reducedMotionQuery.matches) {
      pauseCarousel();
      pauseInsightCarousel();
    } else {
      restartCarousel();
      restartInsightCarousel();
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      pauseCarousel();
      pauseInsightCarousel();
    } else {
      restartCarousel();
      restartInsightCarousel();
    }
  });

  setActiveSlide(0);
  setActiveInsightSlide(0);
  restartCarousel();
  restartInsightCarousel();
}());
