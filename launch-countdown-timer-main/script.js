const flipCards = document.querySelectorAll(".flip-card");
const topFlipCard = document.querySelectorAll(".top-flip-card");
const bottomFlipCard = document.querySelectorAll(".bottom-flip-card");
const heading = document.getElementById("heading");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set the date we are counting down to\
// const theBigDay = new Date("Apr 25, 2023 06:05:25");
const theBigDay = new Date().setHours(new Date().getHours() + 504);
// const theBigDay = new Date().setMinutes(new Date().getMinutes() + 1);

const countdownDate = new Date(theBigDay);
console.log(countdownDate);
//Update the count down every 1 second

const timer = setInterval(() => {
  //Get today's date and time
  const currentDate = new Date();

  //Find the distance between now and the count down date
  const distance = countdownDate - currentDate;

  //Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);

  //Output the result in an element
  topFlipCard[0].textContent = `${days}`;
  topFlipCard[1].textContent = `${hours}`;
  topFlipCard[2].textContent = `${minutes}`;
  topFlipCard[3].textContent = `${seconds}`;

  bottomFlipCard[0].textContent = `${days}`;
  bottomFlipCard[1].textContent = `${hours}`;
  bottomFlipCard[2].textContent = `${minutes}`;
  bottomFlipCard[3].textContent = `${seconds}`;

  //If the countdown is over, write some text
  if (distance < 0) {
    clearInterval(timer);
    heading.innerHTML = "The countdown has stopped";
    topFlipCard[0].textContent = "00";
    topFlipCard[1].textContent = "00";
    topFlipCard[2].textContent = "00";
    topFlipCard[3].textContent = "00";

    bottomFlipCard[0].textContent = "00";
    bottomFlipCard[1].textContent = "00";
    bottomFlipCard[2].textContent = "00";
    bottomFlipCard[3].textContent = "00";
  }
}, 1000);
