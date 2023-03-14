const toggleSwitch = document.querySelector('input[type="checkbox"]');
let topBg = document.querySelector(".top-bg");

//Switch Theme
function switchTheme(event) {
  console.log(event.target.checked);

  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}
//Event Listener
toggleSwitch.addEventListener("click", switchTheme);
