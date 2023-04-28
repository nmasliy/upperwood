const mapBlock = document.querySelector('.contacts-map');
let map = null;

if (mapBlock) {
	const addressesItems = document.querySelectorAll('.addresses-box__item');
	
	let center = JSON.parse(addressesItems[0].dataset.coords);
	
	ymaps.ready(function () {
		map = new ymaps.Map('contacts-map', {
			center: center,
			zoom: 17,
			controls: [],
		});
	
		var myIcon = ymaps.templateLayoutFactory.createClass(
			'<div class="contacts-map__marker-icon"> <span>' +
				'{{ properties.iconCaption }}' +
				'</span> </div>'
		);
	
		// Заполняем карту стартовыми локациями
		addressesItems.forEach((el) => {
			var placemark = new ymaps.Placemark(
				JSON.parse(el.dataset.coords),
				{
					iconCaption: el.dataset.title,
				},
				{
					iconLayout: myIcon,
				}
			);
	
			map.geoObjects.add(placemark);
		});
	});
}

export function setCenter(coords) {
  map?.setCenter(coords);
}
