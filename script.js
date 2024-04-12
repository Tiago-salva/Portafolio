const content = document.querySelector(".content");
const headerName = document.querySelector(".header__name");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const headerNav = document.querySelector(".header__nav");
const allHeaderNavItem = document.querySelectorAll(".header__nav-item");
const allContactoFormInput = document.querySelectorAll(".contacto__form-input");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");

window.addEventListener("DOMContentLoaded", () => {
  console.log(screen.width);
  if (screen.width >= 768) {
    headerName.textContent = "Tiago Salvatierra";
  }
});

hamburgerIcon.addEventListener("click", () => {
  headerNav.classList.toggle("displayed");
  line1.classList.toggle("active");
  line2.classList.toggle("active");
  line3.classList.toggle("active");
});

allHeaderNavItem.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    content.classList.remove("nav-displayed");
    headerNav.classList.remove("displayed");
    line1.classList.remove("active");
    line2.classList.remove("active");
    line3.classList.remove("active");
  });
});

allContactoFormInput.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value !== "") {
      input.classList.add("no-empty");
    } else {
      input.classList.remove("no-empty");
    }
  });
});
