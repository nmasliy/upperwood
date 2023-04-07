import SimpleModal from '../functions/SimpleModal';

const options = {
  onOpen: (modal) => {},
  onClose: (modal) => {},
  transition: 250,
};

const modals = new SimpleModal(options);

modals.init();

window.modals = modals;

if (document.querySelector('.cookies')) {
  initCookie();
}

function initCookie() {
  const cookieBtn = document.querySelector(".cookies__btn");
  const cookiePopup = document.querySelector(".cookies");
  
  window.addEventListener("DOMContentLoaded", () => {
    cookiePopup.classList.add("is-active");
  });
  
  cookieBtn.addEventListener("click", (e) => {
    cookiePopup.classList.remove("is-active");
  });
}
