import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.insight__pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.insight__scrollbar',
      hide: false,
      dragSize: 180,
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
