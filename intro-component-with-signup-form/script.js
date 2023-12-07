const form = document.querySelector(".signup-form");

form.addEventListener("submit", function (event) {
  const errorMessages = document.querySelectorAll(".error-msg");
  errorMessages.forEach(function (errorMsg) {
    errorMsg.style.display = "none";
  });

  const errorIcons = document.querySelectorAll(".error-icon");
  errorIcons.forEach(function (errorIcon) {
    errorIcon.style.display = "none";
  });

  let hasError = false;
  const formFields = form.querySelectorAll(".error");
  formFields.forEach(function (field) {
    const value = field.value.trim();

    if (value === "") {
      const errorMsg = field.nextElementSibling.nextElementSibling;
      const errorIcon = field.nextElementSibling;
      errorMsg.style.display = "block";
      errorIcon.style.display = "block";
      hasError = true;
    }

    if (field.name === "Email" && !isValidEmail(value)) {
      const errorMsg = field.nextElementSibling.nextElementSibling;
      const errorIcon = field.nextElementSibling;
      errorMsg.textContent = "Invalid email address";
      errorMsg.style.display = "block";
      errorIcon.style.display = "block";
      hasError = true;
    }
  });

  if (hasError) {
    event.preventDefault();
  }
});
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
