'use strict'

{
  const toggle = document.getElementById('toggle');
  const ul = document.querySelector('nav ul');

  toggle.addEventListener('click', function() {
    toggle.classList.toggle('open');
    ul.classList.toggle('open');
  });
}