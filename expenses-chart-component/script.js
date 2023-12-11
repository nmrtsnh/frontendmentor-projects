let scaleFactor = 2;
let spendingBars;

fetch("./data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // console.log("Data fetched successfully:", data);
    spendingBars = document.querySelectorAll(".spending-bars");

    if (!spendingBars || spendingBars.length === 0) {
      throw new Error("No elements with class 'spending-bars' found.");
    }

    spendingBars.forEach((bar, index) => {
      bar.addEventListener("mouseover", () => {
        const spendingAmount = bar.querySelector(".spending-amount");
        spendingAmount.style.visibility = "visible";
      });

      bar.addEventListener("mouseout", () => {
        const spendingAmount = bar.querySelector(".spending-amount");
        if (spendingAmount) {
          spendingAmount.style.visibility = "hidden";
        }
      });
    });

    updateChart(data.spendingData);
  })
  .catch((error) => console.error("Error fetching data:", error));

function updateChart(spendingData) {
  if (!spendingBars || spendingBars.length === 0) {
    // console.error("No elements with class 'spending-bars' found.");
    return;
  }

  spendingBars.forEach((bar, index) => {
    if (index < spendingData.length) {
      const barHeight = spendingData[index].amount * scaleFactor;
      // console.log(`Setting height for bar ${index + 1}: ${barHeight}px`);

      const barElement = bar.querySelector(".bar");
      const spendingAmountElement = bar.querySelector(".spending-amount");

      barElement.style.height = `${barHeight}px`;

      spendingAmountElement.textContent = `$${spendingData[
        index
      ].amount.toFixed(2)}`;
    }
  });
}
