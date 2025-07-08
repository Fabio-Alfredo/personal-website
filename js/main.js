const mobileMenuButton = document.getElementById("mobile-menu-button");
const closeMobileMenuButton = document.getElementById("close-mobile-menu");
const mobileMenu = document.getElementById("mobile-menu");
const tailwindConfig = {
  darkMode: "class", // Activamos el modo oscuro con clase
  content: ["./**/*.html", "./**/*.js"], // Rutas de contenido
  theme: {
    extend: {},
  },
  plugins: [],
};

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
}

const toggleBtn = document.getElementById("toggleDark");
const html = document.documentElement;

// Al cargar la página, aplicar preferencia
if (
  localStorage.theme === "dark" ||
  (!localStorage.theme &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

// Al hacer click en el botón
toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
  // Guardar preferencia
  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Inicialización de AOS (Animate On Scroll)
AOS.init({
  duration: 600,
  once: true,
  easing: "ease-in-out",
});
