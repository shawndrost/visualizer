var scene, camera, renderer, container, sceneSize;

function init () {
  sceneSize = 100;
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    sceneSize / 1000,
    sceneSize * 20
  );
  camera.position.z = sceneSize;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  container = document.createElement('div');
  document.body.appendChild(container);
  container.appendChild(renderer.domElement);

  animate();
}

function animate () {
  window.requestAnimationFrame(animate); // ensures this function gets called once every 60 seconds
  renderer.render(scene, camera);
}

init();