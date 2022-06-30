var mainNav = document.querySelector('.navbar');
var branding = document.querySelector('.navbar .navbar-brand .img');

window.onscroll = function() {
  windowScroll();
};

function windowScroll() {
  mainNav.classList.toggle("test-1", mainNav.scrollTop > 50 || document.documentElement.scrollTop > 50);
  
  branding.classList.toggle("test-2", branding.scrollTop > 50 || document.documentElement.scrollTop > 50);
}