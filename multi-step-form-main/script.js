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

  const toggleSwitch = document.getElementById("toggleSwitch");
  const monthlyLabel = document.querySelector(".monthly-toggle");
  const yearlyLabel = document.querySelector(".yearly-toggle");

  // Add a click event listener to the "Next Step" button
  nextButton.addEventListener("click", handleNextButtonClick);

  // Add a click event listener to the pricing cards
  const pricingCards = document.querySelectorAll(".pricing-card");
  pricingCards.forEach((card) => {
    card.addEventListener("click", handlePricingCardClick);
  });

  // Add a click event listener to the "Go Back" button
  goBackButton.addEventListener("click", handleGoBackButtonClick);

  // Toggle switch event listener
  toggleSwitch.addEventListener("change", handleToggleSwitchChange);

  // Function to handle "Next Step" button click
  function handleNextButtonClick(event) {
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
  }

  // Function to handle pricing card click
  function handlePricingCardClick() {
    // Remove the "active" class from all pricing cards
    pricingCards.forEach((otherCard) => {
      otherCard.classList.remove("active");
    });

    // Add the "active" class to the clicked pricing card
    this.classList.add("active");

    // Reset the border color of all pricing cards
    pricingCards.forEach((card) => {
      card.style.borderColor = "";
    });

    // Change the border color of the selected plan
    updateBorderColor(this);

    // Hide the "Please select a plan" error message
    selectPlanError.style.display = "none";
  }

  // Function to handle "Go Back" button click
  function handleGoBackButtonClick(event) {
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
  }

  // Function to handle toggle switch change
  function handleToggleSwitchChange() {
    const monthlyPriceElements = document.querySelectorAll(
      ".subscription-duration"
    );
    const yearlyPriceElements = document.querySelectorAll(
      ".subscription-duration"
    );

    const yearlyBenefit = document.querySelectorAll(".yearly-benefit");

    // Toggle the visibility of monthly and yearly prices
    if (toggleSwitch.checked) {
      // Switching to yearly
      monthlyLabel.style.color = "var(--cool-grey)";
      yearlyLabel.style.color = "var(--marine-blue)";
      monthlyPriceElements.forEach((element) => {
        element.textContent = "yr";
      });

      yearlyBenefit.forEach((element) => {
        element.style.display = "block";
      });
    } else {
      // Switching to monthly
      monthlyLabel.style.color = "var(--marine-blue)";
      yearlyLabel.style.color = "var(--cool-grey)";
      yearlyPriceElements.forEach((element) => {
        element.textContent = "mo";
      });

      yearlyBenefit.forEach((element) => {
        element.style.display = "none";
      });
    }

    updateTotalAmount();

    // Call a function to update the total amount or perform any other necessary actions
    // Example: updateTotalAmount();
  }

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

  const selectedPlan = document.querySelector(".pricing-card.active");

  // Function to update the border color based on the selected plan
  function updateBorderColor(selectedPlan) {
    selectedPlan.style.borderColor = "yellow"; // Replace with the desired color
  }

  // Function to update the total amount based on the selected plan and duration
  function updateTotalAmount() {
    const isYearly = toggleSwitch.checked;
    const pricingCards = document.querySelectorAll(".pricing-card");

    pricingCards.forEach((card) => {
      const planNameElement = card.querySelector(".card-name");

      const subscriptionPriceElement = card.querySelector(
        ".subscription-price"
      );

      const subscriptionDurationElement = card.querySelector(
        ".subscription-duration"
      );

      if (
        planNameElement &&
        subscriptionPriceElement &&
        subscriptionDurationElement
      ) {
        let subscriptionPrice;

        // Update subscription price based on the selected plan and duration

        const planName = planNameElement.textContent.trim();

        switch (planName) {
          case "Arcade":
            subscriptionPrice = isYearly ? 90 : 9;
            break;
          case "Advance":
            subscriptionPrice = isYearly ? 120 : 12;
            break;
          case "Pro":
            subscriptionPrice = isYearly ? 150 : 15;
            break;
          default:
            subscriptionPrice = 0;
        }

        // Update the displayed subscription price
        subscriptionPriceElement.textContent = subscriptionPrice;
        subscriptionDurationElement.textContent = isYearly ? "yr" : "mo";
      }
    });
  }
});
