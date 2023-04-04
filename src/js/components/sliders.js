import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

function initMobileSlider(parent, wrapper, items, breakpoint = 1024, options) {
  if (!options) {
    options = {
      slidesPerView: 'auto',
      spaceBetween: 10,
    }
  }

  if (window.innerWidth <= breakpoint) {
    const $parent = document.querySelector(parent);
    const $wrapper = $parent.querySelector(wrapper);
    const $items = $wrapper.querySelectorAll(items);

    $parent.classList.add('swiper');
    $wrapper.classList.add('swiper-wrapper');
    $wrapper.classList.remove(wrapper.replace('.', ''));
    $items.forEach((slide) => slide.classList.add('swiper-slide'));

    const swiper = new Swiper(parent, options);
  }
}

// initMobileSlider('.hero__benefits-wrapper', '.hero-benefits', '.hero-benefits__item', 570);

// Hero
const heroSwiper = new Swiper('.hero__slider', {
  spaceBetween: 40,
  navigation: {
    prevEl: '.hero__slider-prev',
    nextEl: '.hero__slider-next'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  loop: true
})

// Popular
const popularSwiper = new Swiper('.popular__slider', {
  spaceBetween: 30,
  slidesPerView: 'auto',
  simulateTouch: false,
  navigation: {
    prevEl: '.popular__nav .slider-nav__prev',
    nextEl: '.popular__nav .slider-nav__next'
  },
})

// Product
const productSliders = document.querySelectorAll('.product__images');

productSliders.forEach(el => {
  const productSwiper = new Swiper(el, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  })

  if (window.innerWidth > 1024) {
    const ghosts = el.querySelectorAll('.product__images-ghost li');

    ghosts.forEach((el, i) => el.addEventListener('mouseover', () => productSwiper.slideTo(i)));
  }
})


// Benefits
const benefitsSwiper = new Swiper('.benefits__slider', {
  spaceBetween: 20,
  slidesPerView: 'auto',
  navigation: {
    prevEl: '.benefits__nav .slider-nav__prev',
    nextEl: '.benefits__nav .slider-nav__next'
  },
})


// Reviews
const reviewsSwiper = new Swiper('.reviews__slider', {
  spaceBetween: 28,
  slidesPerView: 3,
  navigation: {
    prevEl: '.reviews__nav .slider-nav__prev',
    nextEl: '.reviews__nav .slider-nav__next'
  },
})
