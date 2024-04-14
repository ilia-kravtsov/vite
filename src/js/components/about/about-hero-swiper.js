import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const useAboutHeroSwiper = () => {
  new Swiper('.about-hero__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    slidesPerView: 2.5,
    spaceBetween: 22,
    loop: true,
    pagination: {
      el: '.about-hero__swiper-pagination',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      993: {
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
