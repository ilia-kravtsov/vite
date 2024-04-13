import '/scss/main.scss';
import '/scss/about.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useCircularText } from './components/about/circular-text';
import { useFooterAccordeon } from './components/footer-accordeon';

useTheme();
useBurger();
useCircularText();
useFooterAccordeon();
