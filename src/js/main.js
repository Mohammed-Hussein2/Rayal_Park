import "../css/main.css";

// alpine  js for scripting
import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();

// AOS Library for Animation on scroll
import AOS from "aos";
import "aos/dist/aos.css";
window.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-out-cubic'
  });
});
