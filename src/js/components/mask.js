import IMask from 'imask';

const phoneInputs = document.querySelectorAll('.input-phone');

phoneInputs?.forEach(el => {
  const phoneMask = IMask(el, {
      mask: '+{7}(000)000-00-00'
    });
})

