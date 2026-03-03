// THEME TOGGLE
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("light");
};

// THREE BACKGROUND
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
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();

// FLOATING TEXT
gsap.to(".floating-text", {
  y: -20,
  duration: 2,
  repeat: -1,
  yoyo: true,
});

// SCROLL REVEAL
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

// SKILL BARS
document.querySelectorAll(".progress").forEach((bar) => {
  const value = bar.getAttribute("data-skill");
  gsap.to(bar, {
    scrollTrigger: {
      trigger: bar,
      start: "top 80%",
    },
    width: value + "%",
    duration: 1.5,
  });
});

// GITHUB STATS
fetch("https://api.github.com/users/SagnikAB")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("githubStats").innerHTML = `
    <p>Public Repos: ${data.public_repos}</p>
    <p>Followers: ${data.followers}</p>
  `;
  });
