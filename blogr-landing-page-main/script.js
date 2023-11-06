document.addEventListener("DOMContentLoaded", function () {
  const openDropdowns = document.querySelectorAll(".open-dropdown");
  const menuBtn = document.querySelector(".menu-btn");

  const mobNavBar = document.querySelector(".mob-nav-bar");

  function hideAllDropdowns() {
    document.querySelectorAll(".dropdown.active").forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
    document.querySelectorAll(".arrow-icon.rotate").forEach((arrowIcon) => {
      arrowIcon.classList.remove("rotate");
    });
  }

  openDropdowns.forEach((openDropdown, index) => {
    function handleClick(e) {
      e.preventDefault();
      e.stopPropagation();
      const dropdown = document.querySelectorAll(".dropdown")[index];
      const arrowIcon = document.querySelectorAll(".arrow-icon")[index];

      if (dropdown && arrowIcon) {
        const isActive = dropdown.classList.contains("active");

        hideAllDropdowns();

        if (!isActive) {
          dropdown.classList.toggle("active");
          arrowIcon.classList.add("rotate");
        }
      }
    }
    openDropdown.addEventListener("click", handleClick);
  });

  menuBtn.addEventListener("click", function () {
    mobNavBar.classList.toggle("active");
  });
});
