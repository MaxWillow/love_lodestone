import '../css/mapStyles.css';
import '../css/header.css';
import '../css/footer.css';
import '../css/general.css';
import { initMap } from './map.js';
import refs from './refs.js';

if (refs.body.id === 'mapHTML') {
  initMap();
}
const ps = new PerfectScrollbar('.section-scroll', {
  suppressScrollX: true,
});
