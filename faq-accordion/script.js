document.addEventListener("DOMContentLoaded", function () {
  const questionContainers = document.querySelectorAll(".question-container");

  questionContainers.forEach((container, index) => {
    const question = container.querySelector(".question");
    const answer = container.querySelector(".answer");
    const plusIcon = container.querySelector(".plus-icon");

    question.addEventListener("click", function () {
      if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        plusIcon.src = "assets/images/icon-minus.svg";
      } else {
        answer.style.display = "none";
        plusIcon.src = "assets/images/icon-plus.svg";
      }
    });

    if (index === 0) {
      answer.style.display = "block";
      plusIcon.src = "assets/images/icon-minus.svg";
    }
  });
});
