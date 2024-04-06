// Get all footer items
export const useFooterAccordeon = () => {
  const footerItemTitles = document.querySelectorAll('.footer__item-title');

  footerItemTitles.forEach((title) => {
    title.addEventListener('click', () => {
      const currentSublist = title.nextElementSibling;

      if (currentSublist.classList.contains('--active-sublist')) {
        currentSublist.classList.remove('--active-sublist');
      } else {
        const allSublists = document.querySelectorAll(
          '.footer__sublist.--active-sublist',
        );
        allSublists.forEach((sublist) => {
          sublist.classList.remove('--active-sublist');
        });

        currentSublist.classList.add('--active-sublist');
      }
    });
  });
};
