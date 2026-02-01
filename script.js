function toggleProjects() {
  const section = document.getElementById("projects");
  section.classList.toggle("hidden");
}

const toggle = document.getElementById("modeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
});
