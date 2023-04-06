import SimpleModal from '../functions/SimpleModal';

const options = {
  onOpen: (modal) => {},
  onClose: (modal) => {},
  disableScroll: true,
  transition: 250,
  nested: false,
  overlayCloseAll: true,
};

const modals = new SimpleModal(options);

modals.init();

window.modals = modals;

const forms = document.querySelectorAll('.modal form');

forms.forEach(form => {
  form.addEventListener('submit', (e) => {

  })
})