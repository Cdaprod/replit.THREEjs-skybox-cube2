import * as THREE from 'three';

// set up the scene
const scene = new THREE.Scene();

// create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// add lighting
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 1);
scene.add(directionalLight);

// create the car
const geometry = new THREE.BoxGeometry(1, 1, 2);
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const car = new THREE.Mesh(geometry, material);
scene.add(car);

// add controls to the car
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target = car.position;

// create the skybox
const skyboxGeometry = new THREE.BoxGeometry(1000, 1000, 1000);
const skyboxMaterial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('skybox.jpg'),
  side: THREE.BackSide
});
const skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
scene.add(skybox);

// animate the scene
function animate() {
  requestAnimationFrame(animate);

  // update the controls
  controls.update();

  // render the scene
  renderer.render(scene, camera);
}
animate();
