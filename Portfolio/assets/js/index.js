let menu = document.getElementById('ul');
let openBtn = document.getElementsByClassName('fa-solid fa-bars')[0];
let closeBtn = document.getElementsByClassName('fa-solid fa-xmark')[0];
let body = document.getElementsByClassName('main')[0];
openBtn.addEventListener("click", function() {
  menu.style.display = "block";
  openBtn.style.display = "none";
  closeBtn.style.display = "flex";
});
closeBtn.addEventListener("click", function() {
  menu.style.display = "none";
  openBtn.style.display = "flex";
  closeBtn.style.display = "none";
});

body.addEventListener("click", function() {
  menu.style.display = "none";
  openBtn.style.display = "flex";
  closeBtn.style.display = "none";
});