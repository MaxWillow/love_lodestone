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
    return;
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
    await (people = addUsers(people, data));
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
      console.log(slides, activeIndex);
      console.log(mainSwiper);

      if (slides.length - activeIndex <= 3) {
        pageNumber += 1;
        const { data } = await getUserList(pageNumber);
        // console.dir(data);
        addUsers(people, data);
        addSlidesToSlider(bgSwiper, data);
        addSlidesToSlider(mainSwiper, data);
      }
    });

    addSlidesToSlider(bgSwiper, data);
    addSlidesToSlider(mainSwiper, data);

    const slideNext = () => {
      mainSwiper.slideNext();
      bgSwiper.slideNext();
    };

    refs.likeBtn.addEventListener('click', handleLikeClick);

    async function handleLikeClick() {
      const likedUserID = people[mainSwiper.realIndex];
      console.log('mainSwiper.realIndex', mainSwiper.realIndex)
      const { data } = await postLikedUser(likedUserID);
      const { matched } = data;
      console.log('likedUserID', likedUserID);
      console.log('people', people);


      if (matched) {
        PNotify.success({
          text: 'Congratulate with new matching!',
        });
      }

      slideNext();
    }

    refs.nextBtn.addEventListener('click', handleNextClick);
    function handleNextClick() {
      if (data.length === 0) {
        refs.nextBtn.setAttribute('disabled', true)
      }
      slideNext();
    }
  };

  renderUserList();
}
