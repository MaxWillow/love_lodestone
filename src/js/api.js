import axios from 'axios';
const token =
  localStorage.getItem('token') ||
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiJ1c2VyVGVsLnZhbHVlIiwiYWdlIjoidXNlckFnZS52YWx1ZSIsImlhdCI6MTU3NDUyNDMyMH0.CJcAiSm1lbnAwTOipBt-0KJI8ZPREWdRwRotDraRnoVYCPi3DVNhwXhhZDag36iV0cds7K5GnGheoCGf4sPLzQ';

export function getUserList(pageNumber) {
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
