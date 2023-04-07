import SmoothScroll from 'smooth-scroll';
import PerfectScrollbar from 'perfect-scrollbar';

// Плавный скролл
const scroll = new SmoothScroll('a[href*="#"]', {
  speedAsDuration: true,
  duration: 500,
});

// Кастомный скроллбар
const scrollBarContainers = document.querySelectorAll('.perfect-scrollbar');

scrollBarContainers?.forEach(el => {
  const ps = new PerfectScrollbar(el);
})
