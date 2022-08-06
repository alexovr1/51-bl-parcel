import 'material-icons/iconfont/material-icons.css';
import storageAPI from './storage';
import menu from './menu.json';
import { createMarkupMenu } from '../templates/createMarkUpMenu';

const listRef = document.querySelector('.menu-list');
console.log(listRef);

const markUp = createMarkupMenu(menu);
console.log(markUp);
listRef.insertAdjacentHTML('beforeend', markUp);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_STORAGE_KEY = 'theme';

console.log('Hello');

const toggleRef = document.querySelector('.theme-switch__toggle');
toggleRef.addEventListener('input', onToggle);

init();

function onToggle(e) {
  const { checked } = e.target;
  document.body.className = checked ? Theme.DARK : Theme.LIGHT;
  storageAPI.save(THEME_STORAGE_KEY, checked);
}

function init() {
  const savedTheme = storageAPI.load(THEME_STORAGE_KEY);
  console.log(savedTheme);
  document.body.className = savedTheme ? Theme.DARK : Theme.LIGHT;
  toggleRef.checked = savedTheme ? true : false;
}
