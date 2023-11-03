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
    if (screen) {
        document.getElementById('radio'+ count).checked = false
    }
}



const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('menu');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
