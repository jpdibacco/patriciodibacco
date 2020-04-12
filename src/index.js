import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import './fonts/libre-baskerville-v5-latin-regular.woff';
import './fonts/libre-baskerville-v5-latin-regular.woff2';
import './index.html';
import './index.scss';
import './scripts/script';
import $ from 'jquery';
import 'bootstrap';
import 'particles.js';
import './scripts/particlesjs-config.json';
import imagesLoaded from './scripts/imagesloaded.pkgd.min.js';
OfflinePluginRuntime.install();

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load(
    "particles-js",
    "scripts/particlesjs-config.json",
    function () {
      console.log("callback - particles.js config loaded");
    }
  );
$(window).on('load', function () {
    $("#loading").fadeOut(700);
    $('header').css('visibility','visible');
    $('main').css('visibility','visible');
    imagesLoaded('.glitch__img', { background: true }, () => {
      document.body.classList.remove('loading');
      document.body.classList.add('imgloaded');
    });
  });
// import 'font-awesome';
// import 'magnific-popup';
