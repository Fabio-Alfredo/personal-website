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
const mobileMenuButton = document.getElementById("mobile-menu-button");
const closeMobileMenuButton = document.getElementById("close-mobile-menu");
const mobileMenu = document.getElementById("mobile-menu");

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

// Inicialización de AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  once: true,
  easing: "ease-in-out",
});
