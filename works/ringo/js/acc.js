/*アコーディオンスクリプト設定*/
$(function(){
  $('.accontent .acopen').click(function(){
    $(this).next('.acclose').slideToggle();
    $(this).toggleClass("open");
    $('.accontent .acopen').not($(this)).next('.accontent .acclose').slideUp();
    $('.accontent .acopen').not($(this)).removeClass("open");
  });
});