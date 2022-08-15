'use strict'

$(() => {
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
  });
});

$(function() {
  window.contact.checkValidation()
});