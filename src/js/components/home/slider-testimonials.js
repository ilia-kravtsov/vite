import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true,
    // },
    navigation: {
      prevEl: '.testimonials__button--prev',
      nextEl: '.testimonials__button--next',
    },
  });
};
