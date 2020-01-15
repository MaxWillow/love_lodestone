'use strict';
import axios from 'axios';
import refs from './refs.js';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import {
  setLocal,
  getLocal,
  removeLocal,
  verificationLocal,
} from './localStorage';
verificationLocal();
const isLogin = getLocal().isLogin;
export function loginLauncher() {
  if (!document.querySelector('#LOGINPAGE')) return;

  if (refs.body.id === 'LOGINPAGE') {
    if (isLogin) {
      document.location.replace('/love_lodestone/index.html');
    }
  }
  const validation = () => {
    refs.inputPassword.addEventListener('input', e => {
      e.target.value.length < 8
        ? e.target.classList.add('validate-error')
        : e.target.classList.remove('validate-error');
    });
  };
  const validationSubmit = () => {
    refs.inputPassword.classList.add('validate-error');
    PNotify.error({
      text: 'Invalid login or password',
    });
  };
  const submitForm = document.querySelector('.regist-form');
  if (submitForm) {
    validation();

    submitForm.addEventListener('submit', async e => {
      e.preventDefault();

      try {
        const userData = await axios.post(
          'https://venify.herokuapp.com/user/login',
          {
            password: refs.inputPassword.value,
            login: refs.inputLogin.value,
          },
        );
        setLocal({ isLogin: true, token: userData.data.token });
        document.location.replace('/love_lodestone/index.html');
      } catch (error) {
        validationSubmit();
      }
    });
  }
}

/*
Поправить валидацию

*/
