const formContent = document.querySelector(".form-content");
const signUpForm = document.querySelector(".sign-up-form");
const thankYouForm = document.querySelector(".thank-you-form");
const errorMsg = document.querySelector(".error-msg");
const emailInput = document.querySelector("input");
const subscribeButton = document.querySelector("button");
const dismissButton = document.querySelector(".thank-you-form button");
const emailBold = document.querySelector(".email-bold");

subscribeButton.addEventListener("click", function (event) {
  event.preventDefault();

  const emailValue = emailInput.value.trim();

  if (isValidEmail(emailValue)) {
    signUpForm.style.display = "none";
    thankYouForm.style.display = "flex";
    emailBold.textContent = emailValue;
  } else {
    errorMsg.style.display = "block";
    emailInput.classList.add("error");
  }
});

dismissButton.addEventListener("click", function () {
  signUpForm.style.display = "flex";
  thankYouForm.style.display = "none";

  emailInput.value = "";
  emailInput.classList.remove("error");
  emailBold.textContent = "";
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

emailInput.addEventListener("input", function () {
  errorMsg.style.display = "none";
  emailInput.classList.remove("error");
});
