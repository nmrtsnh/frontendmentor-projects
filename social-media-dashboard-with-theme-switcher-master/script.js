// function myFunction() {
//   console.log();
//   var element = document.getElementById("change-please");
//   element.classList.toggle("dark-mode");
// }

// function myFunction() {
//   console.log();
//   var element = document.querySelector("main");
//   element.classList.toggle("light-mode");
// }

const toggleButton = document.querySelector(".switch");
const main = document.querySelector(".main");

// const main = document.querySelector("main");
// const primaryHeader = document.querySelector("primary-heading");
// const cardDashboard = document.querySelectorAll("card-dashboard");
// const cardOverview = document.querySelectorAll("card-overview");
// const numFollowers = document.querySelectorAll("num-followers");
// const currentStats = document.querySelectorAll("current-stats");

toggleButton.addEventListener("click", () => {
  console.log("click");
  main.classList.add("dark-theme");
});
