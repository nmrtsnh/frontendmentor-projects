const emailInput = document.getElementById("email");
const notifyBtn = document.querySelector(".notify-btn");
const errorMsg = document.getElementById("errorMsg");

notifyBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    emailInput.value.trim() === "" ||
    emailInput.value === "Your email address..."
  ) {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
  }
});
