const dayInput = document.getElementById("date");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const resultBtn = document.getElementById("button");
const inputs = document.querySelectorAll(".input");

let errorMsg = document.querySelectorAll(".error-msg");
let msg1 = document.querySelector(".msg-1");
let msg2 = document.querySelector(".msg-2");
let msg3 = document.querySelector(".msg-3");

let yearsField = document.getElementById("years");
let monthsField = document.getElementById("months");
let daysField = document.getElementById("days");

const date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + 1;
let currentDay = date.getDate();

let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let isLeapYear = false;

const errorField = function () {
  [...inputs].forEach((input) => {
    if (!Number(input.value)) {
      input.style.border = "2px solid hsl(0, 100%, 67%)";
    } else {
      input.style.border = "1px solid hsl(0,0%,86%)";
    }
  });

  //Day
  if (!Number(dayInput.value)) {
    msg1.textContent = "This field is required";
  } else if (dayInput.value > 31 || dayInput.value < 1) {
    msg1.textContent = `Please enter a valid day`;
    yearsField.textContent = "--";
    monthsField.textContent = "--";
    daysField.textContent = "--";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else {
    msg1.textContent = ``;
  }

  //Month
  if (!Number(monthInput.value)) {
    msg2.textContent = "This field is required";
  } else if (Number(monthInput.value) > 12 || Number(monthInput.value) < 1) {
    msg2.textContent = `Please enter a valid day`;
    monthInput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else if (
    (Number(dayInput.value) === 31 && Number(monthInput.value) === 4) ||
    (Number(dayInput.value) === 31 && Number(monthInput.value) === 6) ||
    (Number(dayInput.value) === 31 && Number(monthInput.value) === 9) ||
    (Number(dayInput.value) === 31 && Number(monthInput.value) === 11)
  ) {
    msg1.textContent = "Must be a valid date";
    yearsField.textContent = "--";
    monthsField.textContent = "--";
    daysField.textContent = "--";
    dayInput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else {
    msg2.textContent = ``;
  }

  //Year
  if (!Number(yearInput.value)) {
    msg3.textContent = "This field is required";
  } else if (Number(yearInput.value) > currentYear) {
    msg3.textContent = "Must be in the past";
    yearInput.style.border = "1px solid hsl(0, 100%, 67%)";
  } else {
    msg3.textContent = ``;
  }
};

const getAge = function () {
  let inputDay = parseInt(dayInput.value);
  let inputMonth = parseInt(monthInput.value);
  let inputYear = parseInt(yearInput.value);

  if (inputYear % 4 === 0) {
    if (inputYear % 100 === 0) {
      if (inputYear % 400 === 0) {
        isLeapYear = true;
      }
    } else {
      isLeapYear = true;
    }
  }

  if (inputDay > currentDay) {
    currentDay = currentDay + months[currentMonth - 1];

    currentMonth = currentMonth - 1;
  }

  if (inputMonth > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }
  let day = currentDay - inputDay;
  let month = currentMonth - inputMonth;
  let year = currentYear - inputYear;

  if (isLeapYear && month <= 2 && day <= 29) {
    day--;
  }

  if (inputDay && inputMonth && inputYear) {
    yearsField.textContent = year;
    monthsField.textContent = month;
    daysField.textContent = day;
  }

  inputDay = "";
  inputMonth = "";
  inputYear = "";
};

const clearInput = function () {};

resultBtn.addEventListener("click", function () {
  getAge();
  errorField();
});
