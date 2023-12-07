document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM content to be loaded before adding event listeners

  // Get the necessary elements
  const emailInput = document.getElementById("email");
  const notifyBtn = document.querySelector(".notify-btn");
  const errorMsg = document.getElementById("errorMsg");

  // Add click event listener to the "Notify me" button
  notifyBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Log the value to see what's being captured
    console.log("Email input value:", emailInput.value);

    // Trim the value and check if it's empty
    if (
      emailInput.value.trim() === "" ||
      emailInput.value === "Your email address..."
    ) {
      console.log("Email is empty");
      errorMsg.style.display = "block";
    } else {
      console.log("Email is not empty");
      errorMsg.style.display = "none";
    }
  });
});
