const btn = document.querySelector(".button");
// console.log(btn);
function submit() {
  let a = document.querySelector(".cardholder-input");
  let b = document.querySelector(".cardholder-input");
  let c = document.querySelector(".expiry-details");
  let e = document.querySelector(".cvc-details");

  let d = document.querySelector(".cvc-details");
  // console.log(a);
  if (a.value === "") {
    document.getElementById("alert1").innerHTML = "Please Enter Your Name";
    document.getElementById("full-name").style.borderColor = "red";
  }
  if (b.value === "") {
    document.getElementById("alert2").innerHTML =
      "Please Enter Your Card Number";
    document.getElementById("card-number").style.borderColor = "red";
  }
  if (c.value === "") {
    document.getElementById("alert3").innerHTML = "Can't be Empty";
    document.getElementById("mm").style.borderColor = "red";
  }

  if (d.value === "") {
    document.getElementById("yy").style.borderColor = "red";
  }
  if (e.value === "") {
    document.getElementById("alert5").innerHTML = "Can't be Empty";
    document.getElementById("cvc").style.borderColor = "red";
  }
}
btn.addEventListener("click", submit);
