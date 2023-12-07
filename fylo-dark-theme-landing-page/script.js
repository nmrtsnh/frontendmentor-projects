document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent the form from being submitted
    }
  });

  function validateForm() {
    var emailInput = document.getElementById("emailInput");
    var email = emailInput.value.trim();
    var errorElement = document.getElementById("error-message");

    if (email === "") {
      errorElement.textContent = "Please enter an email address";
      return false; // Prevent form submission
    }

    // You can add more advanced email validation if needed

    errorElement.textContent = ""; // Clear any previous error message
    return true; // Allow form submission
  }
});
