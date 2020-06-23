let menuToggle = document.getElementById('main-menu-caption');
let mainMenu = document.getElementById('main-menu');
let mainMenuState = 'closed';
let menuItemsList = document.querySelectorAll('ul#main-menu li');
let menuItemsQuantity = menuItemsList.length;
let menuHeight = menuItemsQuantity * 51;

menuToggle.addEventListener('click', function() {
  if (mainMenuState === 'closed') {
    mainMenu.style.height = menuHeight + 'px';
    mainMenuState = 'opened';
  } else if (mainMenuState === 'opened') {
    mainMenu.style.height = '0px';
    mainMenuState = 'closed';
  }
});
