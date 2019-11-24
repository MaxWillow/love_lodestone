import axios from 'axios';
const token =
  localStorage.getItem('token') ||
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIxMjMxMjMxMjMzIiwiYWdlIjoxOCwiaWF0IjoxNTc0NjE5NjU4fQ.ulT23UfI6PSGKc7gAMFQzgdm15afeueXkvNUGzloDEisHmYQ6s9N9iId04syerbhoHpULf-P5V4WBJ6eN5EJeA';

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
