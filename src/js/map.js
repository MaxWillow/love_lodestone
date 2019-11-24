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
  let map = await new MAP({ dom: refs.map, options: optionMap });
  await map.addMap();

  const { data } = await getMapData();
  const markers = data.map(e => {
    e.geo_location.split(', ');
    e.geo_location = {
      lat: Number(e.geo_location[0]),
      lng: Number(e.geo_location[1]),
    };
    return e;
  });
  const getMachPeopleMap = dom => {
    console.dir(dom);
    console.dir(markers);

    const result = markers.reduce((acc, e) => {
      return (acc += machPeopleMapHbs(e));
    }, '');

    console.dir(result);
    dom.innerHTML = result;
  };
  console.dir(refs.machPeopleUl);
  console.dir(markers);
  await getMachPeopleMap(refs.machPeopleUl);
  await map.addMarker(markers);
  refs.machPeopleUl.addEventListener('click', e => {
    if (e.target.nodeName !== 'IMG') return;
    const lat = Number(e.target.dataset.lat);
    const lng = Number(e.target.dataset.lng);
    const cord = { lat, lng };
    map.map.panTo(cord);
  });
}
