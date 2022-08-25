'use strict'

{
  /*------------------------------
    インデックス切り替え
  ------------------------------*/
  const tabList = document.querySelectorAll('.tab');
  const boxList = document.querySelectorAll('.contents-box');
  let cnt = 0;
  
  for(let i = 0; i < tabList.length;  i++) {
    tabList[i].addEventListener('click', function() {
      
      tabList.forEach(tab => {
        tab.classList.remove('selected');
      });
      boxList.forEach(box => {
        box.classList.remove('selected');
      });
      
      tabList[i].classList.add('selected');
      boxList[i].classList.add('selected');
    });
  }
}