document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".actionToggle");

  toggles.forEach((toggle) => {
    const actionMenu = toggle.nextElementSibling; // assuming the menu is next

    // Register
    registerPopup(actionMenu);

    // Toggle
    toggle.addEventListener("click", () => {
      const isActive = actionMenu.classList.contains("active");
      closeAllExcept(actionMenu);

      if (!isActive) {
        actionMenu.classList.add("active");
        positionPopup(actionMenu, toggle, 200, 6);
      } else {
        actionMenu.classList.remove("active");
      }
    });

    // Outside click
    setupOutsideClickToClose(actionMenu, toggle);

    // Resize adjust
    setupPopupResizeHandler(actionMenu, toggle, 200, 6);
  });
});
