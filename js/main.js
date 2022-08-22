'use strict'

{
  /*--------------------------------------------------
    ハンバーガーメニュー開閉
  --------------------------------------------------*/
  const toggle = document.querySelector('header .toggle');
  const nav = document.querySelector('header nav');
  const links = document.querySelectorAll('header nav ul li a');

  const toggleClass = function(el, className) {
    el.classList.toggle(className);
  };

  toggle.addEventListener('click', () => {
    toggleClass(toggle, 'open');
    toggleClass(nav, 'show');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      nav.classList.remove('show');
    });
  });
  
  /*--------------------------------------------------
    スムーススクロール
  --------------------------------------------------*/
  $(() => {
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000
    });
  });
}