// import '../assets/scss/main.scss';
// import '../assets/scss/contact.scss';
import '/scss/main.scss';
import '/scss/contact.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { usePhone } from './components/contact/phone';
import { useForm } from './components/contact/form';
import { useFooterAccordeon } from './components/footer-accordeon';

useTheme();
useBurger();
usePhone();
useForm();
useFooterAccordeon();
