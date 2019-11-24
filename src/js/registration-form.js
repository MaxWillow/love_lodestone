import axios from 'axios';
import PNotify from '../../node_modules/pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import 'pnotify/dist/PNotifyBrightTheme.css';

const refs = {
  form: document.querySelector('.form'),
  password: document.querySelector('#user-password'),
  userLogin: document.querySelector('#user-login'),
  userAge: document.querySelector('#user-age'),
  userTel: document.querySelector('#user-tel'),
  fields: document.querySelectorAll('.field'),
};

let maleGroup = '';

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  for (let i = 0; i < refs.fields.length; i++) {
    if (!refs.fields[i].value) {
      refs.fields[i].classList.add('empty');
    } else if (refs.password.value.length < 8) {
      refs.password.classList.add('empty');
    } else {
      refs.fields[i].classList.remove('empty');
    }
  }

  maleGroup = document.querySelector('[name="radioGroupSex"]:checked');

  axios
    .post('https://venify.herokuapp.com/user/register', {
      password: refs.password.value,
      login: refs.userLogin.value,
      age: refs.userAge.value,
      phone_number: refs.userTel.value,
      geo_location: [55.5555, 65.55555],
      gender: maleGroup.value,
    })
    .then(function(response) {
      localStorage.setItem('token', JSON.stringify(response.data.token));
      console.log(response);
      PNotify.notice({
        text: 'Registration success!',
      });
    })
    .catch(function(error) {
      console.log(error);
    });

  refs.form.reset();
});
