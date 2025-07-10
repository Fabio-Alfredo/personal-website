const mobileMenuButton = document.getElementById("mobile-menu-button");
const closeMobileMenuButton = document.getElementById("close-mobile-menu");
const mobileMenu = document.getElementById("mobile-menu");
const toggleBtn = document.getElementById("toggleDark");
const html = document.documentElement;
const toggleIcon = document.getElementById("toggleIcon");

// Smooth scrolling para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Manejo del menú móvil

if (mobileMenuButton && closeMobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
  });

  closeMobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });

  // Cierra el menú móvil al hacer clic en un enlace
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  window.addEventListener("scroll", () => {
    mobileMenu.classList.add("hidden");
  });
}

// Al cargar la página, aplicar preferencia
// de tema oscuro si está guardada en localStorage
if (
  localStorage.theme === "dark" ||
  (!localStorage.theme &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
  toggleIcon.innerText = "🌙";
} else {
  html.classList.remove("dark");
  toggleIcon.innerText = "🌞";
}

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  // Guardar preferencia
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleIcon.innerText = "🌙";
  } else {
    localStorage.setItem("theme", "light");
    toggleIcon.innerText = "🌞";
  }
});

// Inicialización de AOS (Animate On Scroll)
AOS.init({
  duration: 600,
  once: true,
  easing: "ease-in-out",
});
