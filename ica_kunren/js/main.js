'use strict';

{
  const targets = document.querySelectorAll('.crosspoint');

  function callback(entries, obs) {

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        document.querySelector('.main').classList.remove('appear');
		  return;
      }

      document.querySelector('.main').classList.add('appear');
      //obs.unobserve(entry.target);
    });
  };

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });
}