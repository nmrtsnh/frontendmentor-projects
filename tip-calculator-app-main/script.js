document.addEventListener("DOMContentLoaded", function () {
  // Selecting elements
  const billInput = document.getElementById("bill-total");
  const tipButtons = document.querySelectorAll(".tip-percent");
  const customTipInput = document.querySelector(".input-custom");
  const numPeopleInput = document.getElementById("num-people");
  const tipAmountElement = document.querySelector(".tip-amount-total span");
  const totalAmountElement = document.querySelectorAll(
    ".total-person-amount span"
  );
  const resetButton = document.querySelector(".reset-button");

  // Event listener for bill input
  billInput.addEventListener("input", updateAmounts);

  // Event listeners for tip buttons
  tipButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const isActive = button.classList.contains("active");
      // Remove 'active' class from all buttons
      tipButtons.forEach(function (btn) {
        btn.classList.remove("active");

        updateButtonStyle(btn);
      });

      if (!isActive) {
        // Add 'active' class to the clicked button
        button.classList.add("active");

        // Update the background color of the selected button immediately
        updateButtonStyle(button);
      }

      // Reset custom tip input
      customTipInput.value = "";

      // Update amounts
      updateAmounts();
    });
  });

  // Event listener for custom tip input
  customTipInput.addEventListener("input", updateAmounts);

  // Event listener for number of people input
  numPeopleInput.addEventListener("input", updateAmounts);

  // Event listener for reset button
  resetButton.addEventListener("click", function () {
    billInput.value = "";
    tipButtons.forEach(function (button) {
      button.classList.remove("active");
      updateButtonStyle(button);
    });
    customTipInput.value = "";
    numPeopleInput.value = "";
    updateAmounts();
  });

  // Function to update tip amount and total
  function updateAmounts() {
    // Get number of people
    const numPeople = parseInt(numPeopleInput.value) || 0;

    // Check if the number of people is greater than 0
    if (numPeople > 0) {
      // Get bill amount
      const billAmount = parseFloat(billInput.value) || 0;

      // Get selected tip percentage
      let tipPercentage = 0;
      tipButtons.forEach(function (button) {
        if (button.classList.contains("active")) {
          tipPercentage = parseFloat(button.textContent) / 100;
        }
      });

      // If custom tip is entered, use that value
      if (customTipInput.value !== "") {
        tipPercentage = parseFloat(customTipInput.value) / 100;
      }

      // Calculate tip amount and total per person
      const tipAmount = billAmount * tipPercentage;
      const totalAmount = billAmount / numPeople + tipAmount / numPeople;

      const tipAmountPerPerson = tipAmount / numPeople;

      // Display the calculated amounts
      tipAmountElement.textContent = `$${tipAmountPerPerson.toFixed(2)}`;
      totalAmountElement.forEach(function (element) {
        element.textContent = `$${totalAmount.toFixed(2)}`;
      });
    } else {
      // If the number of people is not greater than 0, reset the displayed amounts
      tipAmountElement.textContent = "$0.00";
      totalAmountElement.forEach(function (element) {
        element.textContent = "$0.00";
      });
    }
  }

  function updateButtonStyle(button) {
    if (button.classList.contains("active")) {
      button.style.backgroundColor = "var(--strong-cyan)";
    } else {
      button.style.backgroundColor = "";
    }
  }
});
