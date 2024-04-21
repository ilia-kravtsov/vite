import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const useActivityHeroSwiper = () => {
  new Swiper('.activity-updates__hero-swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    slidesPerView: 2.5,
    spaceBetween: 32,
    loop: true,
    pagination: {
      el: '.activity-updates__hero-swiper-pagination',
    },
    scrollbar: {
      el: '.activity-updates__hero-swiper-scrollbar',
    },

    breakpoints: {
      1300: {
        slidesPerView: 2.5,
      },
      767: {
        slidesPerView: 2,
      },
      577: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
};
