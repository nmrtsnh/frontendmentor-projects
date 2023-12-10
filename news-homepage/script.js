document.addEventListener("DOMContentLoaded", function () {
  // Get references to the open button, close button, and mobile navigation
  var openBtn = document.getElementById("openBtn");
  var closeBtn = document.getElementById("closeBtn");
  var mobileNav = document.getElementById("mobileNav");
  var overlay = document.getElementById("overlay");

  openBtn.style.display = "block";
  closeBtn.style.display = "none";
  overlay.style.display = "none";

  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    mobileNav.style.display = "block";
    overlay.style.display = "block";
  });

  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
    mobileNav.style.display = "none";
    overlay.style.display = "none";
  });
});
