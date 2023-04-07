(function() {

  const formFiles = document.querySelectorAll('.form__file');

  if (formFiles.length > 0) {
    formFiles.forEach(el => {
      const input = el.querySelector('input');
      const span = el.querySelector('span');
      const text = span.textContent;

      el.addEventListener('change', (e) => {
        const fileName = e.target.files[0].name;

        if (fileName) {
          span.textContent = fileName;
        } else {
          span.textContent = text;
        }
        
      })

    })
  }
  
}())