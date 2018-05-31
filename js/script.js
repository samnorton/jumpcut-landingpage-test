/* ==========================================================================
Pop-up Script
========================================================================== */

const popUp = document.querySelector(".popup");
const click = document.querySelector(".btn-click");
const close = document.querySelector(".closebtn");

const closePopUp = () => popUp.classList.add("closepopup");
const togglePopUp = () => {
  popUp.classList.add("openpopup");
  popUp.classList.remove("closepopup");
};

const windowClickEvent = e => {
  if (e.target === popUp) {
    closePopUp();
  }
};

click.addEventListener("click", togglePopUp);
close.addEventListener("click", closePopUp);
window.addEventListener("click", windowClickEvent);
