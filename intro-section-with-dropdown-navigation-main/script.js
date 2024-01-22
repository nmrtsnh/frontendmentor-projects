document.addEventListener("DOMContentLoaded", function () {
  var featuresList = document.getElementById("featuresList");
  var companyList = document.getElementById("companyList");

  var featuresDropdown = document.getElementById("featuresDropdown");
  var companyDropdown = document.getElementById("companyDropdown");

  featuresList.addEventListener("click", function () {
    toggleDropdown(featuresDropdown);
  });

  companyList.addEventListener("click", function () {
    toggleDropdown(companyDropdown);
  });
});

function toggleDropdown(dropdown) {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}
