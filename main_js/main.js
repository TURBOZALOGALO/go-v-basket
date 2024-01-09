// Инициализация переменных
let btns = document.querySelectorAll('.preparation__item');
let mobileBtn = document.querySelector('.menu__btn');
let mobileMenu = document.querySelector('.menu__mobile');
let logo = document.querySelector('.logo');
let logoMobile = document.querySelector('.logo-mobile');
let headerInner = document.querySelector('.header__inner');
let closeMobileBtn = document.querySelector('.menu__mobile-close-btn');

// Раскрытие кнопок помощи
btns.forEach((btn) => {
  btn.addEventListener('click', function() {
    btn.classList.toggle('active');
    const additionalText = btn.querySelector('.preparation__item-btn--active');
    
    if (!btn.classList.contains('active')) {
      additionalText.classList.add('hidden');
    }
    
    btn.addEventListener('transitionend', function() {
      if (btn.classList.contains('active')) {
        additionalText.classList.remove('hidden');
      }
    });
  });
});


// Открытие мобильного меню
mobileBtn.addEventListener('click', function() {
  mobileMenu.style.display = "flex";
  logo.style.display = "none";
  logoMobile.style.display = "flex";
  mobileBtn.style.display = "none";
  headerInner.style.justifyContent = "center";
});

// Закрытие мобильного меню
closeMobileBtn.addEventListener('click', function() {
  mobileMenu.style.display = "none";
  logo.style.display = "block";
  logoMobile.style.display = "none";
  mobileBtn.style.display = "flex";
  headerInner.style.justifyContent = "space-between";
});