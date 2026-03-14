// HERO TYPEWRITER EFFECT
const text = "Explore Incredible Maharashtra";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("heroTitle").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

window.onload = typeEffect;


// BACK TO TOP BUTTON
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

function scrollTopPage() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// FOOD CARD POPUP
function showFood(food) {
  alert("You selected: " + food + " — A famous Maharashtrian dish!");
}