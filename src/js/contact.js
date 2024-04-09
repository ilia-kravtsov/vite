import '../assets/scss/main.scss';
import '../assets/scss/contact.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { usePhone } from './components/contact/phone';
import { useFooterAccordeon } from './components/footer-accordeon';

useTheme();
useBurger();
usePhone();
useFooterAccordeon();
