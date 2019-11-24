import axios from 'axios';

export default function getMapData() {
  if (localStorage.getItem('isLogin') === 'true') {
    return axios.get('https://venify.herokuapp.com/user/mathchedList', {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    });
  }
}

