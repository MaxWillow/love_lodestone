'use strict';
import axios from 'axios';

export function loginLauncher() {
  if(!document.LOGINPAGE) return
  const body = document.querySelector('body');
  const myToken = localStorage.getItem('isLogin');
  // localStorage.removeItem('token');
  // localStorage.removeItem('isLogin');
  if (body.id === 'LOGINPAGE') {
    if (myToken) {
      document.location.replace('./main-screen.html');
    }
  }
  
  const submitForm = document.querySelector('.regist-form');
  if (submitForm) {
    const inputLogin = document.querySelector('#form-input');
    const inputPassword = document.querySelector('#password');
    const redirect = document.querySelector('.click');
  
    //   redirect.addEventListener('click', e => {
    //     document.location.replace('./registration-form.html');
    //     console.log(e);
    //   });
    inputPassword.addEventListener('blur', e => {
      if (e.target.value.length <= 3) {
        e.target.classList.add('validate-error');
      }
    });
  
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
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('token', JSON.stringify(userData.data.token));
        document.location.replace('./main-screen.html');
      } catch (error) {
        console.error(error);
        // document.location.replace('./login-page.html');
      }
    });
  }
}


