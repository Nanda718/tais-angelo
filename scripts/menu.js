// menu mobile
const mobileButton = document.querySelector(".mobile-btn");
const mobileMenu = document.querySelector(".mobile-menu");
mobileButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
