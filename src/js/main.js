import AOS from 'aos';
import preloader from './preloader.js';

const init = () => {
  preloader();
  AOS.init({ offset: 100, duration: 1000, once: true });
};

window.addEventListener('DOMContentLoaded', init);
