const content = document.querySelector(".content");
const headerName = document.querySelector(".header__name");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const headerNav = document.querySelector(".header__nav");
const allHeaderNavItem = document.querySelectorAll(".header__nav-item");
const contactoForm = document.querySelector(".contacto__form");
const allContactoFormInput = document.querySelectorAll(".contacto__form-input");
const allErrorMessage = document.querySelectorAll(".error-message");
const btnEnviarMensaje = document.querySelector(".btn-enviar-mensaje");
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");

window.addEventListener("DOMContentLoaded", () => {
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

allContactoFormInput.forEach((input, index) => {
  input.addEventListener("input", () => {
    allErrorMessage[index].textContent = "";
    allErrorMessage[index].classList.remove("displayed");

    showError(input, index);

    if (input.value !== "") {
      input.classList.add("no-empty");
    } else {
      input.classList.remove("no-empty");
    }
  });
});

contactoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!checkErrors()) {
    allContactoFormInput.forEach((input) => {
      input.value = "";
      input.classList.remove("no-empty");
    });

    btnEnviarMensaje.classList.add("sent");
    setTimeout(() => {
      btnEnviarMensaje.classList.remove("sent");
    }, 1500);
  }
});

function showError(input, index) {
  if (input.validity.valueMissing) {
    allErrorMessage[index].classList.add("displayed");
    allErrorMessage[index].textContent = "El input no puede estar vacio";
    return true;
  } else if (input.validity.typeMismatch) {
    allErrorMessage[index].classList.add("displayed");
    allErrorMessage[index].textContent = "El input debe ser un E-mail valido";
    return true;
  } else if (input.validity.tooShort) {
    allErrorMessage[index].classList.add("displayed");
    allErrorMessage[index].textContent =
      "El input debe tener al menos 50 caracteres";
    return true;
  }
}

function checkErrors() {
  let thereIsSomeError = false;

  allContactoFormInput.forEach((input, index) => {
    thereIsSomeError = showError(input, index);
  });

  return thereIsSomeError;
}
