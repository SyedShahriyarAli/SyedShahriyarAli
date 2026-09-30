import { animate, inView } from "@motionone/dom";

export function initScrollReveal() {
  const sections = document.querySelectorAll<HTMLElement>("[data-reveal-section]");

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";

    inView(
      section,
      () => {
        animate(
          section,
          { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] },
          { duration: 0.8, easing: [0.16, 1, 0.3, 1] },
        );
      },
      { amount: 0.1, margin: "0px 0px -48px 0px" },
    );
  });

  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-reveal-section])");

  elements.forEach((el) => {
    const delay = parseFloat(el.dataset.revealDelay ?? "0");

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    inView(
      el,
      () => {
        animate(
          el,
          { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] },
          { duration: 0.8, delay, easing: [0.16, 1, 0.3, 1] },
        );
      },
      { amount: 0.12, margin: "0px 0px -32px 0px" },
    );
  });
}

export function initPortfolioEffects() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  initScrollReveal();
}
