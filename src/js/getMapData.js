import axios from 'axios';
import { setLocal, getLocal, removeLocal } from './localStorage';
console.log(getLocal());
const token = getLocal().token;
const isLogin = getLocal().isLogin;
export default function getMapData() {
  if (isLogin) {
    return axios.get('https://venify.herokuapp.com/user/mathchedList', {
      headers: {
        authorization: token,
      },
    });
  }
}
