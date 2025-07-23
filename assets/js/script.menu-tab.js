document.addEventListener("DOMContentLoaded", () => {
  // Refresh button
  document.getElementById("refreshIcon").addEventListener("click", () => {
    location.reload();
  });

  // Tab click handling
  const tabs = document.querySelectorAll(".menu-tab");
  const contentSections = document.querySelectorAll(".main-wrapper");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Hide all content
      contentSections.forEach((section) => (section.style.display = "none"));

      // Remove active from all tabs
      tabs.forEach((t) => t.classList.remove("active"));

      // Activate clicked tab
      const target = tab.dataset.tab;
      document.getElementById(target).style.display = "block";
      tab.classList.add("active");
    });
  });
});
