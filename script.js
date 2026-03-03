const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg"),
  alpha: true,
});
renderer.setSize(innerWidth, innerHeight);
camera.position.z = 5;

const geometry = new THREE.IcosahedronGeometry(1.5, 1);
const material = new THREE.MeshBasicMaterial({
  wireframe: true,
  color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.004;
  mesh.rotation.y += 0.004;
  renderer.render(scene, camera);
}
animate();

gsap.to(".floating-text", { y: -20, duration: 2, repeat: -1, yoyo: true });

gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    opacity: 0,
    y: 60,
    duration: 1,
  });
});

document.querySelectorAll(".progress").forEach((bar) => {
  const value = bar.dataset.skill;
  gsap.to(bar, {
    scrollTrigger: {
      trigger: bar,
      start: "top 80%",
    },
    width: value + "%",
    duration: 1.5,
  });
});

document.querySelectorAll(".tilt").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = (y - rect.height / 2) / 20;
    const rotateY = (rect.width / 2 - x) / 20;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});
