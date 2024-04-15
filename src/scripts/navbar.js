const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeAria = document.getElementById("close-aria");
const mobileLinks = document.querySelectorAll(".mobile-links");

function toggleMenu() {
  mobileMenu.classList.toggle("active");
  closeAria.classList.toggle("hidden");
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);
closeAria.addEventListener("click", toggleMenu);
mobileLinks.addEventListener("click", toggleMenu);
