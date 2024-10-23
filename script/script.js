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
  const swiper = new Swiper('.mySwiper', {
    speed: 800,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    spaceBetween: 110,
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



