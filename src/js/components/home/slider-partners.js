import Swiper from 'swiper/bundle';

export const usePartnersSlider = () => {
  document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth < 577) {
      new Swiper('.partners__slider', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        autoplay: {
          delay: 1000,
        },
      });
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth < 577) {
      new Swiper('.partners__slider', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        autoplay: {
          delay: 1000,
        },
      });
    }
  });
};
