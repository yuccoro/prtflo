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