const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector('#nav-menu')
// (function() {
//   var navMenu = document.getElementById('nav-menu');
//   if (window.innerWidth < 1024) {
//     navMenu.classList.add('hidden');
//   } else {
//     navMenu.classList.remove('hidden');
//   }
// })();

hamburger.addEventListener("click", () => {     
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});


window.onscroll = function() {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
  
    if (window.scrollY > fixedNav) {
      header.classList.add("fixed-nav");
    } else {
      header.classList.remove("fixed-nav");
    }
  };
  


