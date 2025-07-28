document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const ribbonMenu = document.getElementById("ribbonMenu");

  let isOpen = false;

  menuToggle.addEventListener("click", () => {
    if (!isOpen) {
      // OPEN
      ribbonMenu.style.height = ribbonMenu.scrollHeight + "px";
      isOpen = true;
    } else {
      // CLOSE: set to fixed height first, then to 0 so transition works
      ribbonMenu.style.height = ribbonMenu.scrollHeight + "px";
      // Force reflow so browser notices height change
      ribbonMenu.offsetHeight;
      ribbonMenu.style.height = "0";
      isOpen = false;
    }
  });

  ribbonMenu.addEventListener("transitionend", () => {
    if (isOpen) {
      // remove fixed height after expand, so content stays fluid
      ribbonMenu.style.height = "auto";
    }
  });
});
