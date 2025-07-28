document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".custom-dropdown");

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".custom-dropdown-toggle");

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      // Close others
      dropdowns.forEach((d) => {
        if (d !== dropdown) d.classList.remove("active");
      });
      dropdown.classList.toggle("active");
    });
  });

  // Close on outside click
  document.addEventListener("click", () => {
    dropdowns.forEach((d) => d.classList.remove("active"));
  });
});
