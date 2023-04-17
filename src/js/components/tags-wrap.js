import { throttle } from '../functions/throttle';

const tagsParent = document.querySelector('.tags');

function initTagsWrap() {
  if (!tagsParent) return;

  function toggleRow() {
    const row1 = tagsParent.querySelector('.tags__row--1');
    const row2 = tagsParent.querySelector('.tags__row--2');
    const row1Items = row1.querySelectorAll('li');
    const row2Items = row2.querySelectorAll('li');

		if (row1Items.length < 10) return;

    if (window.innerWidth <= 940) {
			if (row2Items.length <= 0) {
				insertRow();
			}
    } else {
      removeRow();
    }

    function insertRow() {
			const half = row1Items.length / 2;

			for(let i = half; i < row1Items.length; i++) {
				row2.insertAdjacentElement('afterbegin', row1Items[i]);
			}
		}

    function removeRow() {
			for(let i = 0; i < row2Items.length; i++) {
				row1.insertAdjacentElement('beforeend', row2Items[i]);
			}
		}
  }

	toggleRow();
	
  const throttledTagsWrap = throttle(toggleRow);

  window.addEventListener('resize', throttledTagsWrap);
}

initTagsWrap();