import * as OfflinePluginRuntime from "offline-plugin/runtime";
import "./fonts/libre-baskerville-v5-latin-regular.woff";
import "./fonts/libre-baskerville-v5-latin-regular.woff2";
import "./index.html";
import "./index.scss";
import "./scripts/script";
global.jQuery = require("jquery");
import $ from "jquery";
import "bootstrap";
import "particles.js";
import "./scripts/particlesjs-config.json";
import "./scripts/particlesjs-configmobile.json";
import imagesLoaded from "./scripts/imagesloaded.pkgd.min.js";
import PerfectScrollbar from "perfect-scrollbar";
import "./styles/global/perfectscrollbar.scss";
import header from "./views/header.html";
import navbar from "./views/navbar.html";
import resume from "./views/resume.html";
import contact from "./views/contact.html";
import footer from "./views/footer.html";
import portfolio from "./views/portfoliov2.html";
import globalgamejam from "./views/global_game_jam.html";
import lightpainting from "./views/light_painting.html";
import lagadoll from "./views/laga_doll.html";
import artwork from "./views/artwork.html";
import "./videos/lagadoll.mp4";
import "./videos/cuatro_elementos.mp4";
import "animate.css";

document.head.insertAdjacentHTML("afterbegin", header);
document.getElementById("navigation").insertAdjacentHTML("afterbegin", navbar);
OfflinePluginRuntime.install();
const ps = new PerfectScrollbar("#mainpage", {
  wheelSpeed: 3,
  wheelPropagation: true,
  swipeEasing: true
});
window.mobileCheck = function() {
  let check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
let particlesConfig = "scripts/particlesjs-config.json";
if (mobileCheck() == true) {
  console.log("load particles mobile version");
  particlesConfig = "scripts/particlesjs-configmobile.json";
  // document.onscroll(function(){
  //   console.log('scrolling!');
  //   //document.body.requestFullscreen();
  // });
}
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", particlesConfig, function() {
  // window.pJSDom[0].pJS.particles.color.value = "random";
  // console.log("callback - particles.js config loaded");
  // if(mobileCheck() == true){
  //   //console.log('mobile detected');
  //   window.pJSDom[0].pJS.particles.number.value = 20;
  //   window.pJSDom[0].pJS.fn.particlesRefresh();
  // }
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
  //window.pJSDom[0].pJS.fn.particlesRefresh();
  require("animatedmodal");
  require("ekko-lightbox");
  //$.getScript('./scripts/animatedModal.min.js');
  $("#loading").fadeOut(700);
  $("header").css("visibility", "visible");
  document.getElementById("resume").insertAdjacentHTML("afterbegin", resume);
  document.getElementById("contact").insertAdjacentHTML("afterbegin", contact);
  document.getElementById("footer").insertAdjacentHTML("afterbegin", footer);
  document
    .getElementById("portfolio")
    .insertAdjacentHTML("afterbegin", portfolio);
  $("main").css("visibility", "visible");
  imagesLoaded(
    ".glitch__img",
    {
      background: true
    },
    () => {
      document.body.classList.remove("loading");
      document.body.classList.add("imgloaded");
    }
  );
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
  // adding filtering:
  var $filters = $(".filter [data-filter]"),
    $boxes = $(".boxes [data-category]");

  $filters.on("click", function(e) {
    e.preventDefault();
    var $this = $(this);

    $filters.removeClass("active");
    $this.addClass("active");

    var $filterColor = $this.attr("data-filter");

    if ($filterColor == "all") {
      $boxes
        .removeClass("is-animated")
        .fadeOut()
        .finish()
        .promise()
        .done(function() {
          $boxes.each(function(i) {
            $(this)
              .addClass("is-animated")
              .delay(i++ * 200)
              .fadeIn();
          });
        });
    } else {
      $boxes
        .removeClass("is-animated")
        .fadeOut()
        .finish()
        .promise()
        .done(function() {
          $boxes
            .filter('[data-category = "' + $filterColor + '"]')
            .each(function(i) {
              $(this)
                .addClass("is-animated")
                .delay(i++ * 200)
                .fadeIn();
            });
        });
    }
  });
  $("#modal-00").append(globalgamejam);
  $("#modal-01").append(lightpainting);
  $("#modal-02").append(lagadoll);
  $("#modal-03").append(artwork);
  function perfectScrollGen(num) {
    const ps = new PerfectScrollbar(".details-0" + num, {
      wheelSpeed: 3,
      wheelPropagation: true,
      swipeEasing: true
    });
  }
  //$(".demo-3").on("click", function() {
  //$("#globalgamejam").show();
  console.log("test");
  for (var i = 0; i < 4; i++) {
    perfectScrollGen(i);
    $("#demo0" + i).animatedModal({
      modalTarget: "modal-0" + i,
      color: "#5a5a5a",
      animatedIn: "fadeIn",
      animatedOut: "fadeOut",
      animationDuration: "0s",
      animationFillMode: "both",
      beforeOpen: function() {
        $("#overlay-effect")
          .addClass("animate-up")
          .removeClass("animate-down");
        // const ps = new PerfectScrollbar(".details-0" + i, {
        //   wheelSpeed: 3,
        //   wheelPropagation: true,
        //   swipeEasing: true
        // });
        $("#" + this.modalTarget).css({
          animationDelay: ".5s",
          animationFillMode: "both"
        });
      },
      afterOpen: function() {
        $("#" + this.modalTarget).css({
          animationFillMode: "none"
        });
      },
      beforeClose: function() {
        $("#overlay-effect")
          .addClass("animate-down")
          .removeClass("animate-up");
        $("#" + this.modalTarget).css({
          animationDelay: ".5s",
          animationFillMode: "both"
        });
      },
      afterClose: function() {
        $("#" + this.modalTarget).css({
          animationFillMode: "none",
          opacity: 0
        });
      }
    });
  }
  // form submit:
  var form = document.getElementById("contact-form");
  var button = document.getElementById("contact-submit");
  var status = document.getElementById("form-status");

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thanks!";
    status.style = "display: block";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
    status.style = "display: block";
  }

  function sendbyajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    sendbyajax(form.method, form.action, data, success, error);
  });
  //lightbox:
  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
});
// import 'font-awesome';
// import 'magnific-popup';
