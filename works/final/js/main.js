'use strict'

{
  /*------------------------------
    ハンバーガーメニュー開閉
  ------------------------------*/
  const toggle = document.getElementById('toggle');
  const ul = document.querySelector('nav ul');

  toggle.addEventListener('click', function() {
    toggle.classList.toggle('open');
    ul.classList.toggle('open');
  });
}


{
  /*------------------------------
    ボタンのマウスオーバー
  ------------------------------*/
  const btns = (document.querySelectorAll('img.btn'));
  console.log(btns);
  
  function addSrcOn(src) {
    const dot = src.indexOf('.');
    return `${src.substring(0, dot)}_on${src.substring(dot)}`;
  }
  
  btns.forEach(btn => {
    let default_src = (btn.getAttribute('src'));
    
    if(default_src.includes('_on')) {
      return;
    }
    
    btn.addEventListener('mouseover', function() {
      btn.setAttribute('src', addSrcOn(default_src));
    })
    
    btn.addEventListener('mouseout', function() {
      btn.setAttribute('src', default_src);
    })
  });
}