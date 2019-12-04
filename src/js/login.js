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
      document.location.replace('./index.html');
    }
  }

  const submitForm = document.querySelector('.regist-form');
  if (submitForm) {
    const inputLogin = document.querySelector('#form-input');
    const inputPassword = document.querySelector('#password');
    const redirect = document.querySelector('.click');

    // inputPassword.addEventListener('blur', e => {
    //   if (e.target.value.length <= 3) {
    //     e.target.classList.add('validate-error');
    //   }
    // });

    submitForm.addEventListener('submit', async e => {
      e.preventDefault();

      try {
        const userData = await axios.post(
          'https://venify.herokuapp.com/user/login',
          {
            password: inputPassword.value,
            login: inputLogin.value,
          },
        );
        setLocal({ isLogin: true, token: userData.data.token });
        document.location.replace('./index.html');
      } catch (error) {
        PNotify.error(error);
        // document.location.replace('./login-page.html');
      }
    });
  }
}

/* Изменить шрифт
сделать паддинг
выровнять лого
сделать лого ссылкой

*/
