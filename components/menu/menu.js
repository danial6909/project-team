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








