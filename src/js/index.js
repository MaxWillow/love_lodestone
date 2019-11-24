import '../css/mapStyles.css';
import '../css/header.css';
import '../css/footer.css';
import '../css/general.css';
import { initMap } from './map.js';
import refs from './refs.js';
localStorage.setItem('isLogin', 'true');
localStorage.setItem(
  'token',
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiI1NTU2NjIiLCJhZ2UiOjE1LCJpYXQiOjE1NzQ1MTk3Mzh9.0G84wB4wfKyAKlHKOpDrp8vwBGtKK_uq4AnEtx8B3SUCqxDVa6PN-v60ykK8i0LnJCjzUB69fxLGAr9xW7oOhg',
);
if (refs.body.id === 'mapHTML') {
  initMap();
  refs.menu.addEventListener('click', e => {
    console.dir();
    const likes = e.target.closest('.js-likes');
    const peoples = e.target.closest('.js-peoples');
    const exit = e.target.closest('.js-exit');
    if (exit.classList.contains('js-exit')) {
      localStorage.removeItem('token');
      localStorage.removeItem('isLogin');
      document.location.replace('./login-page.html');
    }
    if (peoples.classList.contains('js-peoples')) {
      document.location.replace('./main-screen.html');
    }
    if (likes.classList.contains('js-likes')) {
    }
  });
}
const ps = new PerfectScrollbar('.section-scroll', {
  suppressScrollX: true,
});
