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

// ____________________ previous js versions

// import Swiper from 'swiper/bundle';

// // Function to transform the ul into a Swiper slider based on screen width
// export const transformToSwiper = () => {
//   if (window.innerWidth < 577) {
//     const container = document.createElement('div');
//     container.classList.add('swiper-container');

//     const wrapper = document.createElement('div');
//     wrapper.classList.add('swiper-wrapper');
//     container.appendChild(wrapper);

//     const listItems = document.querySelectorAll(
//       '.partners__list .partners__item',
//     );
//     listItems.forEach((item) => {
//       const slide = document.createElement('div');
//       slide.classList.add('swiper-slide');
//       slide.appendChild(item.querySelector('img').cloneNode(true));
//       wrapper.appendChild(slide);
//     });

//     const originalUl = document.querySelector('.partners__list');
//     originalUl.parentNode.replaceChild(container, originalUl);

//     new Swiper('.swiper-container', {
//       touchEventsTarget: 'container',
//       direction: 'horizontal',
//       loop: true,
//       slidesPerView: 'auto',
//       spaceBetween: 10,
//       autoplay: {
//         delay: 1000,
//         disableOnInteraction: false,
//       },
//     });
//   }
// };

// // Call the function when the window loads and on window resize
// window.addEventListener('load', transformToSwiper);
// window.addEventListener('resize', transformToSwiper);

// export const transformToSwiper = () => {
//   let swiper = null; // variable to store the Swiper instance

//   // initialize Swiper
//   const initSwiper = () => {
//     const container = document.createElement('div');
//     container.classList.add('swiper-container');

//     const wrapper = document.createElement('div');
//     wrapper.classList.add('swiper-wrapper');
//     container.appendChild(wrapper);

//     const listItems = document.querySelectorAll(
//       '.partners__list .partners__item',
//     );
//     listItems.forEach((item) => {
//       const slide = document.createElement('div');
//       slide.classList.add('swiper-slide');
//       slide.appendChild(item.querySelector('img').cloneNode(true));
//       wrapper.appendChild(slide);
//     });

//     const originalUl = document.querySelector('.partners__list');
//     originalUl.parentNode.replaceChild(container, originalUl);

//     swiper = new Swiper('.swiper-container', {
//       direction: 'horizontal',
//       loop: true,
//       slidesPerView: 'auto',
//       spaceBetween: 10,
//       autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },
//     });
//   };

//   // destroying Swiper
//   const destroySwiper = () => {
//     if (swiper !== null) {
//       swiper.destroy(true, true);
//       const container = document.querySelector('.swiper-container');
//       const originalUl = document.createElement('ul');
//       originalUl.classList.add('partners__list');
//       const slides = container.querySelectorAll('.swiper-slide');
//       slides.forEach((slide) => {
//         originalUl.appendChild(slide.querySelector('img').cloneNode(true));
//       });
//       container.parentNode.replaceChild(originalUl, container);
//       swiper = null;
//     }
//   };

//   window.addEventListener('load', () => {
//     if (window.innerWidth < 577) {
//       initSwiper();
//     } else {
//       destroySwiper();
//     }
//   });

//   window.addEventListener('resize', () => {
//     if (window.innerWidth < 577) {
//       initSwiper();
//     } else {
//       destroySwiper();
//     }
//   });
// };
