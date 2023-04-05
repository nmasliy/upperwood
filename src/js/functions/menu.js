(function () {
  const $html = document.querySelector('html');
  const $menu = document.querySelector('.menu');
  const $burger = document.querySelector('.header__burger');
  const $close = document?.querySelector('.menu__close');
  const $overlay = document?.querySelector('.overlay');
  const $menuItems = document?.querySelectorAll('.menu__nav li a');
  const $submenuItems = document?.querySelectorAll('.menu .submenu > a');
  const TRANSITION_DELAY = 400;
  const MOBILE_MENU_BREAKPOINT = 940;

  let isInit = false;

  const checkScreenWidth = () => {
    // Активируем меню только на экранах <= 940
    if ($menu && window.innerWidth <= MOBILE_MENU_BREAKPOINT && !isInit) {
      isInit = true;
      $burger.addEventListener('click', toggleMenu);
      $close?.addEventListener('click', closeMenu);
      $overlay?.addEventListener('click', closeMenu);
      $submenuItems.forEach(el =>  el.addEventListener('click', function(e) {
        e.preventDefault();
        el.closest('.submenu').classList.toggle('is-active');
      }));
    } else {
      window.addEventListener('resize', checkScreenWidth);
    }
  };
  checkScreenWidth();

  function openMenu() {
    $overlay.style.display = 'block';
    $menu.style.display = 'block';

    $html.classList.add('disable-scroll');

    setTimeout(function () {
      $overlay.classList.add('is-active');
      $menu.classList.add('is-active');
    }, 1);
  }

  function closeMenu() {
    $overlay.classList.remove('is-active');
    $menu.classList.remove('is-active');

    $html.classList.remove('disable-scroll');

    setTimeout(function () {
      $overlay.style.display = '';
      $menu.style.display = '';
    }, TRANSITION_DELAY);
  }

  function toggleMenu() {
    $menu.classList.contains('is-active') ? closeMenu() : openMenu();
  }

})();
