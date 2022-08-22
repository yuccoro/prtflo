'use strict';

{
  /*----------------------------------------
    headerメインビジュアルの動き
    （下スクロールでアクティブ化）
  ----------------------------------------*/
  const crosspoint = document.querySelectorAll('.crosspoint');
  
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        document.querySelector('.main').classList.remove('appear');
        document.querySelector('.catch').classList.remove('hidden');
      return;
    }
    document.querySelector('.main').classList.add('appear');
    document.querySelector('.catch').classList.add('hidden');
    // obs.unobserve(entry.target);
    });
  };

  /* Intersection Observer */
  const options = {
    threshold: 0.2,
  };
  const observer = new IntersectionObserver(callback, options);
  
  crosspoint.forEach(target => {
    observer.observe(target);
  });
  
  
  /*----------------------------------------
    ボタン画像のマウスオーバー
  ----------------------------------------*/
  const btns = (document.querySelectorAll('img.btn'));
  
  function addSrcOn(src) {
    const dot = src.indexOf('.');
    return `${src.substring(0, dot)}_on${src.substring(dot)}`;
  }
  
  btns.forEach(btn => {
    let default_src = (btn.getAttribute('src'));
    
    btn.addEventListener('mouseover', function() {
      btn.setAttribute('src', addSrcOn(default_src));
    })
    
    btn.addEventListener('mouseout', function() {
      btn.setAttribute('src', default_src);
    })
  });
  
  
  /*------------------------------------------
    1000pxスクロールしたら.pagetopを表示
  -------------------------------------------*/
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 1000 ) { 
      $(".pagetop").fadeIn();
    } else {
      $(".pagetop").fadeOut();
    }
  });


  /*----------------------------------------
    ハンバーガーメニューの挙動
  ----------------------------------------*/  
  $(function() {
    // 三本線クリックでメニュー出現
    $(".toggle").on("click", function() {
      $("nav ul").slideToggle();
      $(this).toggleClass("open");
      $("nav").toggleClass("open");
    }); 
    
    // メニューのリンクをクリックするとメニューが消える
    $("nav ul a").on("click", function() {
      if (window.innerWidth <= 520) {
        $("nav ul").slideToggle();
        $(".toggle").toggleClass("open");
        $("nav").toggleClass("open");
      }
    });
  });
}