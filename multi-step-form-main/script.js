document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.getElementById("next-step-button");
  const goBackButton = document.querySelector(".go-back-button");
  const errorMessages = document.querySelectorAll(".error-msg");
  const selectPlanError = document.getElementById("select-plan-error");

  // Hide all error messages and select plan error by default
  errorMessages.forEach((errorMessage) => {
    errorMessage.style.display = "none";
  });
  selectPlanError.style.display = "none";
  goBackButton.style.display = "none";

  // Add a click event listener to the "Next Step" button
  nextButton.addEventListener("click", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if name, email, and number are empty
    const nameInput = document.getElementById("fname");
    const emailInput = document.getElementById("email");
    const numberInput = document.getElementById("number");
    const nameEmpty = !nameInput.value.trim();
    const emailEmpty = !emailInput.value.trim();
    const numberEmpty = !numberInput.value.trim();

    // Display error messages based on the empty status of the fields
    errorMessages[0].style.display = nameEmpty ? "block" : "none";
    errorMessages[1].style.display = emailEmpty ? "block" : "none";
    errorMessages[2].style.display = numberEmpty ? "block" : "none";

    // If any required field is empty, prevent the transition to the next step
    if (nameEmpty || emailEmpty || numberEmpty) {
      return;
    }

    // Hide the personal-info step (Step 1)
    const personalInfoStep = document.getElementById("step-1");
    personalInfoStep.style.display = "none";

    // Show the plan-details step (Step 2)
    const planDetailsStep = document.getElementById("step-2");
    planDetailsStep.hidden = false;

    // Update the active step indicator in the sidebar (if applicable)
    updateSidebarActiveStep(2);

    // Show the "Go Back" button
    goBackButton.style.display = "inline-block";

    // Check if a pricing card is selected
    const selectedPlan = document.querySelector(".pricing-card.active");
    if (!selectedPlan) {
      // If no plan is selected, display the error message
      selectPlanError.style.display = "block";
      return;
    } else {
      // If a plan is selected, hide the error message
      selectPlanError.style.display = "none";
    }

    // Reset the border color of all pricing cards
    document.querySelectorAll(".pricing-card").forEach((card) => {
      card.style.borderColor = "";
    });

    // Change the border color of the selected plan
    updateBorderColor(selectedPlan);

    // Call a function to handle any additional logic or UI updates for the next step
    // Example: updateUIForNextStep();
  });

  // Add a click event listener to the pricing cards
  const pricingCards = document.querySelectorAll(".pricing-card");
  pricingCards.forEach((card) => {
    card.addEventListener("click", function () {
      // Remove the "active" class from all pricing cards
      pricingCards.forEach((otherCard) => {
        otherCard.classList.remove("active");
      });

      // Add the "active" class to the clicked pricing card
      card.classList.add("active");

      // Reset the border color of all pricing cards
      pricingCards.forEach((card) => {
        card.style.borderColor = "";
      });

      // Change the border color of the selected plan
      updateBorderColor(card);

      // Hide the "Please select a plan" error message
      selectPlanError.style.display = "none";
    });
  });

  // Add a click event listener to the "Go Back" button
  goBackButton.addEventListener("click", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Hide the current step (Step 2)
    const planDetailsStep = document.getElementById("step-2");
    planDetailsStep.hidden = true;

    // Show the personal-info step (Step 1)
    const personalInfoStep = document.getElementById("step-1");
    personalInfoStep.style.display = "block";

    // Update the active step indicator in the sidebar (if applicable)
    updateSidebarActiveStep(1);

    // Hide the "Go Back" button
    goBackButton.style.display = "none";

    // Call a function to handle any additional logic or UI updates for the previous step
    // Example: updateUIForPreviousStep();
  });

  // Function to update the active step indicator in the sidebar (if applicable)
  function updateSidebarActiveStep(stepNumber) {
    const sidebarSteps = document.querySelectorAll(".step-number");
    sidebarSteps.forEach((step) => {
      step.classList.remove("active");
    });

    const currentSidebarStep = document.querySelector(
      `.step-number[data-step="${stepNumber}"]`
    );
    if (currentSidebarStep) {
      currentSidebarStep.classList.add("active");
    }
  }

  // Function to update the border color based on the selected plan
  function updateBorderColor(selectedPlan) {
    selectedPlan.style.borderColor = "yellow"; // Replace with the desired color
  }

  // Add the "active" class to the default selected plan (Arcade)
  const defaultSelectedPlan = document.querySelector(".pricing-card.arcade");
  if (defaultSelectedPlan) {
    defaultSelectedPlan.classList.add("active");
    // Change the border color of the default selected plan (Arcade) to its original color
    updateBorderColor(defaultSelectedPlan);
  }
});
