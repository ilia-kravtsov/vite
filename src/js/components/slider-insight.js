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
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
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
