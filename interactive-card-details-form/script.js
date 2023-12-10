const btn = document.querySelector(".button");
const submitButton = document.querySelector(".confirm-button");
const continueButton = document.querySelector(".continue-button");

function submit() {
  let a = document.querySelector("#full-name");
  let b = document.querySelector("#card-number");
  let c = document.querySelector("#mm");
  let d = document.querySelector("#yy");
  let e = document.querySelector("#cvc");

  document
    .querySelectorAll(".alert")
    .forEach((alert) => (alert.innerHTML = ""));
  document
    .querySelectorAll(".cardholder-input")
    .forEach((input) => (input.style.borderColor = ""));

  if (a.value === "") {
    document.getElementById("alert1").innerHTML = "Please Enter Your Name";
    a.style.borderColor = "red";
  }
  if (b.value === "") {
    document.getElementById("alert2").innerHTML =
      "Please Enter Your Card Number";
    b.style.borderColor = "red";
  }
  if (c.value === "") {
    document.getElementById("alert3").innerHTML = "Can't be Empty";
    document.getElementById("mm").style.borderColor = "red";
  }
  if (d.value === "") {
    document.getElementById("alert4").innerHTML = "Can't be Empty";
    document.getElementById("yy").style.borderColor = "red";
  }
  if (e.value === "") {
    document.getElementById("alert5").innerHTML = "Can't be Empty";
    document.getElementById("cvc").style.borderColor = "red";
  }

  if (
    a.value !== "" &&
    b.value !== "" &&
    c.value !== "" &&
    d.value !== "" &&
    e.value !== ""
  ) {
    document.querySelector(".card-details-container").style.display = "none";

    document.querySelector(".thankyou-container").style.display = "block";
  }
}

function continueToCardDetails() {
  document.querySelector(".thankyou-container").style.display = "none";

  document.querySelector(".card-details-container").style.display = "block";

  document.querySelector("#full-name").value = "";
  document.querySelector("#card-number").value = "";
  document.querySelector("#mm").value = "";
  document.querySelector("#yy").value = "";
  document.querySelector("#cvc").value = "";
}

btn.addEventListener("click", submit);
continueButton.addEventListener("click", continueToCardDetails);
