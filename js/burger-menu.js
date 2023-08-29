(function () {
    const iconBurger = document.querySelector('.header__nav-burger');
    const navigationsBody = document.querySelector('.header__nav-wrapper');
  iconBurger.addEventListener('click', function (e) {
      iconBurger.classList.toggle('active');
      navigationsBody.classList.toggle('active');
  });
})();
