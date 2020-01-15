import refs from './refs.js';
import { setLocal, getLocal, removeLocal } from './localStorage';
export function menuClick() {
  if (refs.body.id !== 'mapHTML' && refs.body.id !== 'MAIN') return;
  refs.menu.addEventListener('click', e => {
    const likes = e.target.closest('.js-likes');
    const peoples = e.target.closest('.js-peoples');
    const exit = e.target.closest('.js-exit');
    if (exit.classList.contains('js-exit')) {
      removeLocal();
      document.location.replace('/love_lodestone/login.html');
    }
    if (peoples.classList.contains('js-peoples')) {
      document.location.replace('/love_lodestone/index.html');
    }
    if (likes.classList.contains('js-likes')) {
      document.location.replace('/love_lodestone/location-page.html');
    }
  });
}
