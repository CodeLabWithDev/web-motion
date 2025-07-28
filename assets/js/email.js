document.addEventListener("DOMContentLoaded", function () {
  const emailBtn = document.getElementById("emailIcon");
  const emailPopup = document.getElementById("emailPopup");
  const emailList = document.getElementById("emailList");

  registerPopup(emailPopup);

  const emails = [
    {
      subject: "Welcome to our service!",
      description: "Thanks for joining us!",
      time: "2h ago",
    },
    {
      subject: "Your subscription renewed",
      description: "No action needed.",
      time: "5h ago",
    },
    {
      subject: "Your subscription renewed",
      description: "No action needed.",
      time: "5h ago",
    },
    {
      subject: "Your subscription renewed",
      description: "No action needed.",
      time: "5h ago",
    },
    {
      subject: "Your subscription renewed",
      description: "No action needed.",
      time: "5h ago",
    },
  ];

  function renderEmails() {
    emailList.innerHTML = "";
    emails.forEach((email) => {
      const li = document.createElement("li");
      li.className = "email-item";
      li.innerHTML = `
        <div class="email-text">
          <p class="email-subject">${email.subject}</p>
          <p class="email-description">${email.description}</p>
        </div>
        <span class="email-time">${email.time}</span>
      `;
      emailList.appendChild(li);
    });
  }

  emailBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeAllExcept(emailPopup);
    emailPopup.classList.toggle("active");
    if (emailPopup.classList.contains("active")) {
      renderEmails();
      positionPopup(emailPopup, emailBtn, window.screen.width - 20);
    }
  });

  setupOutsideClickToClose(emailPopup, emailBtn);
  setupPopupResizeHandler(emailPopup, emailBtn);
});
