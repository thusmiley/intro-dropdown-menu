let menuOpen = false;
const menuBar = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const openbtn = document.getElementById("openIcon");
const closebtn = document.getElementById("closeIcon");

function openNav() {
  openbtn.style.display = "none";
  menuBar.style.display = "block";
  overlay.style.display = "block";
  closebtn.style.display = "block";
  menuOpen = true;
}

function closeNav() {
  menuBar.style.display = "none";
  overlay.style.display = "none";
  closebtn.style.display = "none";
  openbtn.style.display = "block";

  menuOpen = false;
}
