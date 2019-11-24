import "../css/styles-login.css";
import "../js/validation";
import "../css/mapStyles.css";
import "../css/header.css";
import "../css/footer.css";
import "../css/general.css";
import "../css/main_screen.css";
import { loginLauncher } from "./login";
import { createSwiper } from "./swiper";
import { initMap } from "./map.js";

createSwiper();
initMap();
loginLauncher();
