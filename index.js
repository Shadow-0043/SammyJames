// Basic Three.js setup
let scene, camera, renderer;
let roseStem, rosePetals = [];

// Initialize the scene, camera, and renderer
function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Lighting
  const light = new THREE.PointLight(0xffffff, 1, 100);
  light.position.set(10, 10, 10);
  scene.add(light);

  // Create the rose stem
  const stemGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2, 32);
  const stemMaterial = new THREE.MeshLambertMaterial({ color: 0x4CAF50 });
  roseStem = new THREE.Mesh(stemGeometry, stemMaterial);
  roseStem.position.y = -1;
  scene.add(roseStem);

  // Create the rose petals (as spheres for now)
  const petalMaterial = new THREE.MeshLambertMaterial({ color: 0xe91e63 });
  for (let i = 0; i < 5; i++) {
    const petalGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const petal = new THREE.Mesh(petalGeometry, petalMaterial);
    petal.position.y = 0.8;
    petal.position.x = Math.sin(i * 1.25) * 0.5;
    petal.position.z = Math.cos(i * 1.25) * 0.5;
    petal.scale.set(0, 0, 0); // Start petals small for blooming animation
    rosePetals.push(petal);
    scene.add(petal);
  }

  // Render loop
  animate();
}

// Bloom animation logic
let bloomProgress = 0;
function animate() {
  requestAnimationFrame(animate);

  // Bloom effect
  if (bloomProgress < 1) {
    bloomProgress += 0.01;
    rosePetals.forEach((petal, index) => {
      petal.scale.set(bloomProgress, bloomProgress, bloomProgress);
    });
  }

  renderer.render(scene, camera);
}

// Make the flower interactive (rotation)
document.addEventListener("mousemove", (event) => {
  roseStem.rotation.y = (event.clientX / window.innerWidth) * 2 * Math.PI;
  roseStem.rotation.x = (event.clientY / window.innerHeight) * 2 * Math.PI;
  rosePetals.forEach(petal => {
    petal.rotation.y = (event.clientX / window.innerWidth) * 2 * Math.PI;
    petal.rotation.x = (event.clientY / window.innerHeight) * 2 * Math.PI;
  });
});

// Display message when bloom is complete
function showLoveMessage() {
  const message = document.getElementById("love-message");
  message.style.opacity = 1;
}

setTimeout(showLoveMessage, 7000); // Message appears after 7 seconds

// Adjust camera and renderer on window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
