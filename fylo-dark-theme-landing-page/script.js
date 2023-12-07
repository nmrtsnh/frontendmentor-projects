document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

  function validateForm() {
    var emailInput = document.getElementById("emailInput");
    var email = emailInput.value.trim();
    var errorElement = document.getElementById("error-message");

    if (email === "") {
      errorElement.textContent = "Please enter a valid email address";
      return false;
    }

    errorElement.textContent = "";
    return true;
  }
});
