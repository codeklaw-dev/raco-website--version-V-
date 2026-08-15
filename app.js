const getInitialTheme = () => {
  try {
    const savedTheme = window.localStorage.getItem("raco-theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  } catch (_) {}
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

document.documentElement.dataset.theme = getInitialTheme();

const routePalette = (() => {
  const path = window.location.pathname;
  if (path.startsWith("/solutions/ai") || path.startsWith("/insights") || path.startsWith("/raco-lab")) return "magenta";
  if (path.startsWith("/industries")) return "blue";
  if (path.startsWith("/engagement-models")) return "wine";
  if (path.startsWith("/company")) return "magenta";
  if (path.startsWith("/work")) return "coral";
  return "coral";
})();

if (!document.body.dataset.palette && document.body.classList.contains("inner-page")) document.body.dataset.palette = routePalette;

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-nav");
const video = document.querySelector(".video-shell video");
const soundButton = document.querySelector(".video-sound");
const themeToggle = document.querySelector(".theme-toggle");
const pendingProductLink = document.querySelector('[data-product-url="pending"]');
const workFilters = document.querySelector("[data-work-filters]");
const pendingExternalLink = document.querySelector('[data-external-url="pending"]');
const heroCarousel = document.querySelector("[data-hero-carousel]");
const accessForm = document.querySelector("[data-access-form]");
const contactRouting = document.querySelector("[data-contact-routing]");

if (contactRouting) {
  const requestedInterest = new URLSearchParams(window.location.search).get("interest");
  const interestSelect = contactRouting.querySelector('select[name="interest"]');
  if (requestedInterest && interestSelect?.querySelector(`option[value="${CSS.escape(requestedInterest)}"]`)) {
    interestSelect.value = requestedInterest;
  }
}

accessForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = accessForm.querySelector("[data-access-status]");
  if (status) status.textContent = "Secure identity service connection pending. Contact RACO operations for authorised access.";
});

if (heroCarousel) {
  const heroSlides = [...heroCarousel.querySelectorAll("[data-hero-slide]")];
  const heroDots = [...heroCarousel.querySelectorAll("[data-hero-dot]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let heroIndex = 0;
  let heroTimer;

  const showHeroSlide = (nextIndex, restart = true) => {
    heroIndex = (nextIndex + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((slide, index) => {
      const active = index === heroIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
      slide.inert = !active;
    });
    heroDots.forEach((dot, index) => {
      const active = index === heroIndex;
      dot.classList.toggle("is-active", active);
      if (active) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
    if (restart && !reduceMotion) startHeroTimer();
  };

  const startHeroTimer = () => {
    window.clearInterval(heroTimer);
    heroTimer = window.setInterval(() => showHeroSlide(heroIndex + 1, false), 7000);
  };

  heroCarousel.querySelector("[data-hero-prev]")?.addEventListener("click", () => showHeroSlide(heroIndex - 1));
  heroCarousel.querySelector("[data-hero-next]")?.addEventListener("click", () => showHeroSlide(heroIndex + 1));
  heroDots.forEach((dot) => dot.addEventListener("click", () => showHeroSlide(Number(dot.dataset.heroDot))));
  heroCarousel.addEventListener("mouseenter", () => window.clearInterval(heroTimer));
  heroCarousel.addEventListener("mouseleave", () => { if (!reduceMotion) startHeroTimer(); });
  heroCarousel.addEventListener("focusin", () => window.clearInterval(heroTimer));
  heroCarousel.addEventListener("focusout", (event) => {
    if (!heroCarousel.contains(event.relatedTarget) && !reduceMotion) startHeroTimer();
  });
  showHeroSlide(0, false);
  if (!reduceMotion) startHeroTimer();
}

const syncThemeControl = () => {
  if (!themeToggle) return;
  const theme = document.documentElement.dataset.theme;
  themeToggle.querySelector(".theme-toggle-label").textContent = theme === "dark" ? "Dark" : "Light";
  themeToggle.setAttribute("aria-checked", String(theme === "dark"));
  themeToggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
};

syncThemeControl();

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  try { window.localStorage.setItem("raco-theme", nextTheme); } catch (_) {}
  syncThemeControl();
});

window.addEventListener("scroll", () => header?.classList.toggle("is-scrolled", window.scrollY > 24), { passive: true });

const setNavigationOpen = (open) => {
  menuButton?.setAttribute("aria-expanded", String(open));
  menuButton?.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  mobileMenu?.classList.toggle("is-open", open);
  document.body.classList.toggle("nav-open", open);
};

menuButton?.addEventListener("click", () => setNavigationOpen(menuButton.getAttribute("aria-expanded") !== "true"));

header?.addEventListener("click", (event) => {
  if (event.target.closest("a, button, summary, .mobile-nav")) return;
  setNavigationOpen(menuButton?.getAttribute("aria-expanded") !== "true");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
    setNavigationOpen(false);
    menuButton.focus();
  }
});

mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  setNavigationOpen(false);
}));

