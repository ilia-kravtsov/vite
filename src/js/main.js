// import '../assets/scss/main.scss';
import '/scss/main.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useInsightSlider } from './components/home/slider-insight';
import { usePartnersSlider } from './components/home/slider-partners';
import { useTestimonialsSlider } from './components/home/slider-testimonials';
import { useFooterAccordeon } from './components/footer-accordeon';

useTheme();
useBurger();
useInsightSlider();
usePartnersSlider();
useTestimonialsSlider();
useFooterAccordeon();
