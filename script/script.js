// import { menu } from "../components/header-menu/header-menu.js";
// window.customElements.define('header-menu', menu);


//////////////////////////////////////////////////////////////////////////////////////


// document.addEventListener("DOMContentLoaded", () => {
//     // منو را از فایل HTML بارگذاری کنید
//     fetch("components/menu/menu.html")
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById("menu").innerHTML = data;
//             initMenu(); // اجرای تابع تنظیمات جاوااسکریپت بعد از اضافه شدن منو
//             console.log(document.getElementById("menu").innerHTML); // بررسی محتویات بارگذاری شده
//         })
//         .catch(error => console.error("Error loading menu:", error));
// });




///////////////////////////////////////////////////////////////////////////////////////////////

// slider

var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
  });
