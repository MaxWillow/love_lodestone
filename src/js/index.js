import '../css/styles.css';
import { initMap } from './map.js';
const body = document.querySelector('body');

if (body.id === 'mapHTML') {
  initMap();
}
const ps = new PerfectScrollbar('.section-scroll', {
  suppressScrollX: true,
});
