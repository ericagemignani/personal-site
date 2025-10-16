// Seleziono i due elementi
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Al click, aggiungo o tolgo la classe "open"
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
