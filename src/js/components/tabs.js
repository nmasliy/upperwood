import { initTabs } from '../functions/tabs';

initTabs('.delivery__tabs li', '.delivery__tab-content');
initTabs('.map__icon', '.map__info');
initTabs('.accordion-select__item', '.map-card');
initTabs('.product-tabs li', '.product-tabs__content-item');

// Product
// Клик по кнопке "Все характеристики"
const productAllCharsBtn = document.querySelector('.product-info__btn-all');

productAllCharsBtn?.addEventListener('click', function() {
	const id = productAllCharsBtn.dataset.tab;
	const tab = document.querySelector(`.product-tabs li[data-tab="${id}"]`);

	tab.click();
})