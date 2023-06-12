var log = document.querySelector(".login-link");
var reg = document.querySelector(".registr");
var popupLog = document.querySelector(".modal-login");
var popupReg = document.querySelector(".modal-registr");
var overlay = document.querySelector(".modal-overlay");
var closeLog = document.querySelector(".modal-close");
var closeReg = document.querySelector(".modal-close-reg");
var form = popupLog.querySelector("form");
var email = popupLog.querySelector("[name=email]");
var password = popupLog.querySelector("[name=password]");

//Login popup

log.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("modal-overlay--visible");
  popupLog.classList.add("modal--visible");
});

// form.addEventListener("submit", function (evt) {
//   if (!email.value || !password.value) {
//     evt.preventDefault();
//     console.log("1111");
//     popupLog.classList.toggle("modal-error");
//   }
// });

closeLog.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("modal-overlay--visible");
  popupLog.classList.remove("modal--visible");
  popupLog.classList.remove("modal-error");
});

overlay.addEventListener("click", function (evt) {
  overlay.classList.remove("modal-overlay--visible");
  popupLog.classList.remove("modal--visible");
  popupLog.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode == 27) {
    if (popupLog.classList.contains("modal--visible")) {
      evt.preventDefault();
      overlay.classList.remove("modal-overlay--visible");
      popupLog.classList.remove("modal--visible");
      popupLog.classList.remove("modal-error");
    }
  }
});

//Registration popup

reg.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupLog.classList.remove("modal--visible");
  popupReg.classList.add("modal--visible");
});

closeReg.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("modal-overlay--visible");
  popupReg.classList.remove("modal--visible");
});

overlay.addEventListener("click", function (evt) {
  overlay.classList.remove("modal-overlay--visible");
  popupReg.classList.remove("modal--visible");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode == 27) {
    if (popupReg.classList.contains("modal--visible")) {
      evt.preventDefault();
      overlay.classList.remove("modal-overlay--visible");
      popupReg.classList.remove("modal--visible");
    }
  }
});
