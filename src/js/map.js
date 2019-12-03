import optionMap from './optionMap.js';
import machPeopleMapHbs from '../templates/machPeopleMap.hbs';
import getMapData from './getMapData.js';
import refs from './refs.js';
console.dir(getMapData());
import {
  setLocal,
  getLocal,
  removeLocal,
  verificationLocal,
} from './localStorage';
verificationLocal();
const isLogin = getLocal().isLogin;

class MAP {
  constructor({ options, dom }) {
    this.options = options;
    this.dom = dom;
  }
  addMap() {
    this.map = new google.maps.Map(this.dom, this.options);
  }
  addMarker(markers) {
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

        marker.addListener('click', function () {
          infowindow.open(this.map, marker);
        });
      });
    }
  }
}




export async function initMap() {
  if (refs.body.id !== 'mapHTML') return;
  if (!isLogin) {
    document.location.replace('./login.html');
    return;
  }
  let map = await new MAP({ dom: refs.map, options: optionMap });
  await map.addMap();
  const { data } = await getMapData();
  const cleanData = data
    .filter(geo => geo.geo_location.length >= 1)
    .filter(img => img.image_list.length >= 1);
  // console.dir(cleanData)
  const markers = cleanData.map(e => {
    let result = e;
    // if (e.geo_location < 2) return;
    if (typeof e.geo_location === 'string') {
      result = e.geo_location.split(', ');
      e.geo_location = {
        lat: Number(result[0]),
        lng: Number(result[1]),
      };
    }
    e.geo_location = {
      lat: e.geo_location[0],
      lng: e.geo_location[1],
    };
    return e;
  });
  const getMachPeopleMap = dom => {
    // console.dir(markers)
    const result = markers.reduce((acc, e) => {
      e.geo_location = {
        lat: e.geo_location.lat,
        lng: e.geo_location.lng,
      };
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

  const ps = new PerfectScrollbar('.section-scroll', {
    suppressScrollX: true,
  });
}
