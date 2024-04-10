// import '../assets/scss/main.scss';
// import '../assets/scss/pricing.scss';
import '/scss/main.scss';
import '/scss/pricing.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useFooterAccordeon } from './components/footer-accordeon';
import { usePriceSwitcher } from './components/pricing/priceSwitcher';

useTheme();
useBurger();
useFooterAccordeon();
usePriceSwitcher();
