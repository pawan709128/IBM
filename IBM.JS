document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links ul');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
  });
});






let bjp = 0;
let rjd = 0;
let bsp = 0;
let special = 0;

function castvote(index) {
  if (index == 0) {
    bjp++;
  } else if (index == 1) {
    rjd++;
  } else if (index == 2) {
    bsp++;
  } else if (index == 3) {
    special++;
  }
}

function countvote() {
  document.getElementById('bjp').innerText = bjp;
  document.getElementById('rjd').innerText = rjd;
  document.getElementById('bsp').innerText = bsp;
  document.getElementById('special').innerText = special;
}

