import { initTabs } from '../functions/tabs';
import { setCenter } from './map';

initTabs('.delivery__tabs li', '.delivery__tab-content');
initTabs('.map__icon', '.map__info');
initTabs('.accordion-select__item', '.map-card');
initTabs('.addresses-box__item', '.map-card', updateAddress);
initTabs('.product-tabs li', '.product-tabs__content-item');

// Addresses
const select = document.querySelector('.accordion-select');
const selectCurrent = select?.querySelector('.accordion-select__current');

function updateAddress(target) {
	const box = target.closest('.addresses-box__item');

	selectCurrent.textContent = box.dataset.value;
	selectCurrent.dataset.value = box.dataset.value;
	setCenter(JSON.parse(box.dataset.coords));
}


// Product
// Клик по кнопке "Все характеристики"
const productAllCharsBtn = document.querySelector('.product-info__btn-all');

productAllCharsBtn?.addEventListener('click', function() {
	const id = productAllCharsBtn.dataset.tab;
	const tab = document.querySelector(`.product-tabs li[data-tab="${id}"]`);

	tab.click();
})