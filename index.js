var scene, camera, renderer, container, sceneSize, audioContext, masterGain, masterAnalyzer;
var constraints = { audio: true };

function successCallback (stream) {
  console.log("success");
  mediaStreamSource = audioContext.createMediaStreamSource(stream);
  init();
}

function errorCallback () {
  console.log("err", arguments);
}

function initAudio () {
  audioContext = new webkitAudioContext();
  masterGain = audioContext.createGainNode();
  masterAnalyser = audioContext.createAnalyser();

  masterAnalyser.connect(masterGain);
  masterGain.connect(audioContext.destination);

  navigator.webkitGetUserMedia(constraints, successCallback, errorCallback); // todo: make non-webkit-specific
}

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

  var geometry = new THREE.SphereGeometry(sceneSize / 20, 20, 20);
  var material = new THREE.MeshNormalMaterial();
  var mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

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

initAudio();
