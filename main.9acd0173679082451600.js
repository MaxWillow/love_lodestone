(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/5V9":function(e,t,n){},"7hx4":function(e,t,n){"use strict";n.r(t);n("/5V9"),n("Muwe"),n("y89P"),n("QaLA");var o=n("vOsO"),r=n.n(o),a=n("dIfx");n("IlkV"),n("UOjr");function l(e){var t={isLogin:e.isLogin,token:e.token};localStorage.setItem("Login",JSON.stringify(t))}function i(){var e=localStorage.getItem("Login");return JSON.parse(e)}function s(){null===i()&&l({isLogin:!1})}s();i().isLogin,n("fp7Y");var c=n("czhI"),u=n.n(c);n("JBxO"),n("FdtR");n("eJct"),n("MQv6"),n("W62a"),n("KgNg"),n("FQ6o"),n("xFU+"),n("wcNg");var p={map:document.getElementById("map"),machPeopleUl:document.querySelector(".mach__people-ul"),body:document.querySelector("body"),exit:document.querySelector("body"),menu:document.querySelector(".js-menu"),likeBtn:document.querySelector(".choose-btn__like"),nextBtn:document.querySelector(".choose-btn__next"),form:document.querySelector(".form"),password:document.querySelector("#user-password"),userLogin:document.querySelector("#user-login"),userAge:document.querySelector("#user-age"),userTel:document.querySelector("#user-tel"),fields:document.querySelectorAll(".field"),inputLogin:document.querySelector("#form-input"),inputPassword:document.querySelector("#password")};n("mNaS");function d(e,t,n,o,r,a,l){try{var i=e[a](l),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(o,r)}s();var m=i().isLogin;n("hi3g"),n("lmye");s();var f=i().token;function g(e){return void 0===e&&(e=1),u.a.get("https://venify.herokuapp.com/user/list?pageNumber="+e,{headers:{authorization:f}})}function v(e){return u.a.post("https://venify.herokuapp.com/user/like",{id:e},{headers:{authorization:f}})}var y=n("crGA"),h=n.n(y),w=(n("2OED"),n("Y3Db"));function x(e,t,n,o,r,a,l){try{var i=e[a](l),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(o,r)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function l(e){x(a,o,r,l,i,"next",e)}function i(e){x(a,o,r,l,i,"throw",e)}l(void 0)}))}}s();var b=i().isLogin;n("lYjL"),n("RtS0"),n("x3Br"),n("aZFp"),n("3dw1");var L={center:{lat:50.466511,lng:30.627141},zoom:12,minZoom:5,zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,styles:[{elementType:"geometry",stylers:[{color:"#212121"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{elementType:"labels.text.stroke",stylers:[{color:"#212121"}]},{featureType:"administrative",elementType:"geometry",stylers:[{color:"#757575"}]},{featureType:"administrative.country",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#181818"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"poi.park",elementType:"labels.text.stroke",stylers:[{color:"#1b1b1b"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#2c2c2c"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#8a8a8a"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#373737"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#3c3c3c"}]},{featureType:"road.highway.controlled_access",elementType:"geometry",stylers:[{color:"#4e4e4e"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#3d3d3d"}]}]},T=n("jLpQ"),k=n.n(T),S=i().token,q=i().isLogin;function P(){if(q)return u.a.get("https://venify.herokuapp.com/user/mathchedList",{headers:{authorization:S}})}function I(e,t,n,o,r,a,l){try{var i=e[a](l),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(o,r)}s();var N=i().isLogin,A=function(){function e(e){var t=e.options,n=e.dom;this.options=t,this.dom=n}var t=e.prototype;return t.addMap=function(){this.map=new google.maps.Map(this.dom,this.options)},t.addMarker=function(e){var t=this;0!==e.length&&e.length>0&&e.forEach((function(e){var n=new google.maps.InfoWindow({content:'\n          <div class="mach__people-item">\n            <img class="mach__people-icon" src="'+e.image_list[0]+'" alt="">\n            <div class="mach__people-main">\n              <div class="mach__people-name">'+e.full_name+'</div>\n              <div class="mach__people-age">Age: '+e.age+'</div>\n              <div class="mach__people-cell">Cell: '+e.phone_number+"</div>\n            </div>\n          </div>\n          ",maxWidth:400}),o=new google.maps.Marker({position:e.geo_location,map:t.map,title:e.full_name,type:{icon:e.image_list[0]}});o.addListener("click",(function(){n.open(this.map,o)}))}))},e}();function M(){var e;return e=regeneratorRuntime.mark((function e(){var t,n,o,r,a,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("mapHTML"===p.body.id){e.next=2;break}return e.abrupt("return");case 2:if(N){e.next=5;break}return document.location.replace("/love_lodestone/login.html"),e.abrupt("return");case 5:return e.next=7,new A({dom:p.map,options:L});case 7:return t=e.sent,e.next=10,t.addMap();case 10:return e.next=12,P();case 12:return n=e.sent,o=n.data,r=o.filter((function(e){return e.geo_location.length>=1})).filter((function(e){return e.image_list.length>=1})),a=r.map((function(e){var t=e;return"string"==typeof e.geo_location&&(t=e.geo_location.split(", "),e.geo_location={lat:Number(t[0]),lng:Number(t[1])}),e.geo_location={lat:e.geo_location[0],lng:e.geo_location[1]},e})),l=function(e){var t=a.reduce((function(e,t){return t.geo_location={lat:t.geo_location.lat,lng:t.geo_location.lng},e+k()(t)}),"");e.innerHTML=t},e.next=19,l(p.machPeopleUl);case 19:return e.next=21,t.addMarker(a);case 21:p.machPeopleUl.addEventListener("click",(function(e){if("IMG"===e.target.nodeName){var n={lat:Number(e.target.dataset.lat),lng:Number(e.target.dataset.lng)};t.map.panTo(n)}})),new PerfectScrollbar(".section-scroll",{suppressScrollX:!0});case 23:case"end":return e.stop()}}),e)})),(M=function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function l(e){I(a,o,r,l,i,"next",e)}function i(e){I(a,o,r,l,i,"throw",e)}l(void 0)}))}).apply(this,arguments)}"mapHTML"!==p.body.id&&"MAIN"!==p.body.id||p.menu.addEventListener("click",(function(e){var t=e.target.closest(".js-likes"),n=e.target.closest(".js-peoples");e.target.closest(".js-exit").classList.contains("js-exit")&&(localStorage.removeItem("Login"),document.location.replace("/love_lodestone/login.html")),n.classList.contains("js-peoples")&&document.location.replace("/love_lodestone/index.html"),t.classList.contains("js-likes")&&document.location.replace("/love_lodestone/location-page.html")})),function(){if(document.querySelector("#MAIN"))if(b){a.a.defaults.styling="material",a.a.defaults.delay=3500;var e=1,t=[],n=function(e,t){var n=t.map((function(e){return h()(e.image_list[0])}));e.appendSlide([].concat(n))},o=function(e,t){var n=t.map((function(e){return e._id}));return console.log("userList",e),console.log("data",t),console.log("ids",n),[].concat(e,n)};(function(){var r=_(regeneratorRuntime.mark((function r(){var l,i,s,c,u,d,m,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return f=function(){0===i.length&&p.nextBtn.setAttribute("disabled",!0),u()},m=function(){return(m=_(regeneratorRuntime.mark((function e(){var n,o,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t[c.realIndex],console.log("mainSwiper.realIndex",c.realIndex),e.next=4,v(n);case 4:o=e.sent,r=o.data,l=r.matched,console.log("likedUserID",n),console.log("people",t),l&&a.a.success({text:"Congratulate with new matching!"}),u();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)},d=function(){return m.apply(this,arguments)},r.next=5,g();case 5:return l=r.sent,i=l.data,r.next=9,t=o(t,i);case 9:s=new w.a(".bg-swiper",{speed:400,slidesPerView:1,centeredSlides:!0,preventInteractionOnTransition:!0,pagination:{el:".swiper-pagination"}}),(c=new w.a(".main-swiper",{speed:400,slidesPerView:1,centeredSlides:!0,allowSlidePrev:!1,preventInteractionOnTransition:!0,pagination:{el:".swiper-pagination",nextButton:".swiper-button-next"},on:{init:function(){console.log("swiper initialized")}}})).on("slideChange",_(regeneratorRuntime.mark((function r(){var a,l,i,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=c.slides,l=c.activeIndex,console.log(a,l),console.log(c),!(a.length-l<=3)){r.next=12;break}return e+=1,r.next=7,g(e);case 7:i=r.sent,u=i.data,o(t,u),n(s,u),n(c,u);case 12:case"end":return r.stop()}}),r)})))),n(s,i),n(c,i),u=function(){c.slideNext(),s.slideNext()},p.likeBtn.addEventListener("click",d),p.nextBtn.addEventListener("click",f);case 17:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}})()()}else document.location.replace("/love_lodestone/login.html")}(),function(){M.apply(this,arguments)}(),function(){if(document.querySelector("#LOGINPAGE")){"LOGINPAGE"===p.body.id&&m&&document.location.replace("/love_lodestone/index.html");var e=document.querySelector(".regist-form");e&&(p.inputPassword.addEventListener("input",(function(e){e.target.value.length<8?e.target.classList.add("validate-error"):e.target.classList.remove("validate-error")})),e.addEventListener("submit",function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u.a.post("https://venify.herokuapp.com/user/login",{password:p.inputPassword.value,login:p.inputLogin.value});case 4:l({isLogin:!0,token:e.sent.data.token}),document.location.replace("/love_lodestone/index.html"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),p.inputPassword.classList.add("validate-error"),a.a.error({text:"Invalid login or password"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})),function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function l(e){d(a,o,r,l,i,"next",e)}function i(e){d(a,o,r,l,i,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}()))}}(),function(){if(document.querySelector("#ADDPHOTO")){r.a.autoDiscover=!1,r.a.prototype.defaultOptions.dictDefaultMessage="Drop your pictures to upload (up to 2 files)";var e=document.querySelector("#my-awesome-dropzone"),t=i().token,n=new r.a(e,{url:"https://venify.herokuapp.com/user/photos/upload",headers:{authorization:t},paramName:"file",maxFilesize:2,maxFiles:1});n.on("addedfile",(function(e){a.a.notice({text:"Added photo."})})),n.on("success",(function(e){a.a.notice({text:"Photo downloaded."}),window.location.replace("/love_lodestone/index.html")})),n.on("error",(function(e){t||(a.a.error({text:"User is not authenticated"}),this.on("complete",(function(e){this.removeAllFiles(!0)})))}))}}(),function(){if(document.querySelector("#REGISTRATION")){var e,t;(t={maximumAge:18e5},new Promise((function(e,n){navigator.geolocation.getCurrentPosition(e,n,t)}))).then((function(e){var t=e.coords;return[t.latitude,t.longitude]})).then((function(t){e=t})).catch((function(e){a.a.error("Нет прав доступа к геопозиции, регистрация не возможна.")}));var n={form:document.querySelector(".form"),password:document.querySelector("#user-password"),userLogin:document.querySelector("#user-login"),userAge:document.querySelector("#user-age"),userTel:document.querySelector("#user-tel"),fields:document.querySelectorAll(".field")},o="";n.userLogin.onblur=function(){n.userLogin.value.length<3?n.userLogin.classList.add("empty")||a.a.notice({text:"Name must contain at least 3 characters"}):n.userLogin.classList.remove("empty")},n.userTel.onblur=function(){10===n.userTel.value.length&&n.userTel.value.replace(/\D/g,"")?n.userTel.classList.remove("empty"):n.userTel.classList.add("empty")||a.a.notice({text:"Number must contain at least 10 symbols and only numbers"})},n.password.onblur=function(){n.password.value.length<8?n.password.classList.add("empty")||a.a.notice({text:"Password must contain at least 8 symbols "}):n.password.value.replace(/[^0-9]/g,"")&&n.password.value.replace(/[^a-zA-Z]/g,"")?n.password.classList.remove("empty"):n.password.classList.add("empty")||a.a.notice({text:"Password must contain at least one number or letter"})},n.form.addEventListener("submit",(function(t){t.preventDefault();for(var r=0;r<n.fields.length;r++)n.fields[r].value?n.userLogin.value.length<3?n.userLogin.classList.add("empty"):n.password.value.length<8?n.password.classList.add("empty"):n.fields[r].classList.remove("empty"):n.fields[r].classList.add("empty");o=document.querySelector('[name="radioGroupSex"]:checked'),u.a.post("https://venify.herokuapp.com/user/register",{password:n.password.value,login:n.userLogin.value,age:Number(n.userAge.value),phone_number:n.userTel.value,geo_location:e,gender:o.value}).then((function(e){l({isLogin:!0,token:e.data.token}),document.location.replace("/love_lodestone/upload-photo.html"),a.a.notice({text:"Registration success!"})})).catch((function(e){console.log(e)})),n.form.reset()}))}}()},FQ6o:function(e,t,n){},KgNg:function(e,t,n){},MQv6:function(e,t,n){},W62a:function(e,t,n){},crGA:function(e,t,n){var o=n("mp5j");e.exports=(o.default||o).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,o,r){return'<div class="swiper-slide">\r\n    <img src="'+e.escapeExpression(e.lambda(t,t))+'" class="swiper-slide__img" alt="user photo">\r\n</div>\r\n'},useData:!0})},eJct:function(e,t,n){},jLpQ:function(e,t,n){var o=n("mp5j");e.exports=(o.default||o).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,o,r){var a,l,i=e.lambda,s=e.escapeExpression,c=null!=t?t:e.nullContext||{},u=e.hooks.helperMissing;return'<li class="mach__people-li">\r\n    <div class="mach__people-item">\r\n        <img class="mach__people-icon" src="'+s(i(null!=(a=null!=t?t.image_list:t)?a[0]:a,t))+'" alt="icon" \r\n            data-lat="'+s(i(null!=(a=null!=t?t.geo_location:t)?a.lat:a,t))+'"\r\n            data-lng="'+s(i(null!=(a=null!=t?t.geo_location:t)?a.lng:a,t))+'">\r\n        <div class="mach__people-main">\r\n            <div class="mach__people-name">'+s("function"==typeof(l=null!=(l=n.full_name||(null!=t?t.full_name:t))?l:u)?l.call(c,{name:"full_name",hash:{},data:r,loc:{start:{line:7,column:43},end:{line:7,column:56}}}):l)+'</div>\r\n            <div class="mach__people-age">Age: '+s("function"==typeof(l=null!=(l=n.age||(null!=t?t.age:t))?l:u)?l.call(c,{name:"age",hash:{},data:r,loc:{start:{line:8,column:47},end:{line:8,column:54}}}):l)+'</div>\r\n            <div class="mach__people-cell">Cell: '+s("function"==typeof(l=null!=(l=n.phone_number||(null!=t?t.phone_number:t))?l:u)?l.call(c,{name:"phone_number",hash:{},data:r,loc:{start:{line:9,column:49},end:{line:9,column:65}}}):l)+"</div>\r\n        </div>\r\n    </div>\r\n</li>"},useData:!0})},"xFU+":function(e,t,n){}},[["7hx4",1,2]]]);
//# sourceMappingURL=main.9acd0173679082451600.js.map