function toggleProjects(){
  document.getElementById("projects").classList.toggle("hidden");
}

const toggle = document.getElementById("modeToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
});
