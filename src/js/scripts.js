const mobileButton = document.querySelector(".header__mobile-button");
const mobileMenu = document.querySelector(".header__links");

mobileButton.addEventListener("click", () => {
  if (mobileMenu.classList.contains("active")) {
    mobileMenu.classList.remove("active");
    mobileButton.classList.remove("active");
  }
  else {
    mobileMenu.classList.add("active");
    mobileButton.classList.add("active");
  }
})