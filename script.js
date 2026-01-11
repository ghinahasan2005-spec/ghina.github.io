// ===== Theme Toggle =====
const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  if (themeBtn) themeBtn.textContent = savedTheme === "light" ? "🌙" : "☀️";
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeBtn.textContent = next === "light" ? "🌙" : "☀️";
  });
}

// ===== Mobile Menu =====
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("show");
    menuBtn.textContent = mobileNav.classList.contains("show") ? "✕" : "☰";
  });
}

// ===== Footer Year =====
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// ===== Optional Stats Animation (Home only if ids exist) =====
function countUp(el, target) {
  let start = 0;
  const step = Math.max(1, Math.floor(target / 30));
  const interval = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + "+";
      clearInterval(interval);
    } else {
      el.textContent = start + "+";
    }
  }, 25);
}

const statA = document.getElementById("statAssignments");
const statB = document.getElementById("statActivities");
const statC = document.getElementById("statReflections");

if (statA && statB && statC) {
  countUp(statA, 6);
  countUp(statB, 6);
  countUp(statC, 6);
}
