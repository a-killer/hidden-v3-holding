import anime from 'animejs';

export function translate(element) {
  anime({
    targets: element,
    translateX: 1400,
    translateY: -10,
    rotate: 360,
    scale: 1.3,
    duration: 3000,
    direction: 'alternate',
    easing: 'easeOutQuad',
    loop: true
  });
}


export function timeline(element) {
  var basicTimeline = anime.timeline({
  //direction: 'alternate',
  //loop: true
});

  basicTimeline
    .add({
      targets: '#basicTimeline .square.el',
      delay: 1000,
      duration: 3000,
      translateX: -956,
      easing: 'easeOutExpo'
    })
    .add({
      targets: '#basicTimeline .circle.el',
      delay: 1000,
      duration: 3000,
      translateX: -956,
      easing: 'easeOutExpo'
    })
    .add({
      targets: '#basicTimeline .triangle.el',
      delay: 1000,
      duration: 3000,
      translateX: -956,
      easing: 'easeOutExpo'
    });
}


// ANIMATION FOR INFO TOGGLE

export function infoAnimate(element) {
var infoAnimate = anime({
  targets: '#info',
  width: {
    value: '+=300',
    duration: 200,
    easing: 'linear'
  },
  borderRadius: {
    value: 83
  },
  duration: 200,
  height: {
    value: '+=20'
  },
  easing: 'linear',
  autoplay: false
});
}

/*
document.querySelector('.info-trigger').onclick = function() {
  boxGetsLarger.play();
  boxGetsLarger.reverse();
}
*/