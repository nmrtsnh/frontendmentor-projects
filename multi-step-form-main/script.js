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

    const activeStep = document.querySelector(
      ".steps-container > div:not([hidden])"
    );
    activeStep.hidden = true;

    // Get the next step
    const nextStepNumber = parseInt(activeStep.dataset.step, 10) + 1;
    const nextStep = document.getElementById(`step-${nextStepNumber}`);
    nextStep.hidden = false;

    // Update the active step indicator in the sidebar (if applicable)
    updateSidebarActiveStep(nextStepNumber);

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

    const planName = selectedPlan
      .querySelector(".card-name")
      .textContent.trim();
    const subscriptionPrice = parseInt(
      selectedPlan.querySelector(".subscription-price").textContent,
      10
    );

    // Get the selected add-ons
    const selectedAddOns = document.querySelectorAll(".add-ons-card.selected");

    // Calculate the total price including add-ons
    let totalAmount = subscriptionPrice;

    selectedAddOns.forEach((addOn) => {
      const addOnPrice = parseInt(
        addOn.querySelector(".addons-price").textContent,
        10
      );
      totalAmount += addOnPrice;
    });

    // Display the selected plan in the summary section
    const selectedPlanContainer = document.getElementById("selected-plan");
    selectedPlanContainer.querySelector("h3").textContent = planName;
    selectedPlanContainer.querySelector(
      ".subscription-price"
    ).textContent = `$${subscriptionPrice}`;

    // Display the selected add-ons in the summary section
    const selectedAddOnsContainer = document.querySelector(
      ".selected-plan-container.flex"
    );
    selectedAddOnsContainer.querySelector("p").textContent = "Add-ons";

    const totalAddOnsAmount = Array.from(
      document.querySelectorAll(".add-ons-card.selected")
    )
      .map((addOn) =>
        parseInt(addOn.querySelector(".addons-price").textContent, 10)
      )
      .reduce((total, addOnPrice) => total + addOnPrice, 0);

    selectedAddOnsContainer.querySelector(".addons-price").textContent = `+$${
      totalAmount - subscriptionPrice
    }`;

    // Display the total amount in the summary section
    const totalContainer = document.getElementById("total");
    totalContainer.querySelector(".total-price").textContent = `$${
      totalAmount + totalAddOnsAmount
    }`;

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

    const activeStep = document.querySelector(
      ".steps-container > div:not([hidden])"
    );
    activeStep.hidden = true;

    // Get the previous step
    const prevStepNumber = parseInt(activeStep.dataset.step, 10) - 1;
    const prevStep = document.getElementById(`step-${prevStepNumber}`);
    prevStep.hidden = false;

    // Update the active step indicator in the sidebar
    updateSidebarActiveStep(prevStepNumber);

    // If going back from step-1, hide the "Go Back" button
    if (prevStepNumber === 1) {
      goBackButton.style.display = "none";
    }

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

  const addOnsCards = document.querySelectorAll(".add-ons-card");
  addOnsCards.forEach((addOnCard) => {
    addOnCard.addEventListener("click", handleAddOnCardClick);
  });

  function handleAddOnCardClick() {
    // Toggle the "selected" class on the clicked add-ons card
    this.classList.toggle("selected");

    // Toggle the checked state of the associated checkbox
    const checkbox = this.querySelector("input[type='checkbox']");
    checkbox.checked = !checkbox.checked;

    // Update the border color based on the selection status
    const isSelected = this.classList.contains("selected");
    this.style.borderColor = isSelected ? "yellow" : ""; // Replace with the desired color

    // Update the checkbox color based on the selection status
    checkbox.style.backgroundColor = isSelected ? "yellow" : ""; // Replace with the desired color

    // Call a function to update any additional UI or logic for add-ons selection
    // Example: updateUIForAddOnSelection();
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
