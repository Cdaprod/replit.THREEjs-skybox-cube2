const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, -5);

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.BoxGeometry(1, 1, 2);
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const car = new THREE.Mesh(geometry, material);
scene.add(car);

const skyboxGeometry = new THREE.BoxGeometry(1000, 1000, 1000);
const skyboxMaterial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('skybox.jpg'),
  side: THREE.BackSide
});
const skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);
scene.add(skybox);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
