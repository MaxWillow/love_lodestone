import { getUserList, postLikedUser } from './api';
import swiperTemplate from '../templates/bg_swiper_template.hbs';
import 'swiper/css/swiper.min.css';
import Swiper from 'swiper';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import refs from './refs';
import {
  setLocal,
  getLocal,
  removeLocal,
  verificationLocal,
} from './localStorage';
verificationLocal();
const isLogin = getLocal().isLogin;
export function createSwiper() {
  if (!document.querySelector('#MAIN')) return;
  if (!isLogin) {
    document.location.replace('/login.html');
  }
  PNotify.defaults.styling = 'material';
  PNotify.defaults.delay = 3500;

  let pageNumber = 1;
  let people = [];

  const addSlidesToSlider = (slider, data) => {
    const slides = data.map(elem => {
      return swiperTemplate(elem.image_list[0]);
    });
    slider.appendSlide([...slides]);
  };

  const addUsers = (userList, data) => {
    const ids = data.map(elem => elem._id);
    console.log('userList', userList);
    console.log('data', data);
    console.log('ids', ids);

    return [...userList, ...ids];
  };

  // Запрос данных
  const renderUserList = async () => {
    const { data } = await getUserList();

    // await console.dir('getUserList - data', data);
    await (people = addUsers([], data));
    // await console.log('people', people);

    const bgSwiper = new Swiper('.bg-swiper', {
      speed: 400,
      slidesPerView: 1,
      centeredSlides: true,
      preventInteractionOnTransition: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });

    const mainSwiper = new Swiper('.main-swiper', {
      speed: 400,
      slidesPerView: 1,
      centeredSlides: true,
      allowSlidePrev: false,
      preventInteractionOnTransition: true,
      pagination: {
        el: '.swiper-pagination',
        nextButton: '.swiper-button-next',
      },
      on: {
        init: function () {
          console.log('swiper initialized');
        },
      },
    });

    mainSwiper.on('slideChange', async () => {
      const { slides, activeIndex } = mainSwiper;
      // console.log(mainSwiper);

      if (slides.length - activeIndex <= 3) {
        pageNumber += 1;
        const { data } = await getUserList(pageNumber);
        // console.dir(data);
        addUsers(people, data);
        addSlidesToSlider(bgSwiper, data);
        addSlidesToSlider(mainSwiper, data);
      }
    });

    mainSwiper.on('slideNextTransitionEnd', e => {
      //   mainSwiper.removeSlide(0);
      //   bgSwiper.removeSlide(0);
      //   bgSwiper.update();
      //   mainSwiper.update();
      // console.log(mainSwiper.slides.length);
    });

    addSlidesToSlider(bgSwiper, data);
    addSlidesToSlider(mainSwiper, data);

    // const swiperWrapper = document.querySelector('.js-swiper-wrapper');
    // swiperWrapper.innerHTML = res;
    // const swiperSection = swiperWrapper.closest('.swiper-section');
    // console.dir(swiperSection);
    // const swiperImg = document.querySelector('.swiper-slide__img');
    // console.dir(swiperImg);
    // const imgURL = swiperImg.getAttribute('src');
    // console.log(imgURL);

    const slideNext = () => {
      mainSwiper.slideNext();
      bgSwiper.slideNext();
    };

    refs.likeBtn.addEventListener('click', handleLikeClick);

    async function handleLikeClick() {
      slideNext();
      const likedUserID = people[mainSwiper.realIndex];
      const { data } = await postLikedUser(likedUserID);
      const { matched } = data;
      console.log(likedUserID);
      console.log(people);
      if (matched) {
        PNotify.success({
          text: 'Congratulate with new matching!',
        });
      }
    }

    refs.nextBtn.addEventListener('click', handleNextClick);
    function handleNextClick() {
      slideNext();
    }
  };

  renderUserList();
}
