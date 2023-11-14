document.addEventListener("DOMContentLoaded", function () {
  const socialProfile = document.querySelector(".social-profile");
  const socialLinks = document.querySelector(".social-links");

  function handleSocialLinks() {
    socialProfile.classList.toggle("active");
    socialLinks.classList.toggle("active");
  }

  socialProfile.addEventListener("click", handleSocialLinks);
});
