//navbar

const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.h-mobile-nav");

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".h-mobile-nav__menu .h-mobile-nav__close");
const mobileMenuContainer = document.querySelector(".h-mobile-nav__menu");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60){
    nav.classList.add("scrolled");
    mobileNav.classList.add("scrolled");
  }else{
    nav.classList.remove("scrolled");
    mobileNav.classList.remove("scrolled");
  }
})


menuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("active"); 
});
