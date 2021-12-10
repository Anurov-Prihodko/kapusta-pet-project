import React from 'react';
import ReactDOM from 'react-dom';

const elem1 = <span>Hello</span>;
const elem2 = <span> world</span>;

const element = (
  <div>
    {elem1}
    {elem2}
  </div>
);

console.log(element);

ReactDOM.render(
  <React.StrictMode>{element}</React.StrictMode>,
  document.getElementById('root'),
);

//  <header class="header-main">
//       <div class="main-nav container">
//         <nav class="navigation">
//           <a class="logo-main link" href="./">
//             <span class="logo-blue">Web</span>Studio
//           </a>

//           <ul class="site-nav">
//             <li class="site-nav-list list">
//               <a class="site-nav-link link strip" href="./index.html">
//                 <span class="studio-blue">Студия</span>
//               </a>
//             </li>
//             <li class="site-nav-list list">
//               <a class="site-nav-link link" href="./portfolio.html"
//                 >Портфолио</a
//               >
//             </li>
//             <li class="site-nav-list list">
//               <a class="site-nav-link link" href="">Контакты</a>
//             </li>
//           </ul>
//         </nav>

//         <button type="button" class="burger-btn" data-menu-button>
//           <svg class="burger-icon">
//             <use href="./img/sprite.svg#burger-icon"></use>
//           </svg>
//         </button>

//         <ul class="contacts">
//           <li class="contacts-list list">
//             <a class="contacts-link link" href="mailto:info@devstudio.com">
//               <svg class="contacts-icon mail-icon">
//                 <use href="./img/sprite.svg#icon-mail-icon"></use>
//               </svg>
//               info@devstudio.com
//             </a>
//           </li>
//           <li class="contacts-list list">
//             <a class="contacts-link link" href="tel:+380961111111">
//               <svg class="contacts-icon tel-icon">
//                 <use href="./img/sprite.svg#icon-telephone-icon"></use>
//               </svg>
//               +38 096 111 11 11
//             </a>
//           </li>
//         </ul>
//       </div>

//       <!-- Мобильное меню -->
//       <div class="mobile-menu" data-menu>
//         <button type="button" class="mobile-menu-close-btn" data-menu-close>
//           <svg class="mobile-menu-close-icon">
//             <use href="./img/sprite.svg#mobile-menu-close-btn"></use>
//           </svg>
//         </button>

//         <div class="mobile-menu-flex">
//           <ul class="mobile-menu-nav">
//             <li class="mobile-menu-nav-item list">
//               <a class="mobile-menu-nav-link link" href="./index.html">
//                 <span class="studio-blue">Студия</span>
//               </a>
//             </li>
//             <li class="mobile-menu-nav-item list">
//               <a class="mobile-menu-nav-link link" href="./portfolio.html">
//                 Портфолио
//               </a>
//             </li>
//             <li class="mobile-menu-nav-item list">
//               <a class="mobile-menu-nav-link link" href=""> Контакты </a>
//             </li>
//           </ul>

//           <ul class="mobile-contacts">
//             <li class="mobile-contacts-list list">
//               <a class="mobile-contacts-tel-link link" href="tel:+380961111111">
//                 +38 096 111 11 11
//               </a>
//             </li>
//             <li class="mobile-contacts-list list">
//               <a
//                 class="mobile-contacts-link link"
//                 href="mailto:info@devstudio.com"
//               >
//                 info@devstudio.com
//               </a>
//             </li>
//           </ul>

//           <ul class="mobile-social">
//             <li class="mobile-social-list list">
//               <a href="" class="mobile-social-link padding-left link">
//                 Instagram
//               </a>
//             </li>
//             <li class="mobile-social-list list">
//               <a href="" class="mobile-social-link link"> Twitter </a>
//             </li>
//             <li class="mobile-social-list list">
//               <a href="" class="mobile-social-link link"> Facebook </a>
//             </li>
//             <li class="mobile-social-list list">
//               <a href="" class="mobile-social-link link"> LinkedIn </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
