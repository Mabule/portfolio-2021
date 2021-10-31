import anime from '../node_modules/animejs/lib/anime.es.js';

var elements = document.querySelectorAll('#name');

anime({
  targets: '#name',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});