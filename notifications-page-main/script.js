const markAllRead = document.querySelector(".noti-text");
const notiNumber = document.querySelector(".noti-number");

const noti1 = document.getElementById("noti-1");
const noti2 = document.getElementById("noti-2");
const noti3 = document.getElementById("noti-3");

const dot1 = document.getElementById("dot-1");
const dot2 = document.getElementById("dot-2");
const dot3 = document.getElementById("dot-3");

markAllRead.addEventListener("click", function () {
  notiNumber.textContent = "0";
  markAllRead.style.color = "hsl(219, 14%, 63%)";

  noti1.classList.remove("noti-unread");
  noti2.classList.remove("noti-unread");
  noti3.classList.remove("noti-unread");

  dot1.classList.remove("red-dot");
  dot2.classList.remove("red-dot");
  dot3.classList.remove("red-dot");
});
