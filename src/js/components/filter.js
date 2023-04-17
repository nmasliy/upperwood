const html = document.querySelector('html');
const filter = document.querySelector('.filter');
const filterClose = document.querySelector('.filter__close');
const filterArrow = document.querySelector('.filter__arrow');
const overlay = document.querySelector('.overlay');
const filterBtn = document.querySelector('.catalog__filter-btn');
const TRANSITION_DELAY = 300;

if (filter) {
	filterBtn.addEventListener('click', toggleFilter)
	filterClose.addEventListener('click', closeFilter)
	filterArrow.addEventListener('click', closeFilter)


	overlay.addEventListener('click', closeFilter);

	function openFilter() {
		if (window.innerWidth <= 940) {
			overlay.style.display = 'block';
			html.classList.add('disable-scroll');
		}
    filter.style.display = 'block';


    setTimeout(function () {
		if (window.innerWidth <= 940) {
      overlay.classList.add('is-active');
		}
      filter.classList.add('is-active');
    }, 1);
  }

  function closeFilter() {
		if (window.innerWidth <= 940) {
			overlay.classList.remove('is-active');
			html.classList.remove('disable-scroll');
		}
    filter.classList.remove('is-active');


    setTimeout(function () {
		if (window.innerWidth <= 940) {
      overlay.style.display = '';
		}
      filter.style.display = '';
    }, TRANSITION_DELAY);
  }

  function toggleFilter() {
    filter.classList.contains('is-active') ? closeFilter() : openFilter();
  }
}