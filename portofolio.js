(() => {
  const mainContent = document.querySelector("main");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (!targetSection) return;

      event.preventDefault();

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  }, {
    root: mainContent,
    threshold: 0.35,
  });

  sections.forEach((section) => observer.observe(section));
})();