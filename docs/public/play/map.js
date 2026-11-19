import { displayNameKey, xpKey } from './session.js';

const map = document.getElementById('brain-map');
const welcome = document.getElementById('welcome');
const form = document.getElementById('player-form');
const displayName = document.getElementById('display-name');

function showMap() {
  const xp = Number(sessionStorage.getItem(xpKey)) || 0;
  map.style.setProperty('--glow', Math.min(1, xp / 1000));
  welcome.hidden = true;
  map.hidden = false;
  map.querySelector('a').focus();
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const name = displayName.value.trim();
  if (!name) {
    displayName.value = '';
    displayName.reportValidity();
    return;
  }
  sessionStorage.setItem(displayNameKey, name);
  showMap();
});

if (sessionStorage.getItem(displayNameKey)) showMap();

