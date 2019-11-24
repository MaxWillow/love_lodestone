import machPeopleMapHbs from '../templates/machPeopleMap.hbs';
import peoples from './mock/skip.json';
export function getMachPeopleMap(dom) {
  const result = peoples.mathced_list.reduce((acc, e) => {
    return (acc += machPeopleMapHbs(e));
  }, '');
  dom.innerHTML = result;
}
