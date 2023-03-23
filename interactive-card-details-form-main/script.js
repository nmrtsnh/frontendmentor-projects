const cardholderName = document.querySelector(".cardholder-input");
console.log(cardholderName);

let a = document.query;
document
  .querySelector(".confirm-button")
  .addEventListener("click", function () {
    if (cardholderName === "") {
      document.getElementById("alert1").innerHTML = "can't be empty";
      document.getElementById("full-name").style.borderColor = "red";
    }
  });
