import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const useAboutTeamSwiper = () => {
  new Swiper('.about-team-section__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 32,
    loop: true,
    pagination: {
      el: '.about-team-section__swiper-pagination',
    },
    scrollbar: {
      el: '.about-team-section__swiper-scrollbar',
    },
    breakpoints: {
      993: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      577: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 1.2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
};
