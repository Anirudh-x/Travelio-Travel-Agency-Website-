let prev = document.getElementById('prev');
let next = document.getElementById('next');
let thumbnail = document.getElementsByClassName('thumbnail');
let hero = document.getElementById('hero');
let backgroundImg = new Array(
  "images/bg1.png",
  "images/bg2.png",
  "images/bg3.png",
  "images/bg4.png",
  "images/bg5.png",
  "images/bg6.png",
  "images/bg7.png",
);

let exploreButton = document.querySelector('.js-explore')

let i = 0;
next.onclick = function() {
  if (i < 6) {
    hero.style.backgroundImage = `url("${backgroundImg[i+1]}")`;
    thumbnail[i+1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i++;
  }
}
prev.onclick = function() {
  if (i > 0) {
    hero.style.backgroundImage = `url("${backgroundImg[i-1]}")`; 
    thumbnail[i-1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i--;
  }
}
