import optionMap from './optionMap.js';
import machPeopleMapHbs from '../templates/machPeopleMap.hbs';
import getMapData from './getMapData.js';
import refs from './refs.js';

class MAP {
  constructor({ options, dom }) {
    this.options = options;
    this.dom = dom;
  }
  addMap() {
    this.map = new google.maps.Map(this.dom, this.options);
  }
  addMarker(markers) {
    console.dir(markers);
    if (markers.length === 0) {
      return;
    }
    if (markers.length > 0) {
      markers.forEach(element => {
        let infowindow = new google.maps.InfoWindow({
          content: `
          <div class="mach__people-item">
            <img class="mach__people-icon" src="${element.image_list[0]}" alt="">
            <div class="mach__people-main">
              <div class="mach__people-name">${element.full_name}</div>
              <div class="mach__people-age">Age: ${element.age}</div>
              <div class="mach__people-cell">Cell: ${element.phone_number}</div>
            </div>
          </div>
          `,
          maxWidth: 400,
        });
        let marker = new google.maps.Marker({
          position: element.geo_location,
          map: this.map,
          title: element.full_name,
          type: {
            icon: element.image_list[0],
          },
        });

        marker.addListener('click', function() {
          infowindow.open(this.map, marker);
        });
      });
    }
  }
}
export async function initMap() {
  if (refs.body.id !== 'mapHTML') return;

  let map = await new MAP({ dom: refs.map, options: optionMap });
  await map.addMap();

  const { data } = await getMapData();
  const markers = data.map(e => {
    let result = e;

    if (typeof e.geo_location === 'string') {
      result = e.geo_location.split(', ');
    }

    e.geo_location = {
      lat: Number(result[0]),
      lng: Number(result[1]),
    };
    return e;
  });
  const getMachPeopleMap = dom => {
    console.dir(dom);
    console.dir(markers);

    const result = markers.reduce((acc, e) => {
      return (acc += machPeopleMapHbs(e));
    }, '');

    dom.innerHTML = result;
  };

  await getMachPeopleMap(refs.machPeopleUl);
  await map.addMarker(markers);
  refs.machPeopleUl.addEventListener('click', e => {
    if (e.target.nodeName !== 'IMG') return;
    const lat = Number(e.target.dataset.lat);
    const lng = Number(e.target.dataset.lng);
    const cord = { lat, lng };
    map.map.panTo(cord);
  });

  refs.menu.addEventListener('click', e => {
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
  const ps = new PerfectScrollbar('.section-scroll', {
    suppressScrollX: true,
  });
}
