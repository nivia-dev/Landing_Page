let menu = document.getElementById("menu");
let burger = document.getElementById("burger");
let close = document.getElementById("close");
let back = document.getElementById("back")
let radio = document.querySelector('.bar');
let count = 1;
let screen = window.matchMedia("(min-width: 900px)")

document.getElementById('radio1').checked = true;

setInterval( () => {
    nextImg()
}, 5000)

function nextImg() {
    count ++

    if(count > 4) {
        count = 1;
    }
    document.getElementById('radio'+ count).checked = true

    /*if (screen) {
    document.getElementById('radio'+ count).checked = false
    }*/
}

function openMenu() {
  menu.style.display ="block";
  burger.style.display = "none";
  close.style.display = "block";
  back.style.display = "block";
}

function closeMenu() {
  menu.style.display = "none";
  close.style.display = "none";
  burger.style.display = "block";
  back.style.display = "none"; 
} 