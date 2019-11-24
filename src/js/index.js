import '../css/mapStyles.css';
import '../css/header.css';
import '../css/footer.css';
import '../css/general.css';
import { initMap } from './map.js';
localStorage.setItem('isLogin', 'true');
localStorage.setItem(
  'token',
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiI1NTU2NjIiLCJhZ2UiOjE1LCJpYXQiOjE1NzQ1MTk3Mzh9.0G84wB4wfKyAKlHKOpDrp8vwBGtKK_uq4AnEtx8B3SUCqxDVa6PN-v60ykK8i0LnJCjzUB69fxLGAr9xW7oOhg',
);
initMap();
