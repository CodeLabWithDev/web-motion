// Store all popups globally
const allRegisteredPopups = [];

/**
 * Register popup to global list
 * @param {HTMLElement} popupEl
 */
function registerPopup(popupEl) {
  if (!allRegisteredPopups.includes(popupEl)) {
    allRegisteredPopups.push(popupEl);
  }
}

/**
 * Close all popups except given one
 * @param {HTMLElement} exceptPopup
 */
function closeAllExcept(exceptPopup) {
  allRegisteredPopups.forEach((popup) => {
    if (popup !== exceptPopup) {
      popup.classList.remove("active");
    }
  });
}

/**
 * Close popup when clicked outside
 * @param {HTMLElement} popupEl
 * @param {HTMLElement} toggleBtnEl
 */
function setupOutsideClickToClose(popupEl, toggleBtnEl) {
  document.addEventListener("click", (e) => {
    if (!popupEl.contains(e.target) && !toggleBtnEl.contains(e.target)) {
      popupEl.classList.remove("active");
    }
  });
}

/**
 * Update popup position on window resize
 * @param {HTMLElement} popupEl
 * @param {HTMLElement} btnEl
 * @param {number} popupWidth
 * @param {number} offsetY
 */
function setupPopupResizeHandler(
  popupEl,
  btnEl,
  popupWidth = 300,
  offsetY = 8
) {
  window.addEventListener("resize", () => {
    if (popupEl.classList.contains("active")) {
      positionPopup(popupEl, btnEl, popupWidth, offsetY);
    }
  });
}

/**
 * Dynamically positions a popup below the button
 */
function positionPopup(popupEl, buttonEl, popupWidth = 300, offsetY = 8) {
  const btnRect = buttonEl.getBoundingClientRect();
  const viewportWidth = document.documentElement.clientWidth;

  let left = btnRect.left + btnRect.width / 2 - popupWidth / 2;
  const maxLeft = viewportWidth - popupWidth - 8; // 8px margin
  left = Math.max(8, Math.min(left, maxLeft));

  popupEl.style.position = "fixed";
  popupEl.style.top = `${btnRect.bottom + offsetY}px`;
  popupEl.style.left = `${left}px`;
  popupEl.style.width = `${popupWidth}px`;
  popupEl.style.right = "auto";

  // Adjust arrow inside popup
  const arrow = popupEl.querySelector(".popup-arrow");
  if (arrow) {
    const arrowLeft = btnRect.left + btnRect.width / 2 - left;
    arrow.style.left = `${arrowLeft}px`;
  }
}
