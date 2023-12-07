const ratingButtons = document.querySelectorAll(".rating");

const container1 = document.getElementById("container-1");
const container2 = document.getElementById("container-2");

const submitButton = document.querySelector(".submit-btn");

ratingButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    ratingButtons.forEach(function (btn) {
      btn.classList.remove("active");
      btn.style.backgroundColor = "#262f38";
      btn.style.color = "var(--color-light-grey)"; //
    });

    this.classList.add("active");

    this.style.backgroundColor = "var(--color-orange)";
    this.style.color = "var(--color-white)";
  });
});

submitButton.addEventListener("click", function () {
  let selectedRating = null;

  ratingButtons.forEach(function (button) {
    if (button.classList.contains("active")) {
      selectedRating = button.textContent;
    }
  });

  if (selectedRating !== null) {
    container1.style.display = "none";

    container2.style.display = "block";

    document.querySelector(
      ".text-1"
    ).textContent = `You selected ${selectedRating} out of 5`;
  } else {
    alert("Please select a rating before submitting.");
  }
});
