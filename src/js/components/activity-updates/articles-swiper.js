import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const useArticlesSwiper = () => {
  new Swiper('.articles__swiper', {
    modules: [Navigation],
    direction: 'horizontal',
    slidesPerView: 2.9,
    spaceBetween: 32,
    loop: true,
    pagination: {
      el: '.articles__swiper-pagination',
    },
    scrollbar: {
      el: '.articles__swiper-scrollbar',
    },
    navigation: {
      prevEl: '.articles__swiper-button--prev',
      nextEl: '.articles__swiper-button--next',
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
