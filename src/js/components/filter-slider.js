import noUiSlider from 'nouislider';
import wNumb from '../vendor/wNumb.min';

const rangeFilters = document.querySelectorAll('.filter-range');

rangeFilters.forEach((item) => {
  const slider = item.querySelector('.filter-range__slider');
  const inputFrom = document.querySelector('.filter-range__input-from');
  const inputTo = document.querySelector('.filter-range__input-to');

  noUiSlider.create(slider, {
    start: [+slider.dataset.start, +slider.dataset.max],
    connect: true,
    step: +slider.dataset.step,
    range: {
      min: +slider.dataset.min,
      max: +slider.dataset.max,
    },
    format: wNumb({
      decimals: 0,
      thousand: ' ',
      suffix: ' ₽',
    }),
  });

  slider.noUiSlider.on('update', function (values, handle) {
    var value = values[handle];
    if (handle) {
      inputTo.value = value;
    } else {
      inputFrom.value = value;
    }
  });

  inputTo.addEventListener('change', function () {
    console.log(this.value);
    slider.noUiSlider.set([null, this.value.replace('₽', '')]);
  });
  inputFrom.addEventListener('change', function () {
    slider.noUiSlider.set([this.value.replace('₽', ''), null]);
  });
});
