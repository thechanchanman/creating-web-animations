var roundButton = document.getElementById('roundButton');
roundButton.addEventListener('click', showMenu, false);

var flyoutMenu = document.getElementById('flyoutMenu');
flyoutMenu.addEventListener('click', hideMenu, false);

function showMenu(e) {
  flyoutMenu.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function hideMenu(e) {
  flyoutMenu.classList.remove('show');
  document.body.style.overflow = 'auto';
  e.stopPropagation();
}
