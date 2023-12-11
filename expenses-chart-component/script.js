document.addEventListener("DOMContentLoaded", function () {
  // Get all spending bar elements
  const spendingBars = document.querySelectorAll(".spending-bars");

  // Add event listeners to each spending bar
  spendingBars.forEach((bar, index) => {
    bar.addEventListener("mouseover", () => {
      // Get the corresponding spending amount element
      const spendingAmount = bar.querySelector(".spending-amount");

      // Make the spending amount visible
      spendingAmount.style.visibility = "visible";
    });

    bar.addEventListener("mouseout", () => {
      // Get the corresponding spending amount element
      const spendingAmount = bar.querySelector(".spending-amount");

      // Hide the spending amount
      spendingAmount.style.visibility = "hidden";
    });
  });
});
