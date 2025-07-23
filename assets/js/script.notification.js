document.addEventListener("DOMContentLoaded", () => {
  const notificationIcon = document.getElementById("notificationIcon");
  const notificationPopup = document.getElementById("notificationPopup");
  const notificationList = document.getElementById("notificationList");

  const notifications = [
    {
      title: "New Comment",
      desc: "Someone commented on your post. Check it out and reply if needed.",
    },
    {
      title: "Server Maintenance",
      desc: "Our servers will undergo maintenance on Saturday from 2 AM to 5 AM.",
    },
    {
      title: "Password Changed",
      desc: "Your account password was changed recently. If this wasn't you, secure your account.",
    },
    {
      title: "New Feature Released",
      desc: "We’ve launched a new dashboard. Explore your updated experience now.",
    },
  ];

  notificationList.innerHTML = notifications
    .map(
      (item) => `
    <li>
      <h4 class="notification-title">${item.title}</h4>
      <p class="notification-desc">${item.desc}</p>
    </li>
  `
    )
    .join("");

  notificationIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    notificationPopup.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!notificationPopup.contains(e.target)) {
      notificationPopup.classList.remove("show");
    }
  });
});
