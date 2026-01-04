// Preloader
window.addEventListener("load", () => {
  document.querySelector(".preloader").classList.add("hidden");
});

// Slider
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 6000);

// Navbar Scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// Dark/Light Mode
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  const icon = isLight ? "☀" : "☾";
  document.getElementById("theme-icon").textContent = icon;
  document.getElementById("theme-icon-mobile").textContent = icon;
}

// Mobile Menu
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

// Scroll Reveal (Including new Image Animation)
const revealElements = document.querySelectorAll(".reveal, .reveal-left");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  },
  { threshold: 0.15 }
);
revealElements.forEach((el) => revealObserver.observe(el));
