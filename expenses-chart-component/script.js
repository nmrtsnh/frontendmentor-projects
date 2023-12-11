const spendingBars = document.querySelectorAll(".spending-bars");

spendingBars.forEach((bar, index) => {
  bar.addEventListener("mouseover", () => {
    const spendingAmount = bar.querySelector(".spending-amount");

    spendingAmount.style.visibility = "visible";
  });

  bar.addEventListener("mouseout", () => {
    const spendingAmount = bar.querySelector(".spending-amount");

    spendingAmount.style.visibility = "hidden";
  });
});
