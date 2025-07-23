document.addEventListener("DOMContentLoaded", () => {
  const emailIcon = document.getElementById("emailIcon");
  const emailPopup = document.getElementById("emailPopup");
  const emailList = document.getElementById("emailList");

  // Sample emails
  const emails = [
    {
      title: "Meeting Reminder",
      desc: "Don’t forget about the 2 PM meeting with the team. Please prepare your talking points ahead of time.",
    },
    {
      title: "Project Update",
      desc: "The latest version of the app has been deployed and is live in production. Let us know if you encounter any issues.",
    },
    {
      title: "Invoice Received",
      desc: "We've received your invoice for last month. Thank you for your prompt submission.",
    },
    {
      title: "Event Invitation",
      desc: "You're invited to our company town hall event next week. Please RSVP by Friday.",
    },
    {
      title: "Support Ticket",
      desc: "Your support ticket has been updated. Our team is looking into the issue and will follow up shortly.",
    },
  ];

  // Render emails
  emailList.innerHTML = emails
    .map(
      (email) => `
    <li>
      <h4 class="email-title">${email.title}</h4>
      <p class="email-desc">${email.desc}</p>
    </li>
  `
    )
    .join("");

  // Toggle popup below email icon
  emailIcon.addEventListener("click", () => {
    if (emailPopup.classList.contains("show")) {
      emailPopup.classList.remove("show");
    } else {
      const rect = emailIcon.getBoundingClientRect();

      const top = rect.bottom + window.pageYOffset + 10;
      const left = rect.left + window.pageXOffset;

      if (window.innerWidth > 575) {
        emailPopup.style.top = `${top}px`;
        emailPopup.style.left = `${left}px`;

        // Optional viewport right edge fix
        const maxRight = window.innerWidth - 10;
        const popupRightEdge = left + emailPopup.offsetWidth;
        if (popupRightEdge > maxRight) {
          emailPopup.style.left = `${maxRight - emailPopup.offsetWidth}px`;
        }
      }

      emailPopup.classList.add("show");
    }
  });

  // Close popup when clicking outside
  document.addEventListener("click", (e) => {
    if (!emailPopup.contains(e.target) && !emailIcon.contains(e.target)) {
      emailPopup.classList.remove("show");
    }
  });
});
