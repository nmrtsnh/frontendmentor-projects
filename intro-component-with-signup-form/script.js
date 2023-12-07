const form = document.querySelector(".signup-form");
const passwordInput = document.getElementById("password");
const showPasswordCheckbox = document.getElementById("showPassword");

// Event listener for the show password checkbox
showPasswordCheckbox.addEventListener("change", function () {
  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});

form.addEventListener("submit", function (event) {
  // Reset error styles
  const errorMessages = document.querySelectorAll(".error-msg");
  errorMessages.forEach(function (errorMsg) {
    errorMsg.style.display = "none";
  });

  const errorIcons = document.querySelectorAll(".error-icon");
  errorIcons.forEach(function (errorIcon) {
    errorIcon.style.display = "none";
  });

  // Validate form fields
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

    // Check email format
    if (field.name === "Email" && !isValidEmail(value)) {
      const errorMsg = field.nextElementSibling.nextElementSibling;
      const errorIcon = field.nextElementSibling;
      errorMsg.textContent = "Invalid email address";
      errorMsg.style.display = "block";
      errorIcon.style.display = "block";
      hasError = true;
    }
  });

  // Prevent form submission if there is an error
  if (hasError) {
    event.preventDefault();
  }
});

// Function to validate email format using regular expression
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
