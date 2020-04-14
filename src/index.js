import * as OfflinePluginRuntime from "offline-plugin/runtime";
import "./fonts/libre-baskerville-v5-latin-regular.woff";
import "./fonts/libre-baskerville-v5-latin-regular.woff2";
import "./index.html";
import "./index.scss";
import "./scripts/script";
import $ from "jquery";
import "bootstrap";
import "particles.js";
import "./scripts/particlesjs-config.json";
import imagesLoaded from "./scripts/imagesloaded.pkgd.min.js";
OfflinePluginRuntime.install();

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "scripts/particlesjs-config.json", function() {
  console.log("callback - particles.js config loaded");
});
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};
$(window).on("load", function() {
  $("#loading").fadeOut(700);
  $("header").css("visibility", "visible");
  $("main").css("visibility", "visible");
  imagesLoaded(".glitch__img", { background: true }, () => {
    document.body.classList.remove("loading");
    document.body.classList.add("imgloaded");
  });
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
});
// import 'font-awesome';
// import 'magnific-popup';