document.querySelectorAll(".nav-group").forEach((group) => {
  group.addEventListener("toggle", () => {
    if (!group.open) return;
    document.querySelectorAll(".nav-group").forEach((other) => { if (other !== group) other.open = false; });
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-group")) document.querySelectorAll(".nav-group").forEach((group) => { group.open = false; });
});

document.querySelectorAll("[data-tabs]").forEach((tabs) => {
  const buttons = [...tabs.querySelectorAll('[role="tab"]')];
  const panels = [...tabs.querySelectorAll('[role="tabpanel"]')];
  buttons.forEach((button) => button.addEventListener("click", () => {
    buttons.forEach((item) => item.setAttribute("aria-selected", String(item === button)));
    panels.forEach((panel) => { panel.hidden = panel.id !== button.getAttribute("aria-controls"); });
  }));
});

document.querySelectorAll("[data-accordion]").forEach((accordion) => {
  const items = [...accordion.querySelectorAll(":scope > details")];
  items.forEach((item) => item.addEventListener("toggle", () => {
    if (!item.open) return;
    items.forEach((other) => { if (other !== item) other.open = false; });
  }));
});

const officeControls = [...document.querySelectorAll("[data-office]")];
const officeCards = [...document.querySelectorAll("[data-office-card]")];
const selectOffice = (office) => {
  officeControls.forEach((control) => control.classList.toggle("is-active", control.dataset.office === office));
  officeCards.forEach((card) => classListToggleOffice(card, office));
};
const classListToggleOffice = (card, office) => card.classList.toggle("is-active", card.dataset.officeCard === office);
officeControls.forEach((control) => control.addEventListener("click", () => selectOffice(control.dataset.office)));
officeCards.forEach((card) => card.addEventListener("click", () => selectOffice(card.dataset.officeCard)));

document.querySelectorAll("[data-hub-flip]").forEach((card) => {
  const toggleCard = () => {
    const flipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-pressed", String(flipped));
  };
  card.addEventListener("click", toggleCard);
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    toggleCard();
  });
});

soundButton?.addEventListener("click", () => {
  video.muted = !video.muted;
  soundButton.textContent = video.muted ? "Sound off" : "Sound on";
  soundButton.setAttribute("aria-label", video.muted ? "Unmute video" : "Mute video");
  if (video.paused) video.play().catch(() => {});
});

if (video && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const videoObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) video.play().catch(() => {}); else video.pause();
  }, { threshold: 0.35 });
  videoObserver.observe(video);
}

pendingProductLink?.addEventListener("click", (event) => {
  event.preventDefault();
});

pendingExternalLink?.addEventListener("click", (event) => {
  event.preventDefault();
});

workFilters?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  const filter = button.dataset.filter;
  workFilters.querySelectorAll("[data-filter]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
  document.querySelectorAll("[data-work-grid] [data-category]").forEach((card) => {
    card.hidden = filter !== "all" && !card.dataset.category.split(" ").includes(filter);
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const scrollStoryCards = [...document.querySelectorAll(".scroll-intro-card")];
const scrollStorySteps = [...document.querySelectorAll(".scroll-steps span")];
const journeyWheel = document.querySelector(".journey-wheel");
const journeyWheelStage = document.querySelector("[data-wheel-stage]");
if (scrollStoryCards.length) {
  const activateScrollStory = (activeIndex) => {
    scrollStoryCards.forEach((card, index) => {
      card.classList.toggle("is-active", index === activeIndex);
      card.classList.toggle("is-past", index < activeIndex);
      if (index === activeIndex) card.setAttribute("aria-current", "step");
      else card.removeAttribute("aria-current");
    });
    scrollStorySteps.forEach((step, index) => step.classList.toggle("is-active", index === activeIndex));
    if (journeyWheelStage) journeyWheelStage.textContent = String(activeIndex + 1).padStart(2, "0");
  };
  const scrollStoryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) activateScrollStory(scrollStoryCards.indexOf(entry.target));
    });
  }, { rootMargin: "-32% 0px -48% 0px", threshold: 0 });
  scrollStoryCards.forEach((card, index) => card.addEventListener("toggle", () => {
    if (card.open) activateScrollStory(index);
  }));
  scrollStoryCards.forEach((card) => scrollStoryObserver.observe(card));

  if (journeyWheel) {
    const journeySection = journeyWheel.closest(".scroll-intro");
    let wheelFrame;
    const updateJourneyWheel = () => {
      const rect = journeySection.getBoundingClientRect();
      const travel = rect.height + window.innerHeight;
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / travel));
      journeyWheel.style.setProperty("--wheel-rotation", `${progress * 540}deg`);
      wheelFrame = null;
    };
    window.addEventListener("scroll", () => {
      if (!wheelFrame) wheelFrame = window.requestAnimationFrame(updateJourneyWheel);
    }, { passive: true });
    updateJourneyWheel();
  }
}
