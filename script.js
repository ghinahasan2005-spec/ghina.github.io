// Theme toggle (dark/light)
const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const saved = localStorage.getItem("theme");

if (saved) root.setAttribute("data-theme", saved);

function updateThemeIcon(){
  if (!themeBtn) return;
  const t = root.getAttribute("data-theme");
  themeBtn.textContent = (t === "light") ? "🌙" : "☀️";
}
updateThemeIcon();

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = (current === "light") ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon();
  });
}

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
    menuBtn.textContent = mobileNav.classList.contains("show") ? "✕" : "☰";
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
