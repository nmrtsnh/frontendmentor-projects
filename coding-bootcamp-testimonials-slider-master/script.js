document.addEventListener("DOMContentLoaded", function () {
  const containerTanya = document.querySelector(".container-tanya");
  const containerJohn = document.querySelector(".container-john");
  const nextButton = document.querySelector(".icon-next");
  const prevButton = document.querySelector(".icon-prev");

  containerJohn.classList.add("show");
  containerTanya.classList.remove("show");

  nextButton.addEventListener("click", function () {
    containerJohn.classList.remove("show");
    containerTanya.classList.add("show");
  });

  prevButton.addEventListener("click", function () {
    containerTanya.classList.remove("show");
    containerJohn.classList.add("show");
  });
});
