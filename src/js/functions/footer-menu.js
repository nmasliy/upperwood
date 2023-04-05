const $submenuTriggers = document.querySelectorAll('.footer__col-caption');

$submenuTriggers.forEach(el =>  el.addEventListener('click', function(e) {
	e.preventDefault();
	el.closest('.footer__col').classList.toggle('is-active');
}));