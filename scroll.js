//Javascritp to do a scroll animation
//Inspired by https://stackoverflow.com/questions/12199363/scrollto-with-animation thread

function scrollToY(target){
  var scrollY = window.scrollY;
  var currentTime = 0;
  var speed = 5000;

  // min time .1, max time .8 seconds
  var time = Math.max(.1, Math.min(Math.abs(scrollY - target) / speed, 1));
  var easingFunction = pos => (-0.5 * (Math.cos(Math.PI * pos) -1));

  // Animation loop
  function tick() {
    currentTime += 1 / 60;
    var percentageThrough = currentTime / time;
    var percentageTravelled = easingFunction(percentageThrough);

    if (percentageThrough < 1){
      window.requestAnimationFrame(tick);
      window.scrollTo(0, scrollY + ((target - scrollY) * percentageTravelled));
    } else
      window.scrollTo(0, target);
  }
  window.requestAnimationFrame(tick);
}
