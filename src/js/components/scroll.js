import SmoothScroll from 'smooth-scroll';

// Плавный скролл
const scroll = new SmoothScroll('a[href*="#"]', {
  speedAsDuration: true,
  duration: 500,
});
