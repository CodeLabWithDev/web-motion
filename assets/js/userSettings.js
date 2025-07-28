document.addEventListener("DOMContentLoaded", function () {
  const userBlock = document.getElementById("userBlock");
  const userDropdown = document.getElementById("userDropdown");

  // Register user dropdown globally
  registerPopup(userDropdown);

  userBlock.addEventListener("click", function (event) {
    event.stopPropagation();
    closeAllExcept(userDropdown); // automatically closes other registered popups
    userDropdown.classList.toggle("active");
  });

  // Use utility for outside click
  setupOutsideClickToClose(userDropdown, userBlock);
});
