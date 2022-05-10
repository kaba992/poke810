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



  // window.addEventListener('load', () => {
  //   const loader = document.getElementById('loader');

  //   const loading = bodymovin.loadAnimation({
  //     container: loader, // the dom element that will contain the animation
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: 'https://assets9.lottiefiles.com/private_files/lf30_rBOODA.json' // the path to the animation json
  //   });
  //   setTimeout(() => {

  //     loader.style.display = 'none';
  //   }, 2000);
  // })



  // function delay(n) {
  //   return new Promise((done) => {
  //     setTimeout(() => {
  //       done();
  //     }, n)
  //   })
  // }


  // barba.init({

  //   sync: true,

  //   transitions: [
  //     {
  //       async leave() {

  //         const done = this.async();

  //         console.log('leave');


  //         await delay(1);
  //         done();

  //       },
  //       enter() {


  //         console.log('enter');


  //       }
  //     }
  //   ]

  // })

});
