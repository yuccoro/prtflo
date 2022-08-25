/*------------------------------
  カルーセル
------------------------------*/
$(document).ready(function(){
  $('.slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 6000,
    cssEase: "linear", //スライドの流れ方を等速に設定
    centerMode: true,
    variableWidth: true,
    slidesToScroll: 1,
    swipe: false, 
    pauseOnFocus: false,
    pauseOnHover: false,
  });
});