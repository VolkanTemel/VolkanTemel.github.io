function openForm() {
  if (document.getElementById("hide").innerHTML === "Show") {
    document.getElementById("project-grid").style.display = "block";
    document.getElementById("hide").innerHTML = "Hide";
  }
  else{
    document.getElementById("project-grid").style.display = "none";
    document.getElementById("hide").innerHTML = "Show";
  }
}
