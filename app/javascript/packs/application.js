// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"


Rails.start()
Turbolinks.start()
ActiveStorage.start()

import Swiper, { Navigation } from 'swiper'
Swiper.use([Navigation])
import 'swiper/swiper-bundle.min.css'
import $ from 'jquery'
import { select2 } from 'select2'
import luge from '@waaark/luge'
import "controllers"
import "bootstrap"
import "../plugins/flatpickr.js"

// const loader = document.getElementById('loader');
// loader.style.display = 'flex';
// const loading = bodymovin.loadAnimation({
//   container: loader, // the dom element that will contain the animation
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'https://assets9.lottiefiles.com/private_files/lf30_rBOODA.json' // the path to the animation json
// });
// setTimeout(() => {
//   loader.style.display = 'none';
//   console.log(loader);
// }, 2000);

const anchors = document.querySelectorAll('a')
const transition = document.querySelector('.transition');

const transAnim = bodymovin.loadAnimation({
  wrapper: transition,
  animType: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://assets9.lottiefiles.com/private_files/lf30_rBOODA.json',

});


window.onload = () => {

transition.classList.add('is-active');


  transAnim.goToAndPlay(0, true)
  setTimeout(() => {

    transition.classList.remove('is-active')
  }, 2000)

}



document.addEventListener("turbolinks:load", () => {

  const btnSearch = document.querySelector(".searchbtn");
  const input = document.querySelector(".zone-text");

  btnSearch.addEventListener("click", function (e) {
    e.preventDefault();
    if (!input.classList.contains("active")) {
      TweenMax.fromTo(input, 0.5, { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1 });
      input.classList.add("active");
    } else {
      TweenMax.fromTo(input, 0.5, { opacity: 1, scaleX: 0 }, { opacity: 0, scaleX: 0 });
      input.classList.remove("active");
    }
  });

  $('.js-example-basic-single').select2();

  // animation sho pokemon
  const pokemon = document.querySelector(".pokemon-show-img");
  const pokeball = document.querySelector(".pokeball");
  const TLshow = gsap.timeline()
  const TLhome = gsap.timeline()
  gsap.set(pokemon, { scale: 0, transformOrigin: "center" })

  TLshow.to(pokeball, 1.5, { y: 600, ease: "bounce" })
    .to(pokeball, { rotate: 50, rotate: -50, delay: 0.5, repeat: 2 })
    .to(pokeball, { opacity: 0 })
    .to(pokemon, { scale: 1, transformOrigin: "center", ease: "elastic.out(2, 0.8)" })

  // animation home banner
  TLhome.from(".banner-title", 1, { y: 50, opacity: 0, ease: "Back.easeOut" })
    .from(".search", { x: 35, opacity: 0, ease: "Back.easeOut" })

  // Animation Hover cards
  const TLhover = new TimelineMax();
  const cards = document.querySelectorAll(".pokemon-card");
  TLhover.staggerFrom(cards, 1, { transformOrigin: "50% 50%", opacity: 0, scale: 0.80, ease: Power2.easeOut }, 0.20);

  var hover = false;

  cards.forEach(function (element, i) {

    element.addEventListener("mouseover", function (event) {
      if (!hover) {
        TweenMax.to(element, 1, { transformOrigin: "50% 50%", scale: 1.1 });
      }
      hover = true;
    }, false);

    element.addEventListener("mouseleave", function (event) {
      hover = false;
      TweenMax.to(element, 1, { transformOrigin: "50% 50%", scale: 1 });
    }, false);

  });

  // slider dahsboard
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 5,
    slidesPerGroup: 2,
    // spaceBetween: 30,
    grabCursor: true,
    loop: false,
    // breakpoints: {
    //   // when window width is >= 600px
    //   600: {
    //     slidesPerView: 2,
    //     slidesPerGroup: 2,
    //     spaceBetween: 60,
    //     grabCursor: true,
    //     loop: true,
    //     centeredSlides: true

    //   },
    //   // when window width is >= 900px
    //   900: {
    //     slidesPerView: 3,
    //     slidesPerGroup: 3,
    //     grabCursor: true,
    //     loop: true,
    //     speed: 1500,
    //     spaceBetween: 5,
    //     centeredSlides: false

    //   },
    //   // when window width is >= 1200px
    //   1200: {
    //     slidesPerView: 8,
    //     slidesPerGroup: 4,
    //     grabCursor: true,
    //     loop: true,
    //     spaceBetween: 5,
    //     centeredSlides: false
    //   },

    //   // when window width is >= 1500px

    // }
  });





});
