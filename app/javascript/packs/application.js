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
import $ from 'jquery'
import { select2 } from 'select2'
import luge from '@waaark/luge'
import "controllers"
import "bootstrap"

document.addEventListener("turbolinks:load", () => {

  $('.js-example-basic-single').select2();

  const pokemon = document.querySelector(".pokemon-show-img");
  const pokeball = document.querySelector(".pokeball");
  const TLshow = gsap.timeline()
  const TLhome = gsap.timeline()
  gsap.set(pokemon, { scale: 0, transformOrigin: "center" })

  TLshow.to(pokeball, 1, { y: 500, ease: "bounce" })
    .to(pokeball, { rotate: 50, rotate: -50, repeat: 2 })
    .to(pokeball, { opacity: 0, delay: 0.5 })
    .to(pokemon, { scale: 1, transformOrigin: "center", ease: "elastic.out(2, 0.8)" })
  TLhome.from(".banner-title", 1, { y: 50, opacity: 0, ease: "Back.easeOut" })
    .from(".search", { x: 35, opacity: 0, ease: "Back.easeOut" })

  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const loading = bodymovin.loadAnimation({
      container: loader, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets9.lottiefiles.com/private_files/lf30_rBOODA.json' // the path to the animation json
    });
    setTimeout(() => {
      loader.style.display = 'none';
      console.log(loader);
    }, 2000);
  })

});
