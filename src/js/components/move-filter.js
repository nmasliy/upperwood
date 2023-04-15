import { throttle } from '../functions/throttle';

const catalogWrapper = document.querySelector('.catalog__wrapper');
const filter = document.querySelector('.filter');
const filterHead = document.querySelector('.catalog__head-filter');


function initMoveFilter() {
	if (!filter) return;

	let isMoved = false;

	function moveFilter() {
		if (window.innerWidth <= 1200) {
			if (!isMoved) {
				filterHead.insertAdjacentElement('beforeend', filter);
				isMoved = true;
			}
		} else {
			if (isMoved) {
				catalogWrapper.insertAdjacentElement('afterbegin', filter);
				isMoved = false;
			}
		}
	}

	const throttledMoveFilter = throttle(moveFilter);

	window.addEventListener('resize', throttledMoveFilter);

	moveFilter();
}

initMoveFilter();