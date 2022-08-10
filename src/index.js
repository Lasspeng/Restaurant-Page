import showHome from './main-page';
import { showMenu } from './menu-page';

showHome();
const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', () => {
  document.querySelector('#content').textContent = '';
  showHome();
});
const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
  document.querySelector('#content').textContent = '';
  showMenu();
});