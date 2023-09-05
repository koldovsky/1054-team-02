const navigationsBody = document.querySelector('.header__nav-wrapper');
const iconBurger = document.querySelector('.header__nav-burger');

const toggleActiveClass = () => {
  iconBurger.classList.toggle('active');
  navigationsBody.classList.toggle('active');
};

const removeActiveClass = () => {
  if (window.innerWidth >= 992) {
    navigationsBody.classList.remove('active');
  }
};

iconBurger.addEventListener('click', toggleActiveClass);
window.addEventListener('load', removeActiveClass);
window.addEventListener('resize', removeActiveClass);
