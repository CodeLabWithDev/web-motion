document.addEventListener("DOMContentLoaded", function () {
  const notificationBtn = document.getElementById("notificationIcon");
  const notificationPopup = document.getElementById("notificationPopup");
  const notificationList = document.getElementById("notificationList");

  registerPopup(notificationPopup);

  const notifications = [
    {
      title: "New comment on your post",
      description: "Someone commented: 'Great post, thanks!'",
      time: "10m ago",
    },
    {
      title: "Weekly report is ready",
      description: "Your report for this week is now available.",
      time: "1h ago",
    },
    {
      title: "Weekly report is ready",
      description: "Your report for this week is now available.",
      time: "1h ago",
    },
    {
      title: "Weekly report is ready",
      description: "Your report for this week is now available.",
      time: "1h ago",
    },
    {
      title: "Weekly report is ready",
      description: "Your report for this week is now available.",
      time: "1h ago",
    },
  ];

  function renderNotifications() {
    notificationList.innerHTML = "";
    notifications.forEach((note) => {
      const li = document.createElement("li");
      li.className = "notification-item";
      li.innerHTML = `
        <div class="notification-text">
          <p class="notification-title">${note.title}</p>
          <p class="notification-description">${note.description}</p>
        </div>
        <span class="notification-time">${note.time}</span>
      `;
      notificationList.appendChild(li);
    });
  }

  notificationBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeAllExcept(notificationPopup);
    notificationPopup.classList.toggle("active");
    if (notificationPopup.classList.contains("active")) {
      renderNotifications();
      positionPopup(notificationPopup, notificationBtn);
    }
  });

  setupOutsideClickToClose(notificationPopup, notificationBtn);
  setupPopupResizeHandler(notificationPopup, notificationBtn);
});
