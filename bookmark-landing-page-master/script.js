document.addEventListener("DOMContentLoaded", function () {
  var openBtn = document.getElementById("openBtn");
  var closeBtn = document.getElementById("closeBtn");
  var mobileNav = document.getElementById("mobileNav");
  var overlay = document.getElementById("overlay");
  const logo = document.getElementById("logo");

  openBtn.style.display = "block";
  closeBtn.style.display = "none";
  overlay.style.display = "none";

  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("open btn clicked");
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    mobileNav.style.display = "block";
    overlay.style.display = "block";
    logo.style.filter = "invert(1) brightness(100%)";
    // logo.classList.add("move-to-mobile");
  });

  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("close btnclicked");
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    mobileNav.style.display = "none";
    overlay.style.display = "none";
    logo.style.filter = "invert(0)";

    // logo.classList.remove("move-to-mobile");
  });
});
