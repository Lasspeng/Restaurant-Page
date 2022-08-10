import { showHome } from './main-page';
import { showMenu } from './menu-page';
import { showContact } from './contact';

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
const contactButton = document.querySelector('.contact');
contactButton.addEventListener('click', () => {
  document.querySelector('#content').textContent = '';
  showContact();
})