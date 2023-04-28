import { setCenter } from './map';

const select = document.querySelector('.accordion-select');

if (select) {
	const current = select.querySelector('.accordion-select__current');
	
  document.body.addEventListener('click', function (e) {
		const currentTarget = e.target.closest('.accordion-select__current');
    const itemTarget = e.target.closest('.accordion-select__item');
		const btn = e.target.closest('.contacts-map__select-btn');

    if (currentTarget || btn) {
			select.classList.toggle('is-active');
    } 
		else if (itemTarget) {
      current.textContent = itemTarget.dataset.value;
      current.dataset.value = itemTarget.dataset.value;
      current.dataset.coords = itemTarget.dataset.coords;
      setCenter(JSON.parse(current.dataset.coords));
      select.classList.remove('is-active');
    } else {
      select.classList.remove('is-active');
    }
  });
}
