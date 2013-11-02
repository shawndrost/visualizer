function init () {
  animate();
}

function animate () {
  window.requestAnimationFrame(animate); // ensures this function gets called once every 60 seconds
}

init();