// تابع بارگذاری محتوا
// fix menu
let top_head = document.querySelector(".top-head");
console.log(top_head)
document.addEventListener("scroll", () => {
    let scroll_position = window.scrollY;

    if (scroll_position > 300) {
        top_head.classList.add("scrolled"); 
        
    } else {
        top_head.classList.remove("scrolled"); 
       
    }
});


//////////////////////////////////////////////////////////////////////////////////////////
// mobile menu 

let menu_mobile = document.querySelector(".menu-mobile");
let toggle_menu = document.querySelector(".hamburger input"); // تغییر این خط
let backgrond_filter = document.querySelector(".backgrond-filter");
let times = document.querySelector(".times");
let flag = true;

function close_menu() {
    menu_mobile.style.transform = "translateX(320px)";
    document.body.classList.remove("non-scroll");
    backgrond_filter.style.opacity = "0";
    backgrond_filter.style.visibility = "hidden";
    toggle_menu.checked = false; // اضافه کردن این خط برای بستن حالت چک‌بوکس
    flag = true;
}

toggle_menu.addEventListener("change", () => { // تغییر رویداد به change
    if (toggle_menu.checked) {
        menu_mobile.style.transform = "translateX(0)";
        document.body.classList.add("non-scroll");
        backgrond_filter.style.opacity = "1";
        backgrond_filter.style.visibility = "visible";
        flag = false;
    } else {
        close_menu();
    }
});

times.addEventListener("click", () => {
   close_menu();
});

backgrond_filter.addEventListener("click", () => {
    close_menu();
});


////////////////////////////////////////////////////////////////////////////////////////////////////////
// جابه جا شدن صفحات
function loadContent(page) {
  close_menu()
  removeExistingAssets();
  fetch(`pages/${page}.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('main').innerHTML = data;

      addCSSFile(`styles/${page}/${page}.css`);
      addResponsiveFile(`styles/${page}/${page}-responsive.css`);
      addJSFile(`script/${page}/${page}.js`);

      initializeSlider(); // فراخوانی تابع برای راه‌اندازی مجدد اسلایدر
    })
    .catch(error => {
      document.getElementById('main').innerHTML = '<p>Error loading content. Please try again later.</p>';
      console.error('There was a problem with the fetch operation:', error);
    });
}
function addCSSFile(href) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.dataset.dynamic = 'true'; // برچسب‌گذاری برای شناسایی فایل‌های دینامیک
  document.head.appendChild(link);
}

function addResponsiveFile(href) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.dataset.dynamic = 'true'; // برچسب‌گذاری برای شناسایی فایل‌های دینامیک
  document.head.appendChild(link);
}

function addJSFile(src) {
  const script = document.createElement('script');
  script.src = src;
  script.dataset.dynamic = 'true'; // برچسب‌گذاری برای شناسایی فایل‌های دینامیک
  script.defer = true; // جلوگیری از بلاک شدن رندر صفحه
  document.body.appendChild(script);
}

function removeExistingAssets() {
  // حذف فایل‌های CSS
  const existingCSS = document.querySelectorAll('link[data-dynamic="true"]');
  existingCSS.forEach(link => link.remove());

  // حذف فایل‌های JS
  const existingJS = document.querySelectorAll('script[data-dynamic="true"]');
  existingJS.forEach(script => script.remove());
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////


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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////










