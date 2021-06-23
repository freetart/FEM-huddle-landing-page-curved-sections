import AOS from 'aos';
import preloader from './preloader.js';
import validateEmail from './validateEmail.js';

const init = () => {
  preloader();
  validateEmail();
  AOS.init({ offset: 100, duration: 1000, once: true });
};

window.addEventListener('DOMContentLoaded', init);
