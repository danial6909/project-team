// تابع بارگذاری محتوا
function loadContent(page) {
  fetch(`pages/${page}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('main').innerHTML = data;
      initializeSlider(); // فراخوانی تابع برای راه‌اندازی مجدد اسلایدر
    })
    .catch(error => {
      document.getElementById('main').innerHTML = '<p>Error loading content. Please try again later.</p>';
      console.error('There was a problem with the fetch operation:', error);
    });
}

// تابع برای راه‌اندازی مجدد اسلایدر
function initializeSlider() {
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
}

// راه‌اندازی اسلایدر در بارگذاری اولیه صفحه
document.addEventListener("DOMContentLoaded", function() {
  initializeSlider(); // در بارگذاری اولیه نیز اسلایدر راه‌اندازی می‌شود
});



