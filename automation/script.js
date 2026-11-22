const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");
const header = document.querySelector(".site-header");

navToggle.addEventListener("click", () => {
  const open = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 8);
}, { passive: true });

document.getElementById("year").textContent = String(new Date().getFullYear());
