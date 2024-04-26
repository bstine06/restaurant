
import renderHome from './home.js';
import renderMenu from './menu.js';
import renderContact from './contact.js';

renderHome();

const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener("click", () => {
  clearContent();
  renderHome();
})

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener("click", () => {
  clearContent();
  renderMenu();
})

const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener("click", () => {
  clearContent();
  renderContact();
})

function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = '';
}
