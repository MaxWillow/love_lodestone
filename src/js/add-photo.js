import '../../node_modules/dropzone/dist/min/dropzone.min.css';
import Dropzone from 'dropzone';
import PNotify from '../../node_modules/pnotify/dist/es/PNotify';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import 'pnotify/dist/PNotifyBrightTheme.css';
// import { stringify } from 'querystring';

import {
  setLocal,
  getLocal,
  removeLocal,
  verificationLocal,
} from './localStorage';
verificationLocal();
const isLogin = getLocal().isLogin;


export default function() {
  if (!document.querySelector('#ADDPHOTO')) return;

  Dropzone.autoDiscover = false;

  Dropzone.prototype.defaultOptions.dictDefaultMessage =
    'Drop your pictures to upload (up to 2 files)';

  const form = document.querySelector('#my-awesome-dropzone');

  const token = getLocal().token;

  const dropzone = new Dropzone(form, {
    url: 'https://venify.herokuapp.com/user/photos/upload',
    headers: {
      authorization: token,
    },
    paramName: 'file',
    maxFilesize: 2,
    maxFiles: 1,
  });

  dropzone.on('addedfile', function(file) {
    PNotify.notice({
      text: 'Added photo.',
    });
  });

  dropzone.on('success', function(file) {
    PNotify.notice({
      text: 'Photo downloaded.',
    });
    window.location.replace('./index.html');
  });

  dropzone.on('error', function(file) {
    if (!token) {
      PNotify.error({
        text: 'User is not authenticated',
      });

      this.on('complete', function(file) {
        this.removeAllFiles(true);
      });
    }
  });
}
