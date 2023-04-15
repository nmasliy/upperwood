export function initShowMore(triggerSelector, parentSelector) {
  const triggerNodes = document.querySelectorAll(triggerSelector);

  if (!triggerNodes.length > 0) return;

  triggerNodes.forEach((el) => {
    el.addEventListener('click', function (e) {
			e.preventDefault();
			
      const parentNode = el.closest(parentSelector);

      toggleText(parentNode);
      parentNode.classList.toggle('is-expanded');
    });

    function toggleText(parentNode) {
      const showText = el.dataset.show;
      const hideText = el.dataset.hide;

      if (!showText) return;

      if (parentNode.classList.contains('is-expanded')) {
        el.textContent = showText;
      } else {
        el.textContent = hideText;
      }
    }
  });
}
