// const template = document.createElement("template");
// template.innerHTML = `
//   <link rel="stylesheet" href="/components/header-menu/header-menu.js">
//  <div class="top-head">
//             <div class="head-right">
//                 <img src="./assets/images/logo/photo_2024-10-16_23-47-24.jpg" alt="" class="logo-site">
//                 <div class="logo">فارسه</div>
//             </div>
        
//             <div class="head-left">
//                 <div class="head-menu">
//                     <ul class="menu">
//                         <li class="item">
//                             <a href="#" class="item-link">خانه</a>
//                             <div class="line"></div>
//                         </li>
//                         <li class="item">
//                             <a href="#" class="item-link">نمونه کارها</a>
//                             <div class="line"></div>
//                         </li>
//                         <li class="item">
//                             <a href="#" class="item-link">درباره ما</a>
//                             <div class="line"></div>
//                         </li>
//                         <li class="item">
//                             <a href="#" class="item-link">تماس با ما</a>
//                             <div class="line"></div>
//                         </li>
//                     </ul>
//                 </div>
        
//                 <div class="head-search-box">
//                     <div class="container-search-box">
//                         <input type="text" placeholder="جستجو کنید" name="text" class="search-box">
//                         <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
//                                 fill-rule="evenodd"></path>
//                         </svg>
//                     </div>
//                 </div>
//             </div>
        
//             <label class="hamburger">
//                 <input type="checkbox">
//                 <svg viewBox="0 0 32 32">
//                     <path class="linee line-top-bottom"
//                         d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
//                     </path>
//                     <path class="linee" d="M7 16 27 16"></path>
//                 </svg>
//             </label>
        
//             <div class="menu-mobile">
//                 <div class="top-head">
//                     <div class="times">
//                         <i class="fa fa-times times" aria-hidden="true"></i>
//                     </div>
//                     <div class="head-right">
//                         <img src="./assets/images/logo/photo_2024-10-16_23-47-24.jpg" alt="" class="logo-site">
//                         <div class="logo">فارسه</div>
//                     </div>
//                 </div>
        
//                 <div class="container-search-mobile">
//                     <div class="search-box-mobile">
//                         <input type="text" placeholder="جستجو ..." name="text" class="search-mobile">
//                         <div class="line-search"></div>
//                         <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
//                                 fill-rule="evenodd"></path>
//                         </svg>
//                     </div>
//                 </div>
        
//                 <ul class="menu-items">
//                     <li class="menu-item"><a href="#" class="item-link">خانه</a></li>
//                     <li class="menu-item"><a href="#" class="item-link">نمونه کارها</a></li>
//                     <li class="menu-item"><a href="#" class="item-link">درباره ما</a></li>
//                     <li class="menu-item"><a href="#" class="item-link">تماس با ما</a></li>
//                 </ul>
        
//                 <div class="social-links">
//                     <ul class="list-wrap">
//                         <li><a href="#"><i class="share fab fa-facebook-f"></i></a></li>
//                         <li><a href="#"><i class="share fab fa-twitter"></i></a></li>
//                         <li><a href="#"><i class="share fab fa-instagram"></i></a></li>
//                         <li><a href="#"><i class="share fab fa-linkedin-in"></i></a></li>
//                         <li><a href="#"><i class="share fab fa-youtube"></i></a></li>
//                     </ul>
//                 </div>
//             </div>
        
//             <div class="backgrond-filter"></div>
//         </div>
// `;



// export class menu extends HTMLElement {
//     constructor(){
//         super();
//         this.attachShadow({mode: "open"});
//         this.shadowRoot.appendChild(template.content.cloneNode(true));
//     }

//     connectedCallback() {
//         console.log(this.shadowRoot);

//     //     this.shadowRoot.querySelector('.heading').innerHTML = this.getAttribute('title-card')
//     //     this.shadowRoot.querySelector('.card img').setAttribute('src',this.getAttribute('src-image')) 
//     }

// }