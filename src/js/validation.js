'use strict';

// const password = document.getElementById('#password');
// password.addEventListener('input', function(event) {
//   if (password.validity.valueMissing) {
//     password.setCustomValidity(
//       "This password doesn't match. Please double check it",
//     );
//   } else {
//     password.setCustomValidity('');
//   }
// });

// import axios from 'axios';

// const submitForm = document.querySelector('.regist-form');
// if (submitForm) {
//   const inputLogin = document.querySelector('#form-input');
//   const inputPassword = document.querySelector('#password');

//   console.log(inputLogin);
//   console.log(inputPassword);

//   inputPassword.addEventListener('blur', e => {
//     if (e.target.value.length <= 6) {
//       e.target.classList.add('validate-error');
//     }
//   });

//   submitForm.addEventListener('submit', async e => {
//     e.preventDefault();
//     console.log(inputLogin.value, inputPassword.value);

//     try {
//       const userData = await axios.post(
//         'https://venify.herokuapp.com/user/login',
//         {
//           password: inputPassword.value,
//           login: inputLogin.value,
//         },
//       );

//     } catch (e) {
//       console.log(e);
//     }
//   });
// }

