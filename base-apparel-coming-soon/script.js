const form = document.querySelector("form");
const emailInput = document.querySelector("input");

const errorElement = document.querySelector(".error");
const errorIcon = document.querySelector(".error-icon");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  if (emailValue === "") {
    errorElement.style.display = "block";
    errorIcon.style.display = "block";
  } else {
    form.submit();
  }
});
