(function () {
  const MOBILE_MENU_BREAKPOINT = 940;
  if (window.innerWidth <= MOBILE_MENU_BREAKPOINT) return;

  document.body.addEventListener('click', function (e) {
    const activeSubmenus = document.querySelectorAll('.submenu.is-active');
    const submenuTrigger = e.target.closest('.submenu > *:first-child');

    if (submenuTrigger) {
      e.preventDefault();
      const submenu = submenuTrigger.closest('.submenu');
      const sibling =
        submenuTrigger.parentElement.parentElement.querySelector(
          '.submenu.is-active'
        );

      // Клик по каталогу закрывает все остальные меню в навигации и наоборот
      if (submenu.closest('.header__catalog')) {
        const navSubmenu = document.querySelector(
          '.header__nav-submenu.is-active'
        );
        navSubmenu?.classList.remove('is-active');
      } else {
        const catalogMenu = document.querySelector('.header__catalog');
        const catalogSubmenus =
          catalogMenu?.querySelectorAll('.submenu.is-active');
        catalogMenu?.classList.remove('is-active');
        catalogSubmenus?.forEach((el) => {
          el.classList.remove('is-active');
        });
      }

      // Закрываем все соседние открытые меню
      if (sibling != submenu) {
        submenuTrigger.parentElement.parentElement
          .querySelector('.submenu.is-active')
          ?.classList.remove('is-active');
      }

      // Делаем активным только что кликнутое меню
      if (submenu.classList.contains('is-active')) {
        submenu.classList.remove('is-active');
      } else {
        submenu.classList.add('is-active');
      }
    } else {
			// Закрывам все открытые если клинули вне хедера
      activeSubmenus?.forEach((el) => {
        el.classList.remove('is-active');
      });
    }
  });
})();
