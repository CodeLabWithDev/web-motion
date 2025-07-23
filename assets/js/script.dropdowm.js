document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown.active");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      e.stopPropagation();

      // Close all other dropdowns
      document.querySelectorAll(".dropdown").forEach((d) => {
        if (d !== this) {
          d.classList.remove("show");
          d.querySelector(".arrow").style.transform = "rotate(0deg)";
        }
      });

      // Toggle this one
      const menu = this.querySelector(".dropdown-menu");
      const arrow = this.querySelector(".arrow");

      // Toggle the menu visibility
      menu.classList.toggle("show");

      // Rotate the arrow when the dropdown is open
      if (menu.classList.contains("show")) {
        arrow.style.transform = "rotate(180deg)"; // Rotate 180 degrees
      } else {
        arrow.style.transform = "rotate(0deg)"; // Reset to 0 degrees
      }
    });
  });

  // Close all dropdowns if clicked outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown").forEach((d) => {
      d.classList.remove("show");
      d.querySelector(".arrow").style.transform = "rotate(0deg)";
    });
  });
});
