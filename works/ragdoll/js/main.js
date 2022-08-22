'use strict'

/*------------------------------
  jQuery
------------------------------*/
$(() => {
  /*------------------------------
    スライドショー
  ------------------------------*/
  $('#hero').slick({
    infinite: true,
    arrows: false,
    fade: true,
    speed: 5000,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });
  
  /*------------------------------
    スムーススクロール
  ------------------------------*/
  var scroll = new SmoothScroll('a[href*="#all"]');
});

{
  /*--------------------------------------------------
    ハンバーガーメニュー開閉
  --------------------------------------------------*/
  const toggle = document.querySelector('header nav .toggle');
  const nav = document.querySelector('header nav');
  const links = document.querySelectorAll('header nav ul li a');

  const toggleClass = function(el, className) {
    el.classList.toggle(className);
  };

  toggle.addEventListener('click', () => {
    toggleClass(toggle, 'open');
    toggleClass(nav, 'open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      nav.classList.remove('open');
    });
  });


  /*------------------------------
    ボタン画像のマウスオーバー
  ------------------------------*/
  const btns = (document.querySelectorAll('.btn img'));

  function addSrcOn(src) {
    const dot = src.indexOf('.');
    return `${src.substring(0, dot)}_on${src.substring(dot)}`;
  }

  btns.forEach(btn => {
    const default_src = (btn.getAttribute('src'));

    btn.addEventListener('mouseover', function() {
      btn.setAttribute('src', addSrcOn(default_src));
    })

    btn.addEventListener('mouseout', function() {
      btn.setAttribute('src', default_src);
    })
  });
}