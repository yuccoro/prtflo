'use strict'

{
  /*------------------------------
    スライドショー
  ------------------------------*/
  const pic_array = ["img/hero01.jpg", "img/hero02.jpg", "img/hero03.jpg", "img/hero04.jpg", "img/hero05.jpg"];
  let slide_count = 0;

  function playSlideshow() {
    if (slide_count === pic_array.length - 1) {
      slide_count = 0;
    } else {
      slide_count++;
    }

    document.querySelector('#hero img').setAttribute('src', pic_array[slide_count]);
  }

  setInterval(playSlideshow, 5000);

  /*------------------------------
    ボタン画像のマウスオーバー
  ------------------------------*/;
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