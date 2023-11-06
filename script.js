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
  document.getElementById("menu").style.display = "block";
  document.getElementById("burger").style.display = "none";
  document.getElementById('close').style.display = "block";
  
}

function closeMenu() {
  document.getElementById("menu").style.display = "none";
  document.getElementById ("close").style.display = "none"; 
  document.getElementById("burger").style.display = "block";
} 
