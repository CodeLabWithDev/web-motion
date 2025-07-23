document.addEventListener("DOMContentLoaded", () => {
  const userBlock = document.getElementById("userBlock");
  const userDropdown = document.getElementById("userDropdown");

  userBlock.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent event bubbling to document
    userDropdown.classList.toggle("show");
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", () => {
    userDropdown.classList.remove("show");
  });
});
