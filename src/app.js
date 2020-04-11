import 'bootstrap';
import './scss/app.scss';
import 'particles.js';
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/vendor/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });