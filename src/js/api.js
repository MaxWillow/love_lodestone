import axios from 'axios';
import {
  setLocal,
  getLocal,
  removeLocal,
  verificationLocal,
} from './localStorage';
verificationLocal();
const token = getLocal().token;
export function getUserList(pageNumber = 1) {
  return axios.get(
    `https://venify.herokuapp.com/user/list?pageNumber=${pageNumber}`,
    {
      headers: {
        authorization: token,
      },
    },
  );
}

export function postLikedUser(userID) {
  return axios.post(
    `https://venify.herokuapp.com/user/like`,
    { id: userID },
    {
      headers: {
        authorization: token,
      },
    },
  );
}
