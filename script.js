//=============================================================
// ================== функционал бургер меню ==================
const iconMenu = document.querySelector('.burger-icon');
const menuBoody = document.querySelector('.nav-link');
const menuLinks = document.querySelectorAll('.link');
const active = document.querySelector('._active');

 

if(iconMenu) {
    // по нажатию на кнопку меню
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBoody.classList.toggle('_active');
    });
    // если нажал на ссылку в мобильном меню
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", function(e) {
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBoody.classList.remove('_active');
            }
        })
    });
    // если нажал вне мобильного меню
    window.addEventListener('click', (e) => {
        const target = e.target;
        if ( !target.closest('.nav-link') && !target.closest('.burger-icon') && menuBoody.classList.contains('_active')) {
            menuBoody.classList.remove('_active');
            iconMenu.classList.remove('_active');
            document.body.classList.remove('_lock');
        }            
    })    
}

//=================== POP UP ===================    

const headerButton = document.querySelector('.btn-green'); // кнопка Login
const accountButton = document.querySelector('.item-account'); // Account в бургере
const popUpActive = 'login__popup-active'; // переделка Register в Login
const popUp = document.querySelector('.pop-up-body'); // попап
const popUpClick = document.querySelector('.registr-url'); // ссылка регистр
const popupTitle = document.querySelector('.pop-up-heading'); // попап заголовок
const buttonSignText = document.querySelector('.buttton-sign-text'); // текст на кнопке sign In
const popupText = document.querySelector('.registr-question'); // строка Dont hade an account
const loginButton = document.querySelector('.sign-btn'); // кнопка Sing In
const popUpShadow = document.querySelector('.body__shadow'); // темный фон попапа


const loginWingow = { // строки для замены в Login
    title: "Login to your account",
    button: "Sign In",
    account: "Don't have an account?",
    link: "Reginster"
}

const createWindow = {
    title: "Create account",
    button: "Sign Up",
    account: "Already have an account?",
    link: "Log In"
}

function makePopUpVisible(element) { // функция открывает Popup
    menuBoody.classList.remove('_active'); // закрываем бургер
    popUp.classList.remove(popUpActive); // открываем скрытое от Registr
    popupTitle.innerHTML = loginWingow.title; // возвращаем надписи Login
    buttonSignText.innerHTML = loginWingow.button; // если было закрыто окно Reginsrt
    popupText.innerHTML = loginWingow.account; 
    popUpClick.innerHTML = loginWingow.link; 
    
    element.stopPropagation(); // останавливаем всплытие
    
    console.log('popup открылся');
    popUp.classList.toggle('login__popup-visible'); // открываем popup
    popUpShadow.classList.add('body__shadow-active');

    document.body.style.overflow = 'hidden'; // блок скролла
   
}

function makePopUpInvisible(event) { // функция спрятать попап
    let target = event.target; // определяем цель клика
    let popupActive = popUp == target || popUp.contains(target); // уточняем цель или дочерние элементы
    // если попап открыт и клик по нему
    if (popUp.classList.contains('login__popup-visible') && !popupActive) {
        popUp.classList.remove('login__popup-visible'); // скрываем папап
    popUpShadow.classList.remove('body__shadow-active');

        document.body.style.overflow = ''; // убираем блок скролла
    }
}

function changePopUpWindow(event) { // функция изменения окна Register / Login
    // определяем переменную тернарным оператором в зависимости от открытого окна
    let changeWords = (event.target.innerHTML != "Reginster")?loginWingow : createWindow;
    popUp.classList.toggle(popUpActive); // включаем / отключаем элементы
    popupTitle.innerHTML = changeWords.title; // возвращаем надписи Login
    buttonSignText.innerHTML = changeWords.button;
    popupText.innerHTML = changeWords.account;
    popUpClick.innerHTML = changeWords.link;
}

function alertLoginPassword() { // функция алерта для подтверждения логина и пароля
    let loginValue = document.getElementById('login').value; // определяем значение логина
    let passwordValue = document.getElementById('password').value; // определяем значение пароля
    alert(`Login: ${loginValue}\nPassword: ${passwordValue}`); // выводим алерт
}

// навешиваем прослушку и запускаем функционал
headerButton.addEventListener('click', makePopUpVisible); // на кнопку Login
accountButton.addEventListener('click', makePopUpVisible); // на строку Account в бургере
popUpClick.addEventListener('click', changePopUpWindow); // На ссылку Registr
loginButton.addEventListener('click', alertLoginPassword); // на кнопку Sign In
document.addEventListener('click', makePopUpInvisible); // на все остальное для закрытыя попап


// ============== СЛАЙДЕР ===============
// 

const slider = document.querySelector('.pic-block-slader');

const images = document.querySelectorAll('.destin-foto');

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const item0 = document.querySelector('#item-0');
const item1 = document.querySelector('#item-1');
const item2 = document.querySelector('#item-2');
const item3 = document.querySelector('#item-3');
const item4 = document.querySelector('#item-4');


const sliderItem = document.querySelectorAll('.circle-blk');

const moveLeft = () => { //функция анимации влево
    slider.classList.add('transition-left');
    leftArrow.removeEventListener('click', moveLeft);
    rightArrow.removeEventListener('click', moveRight);
    itemLeft(); 
}

const moveRight = () => { //функция анимации вправо
    slider.classList.add('transition-right');
    rightArrow.removeEventListener('click', moveRight);
    leftArrow.removeEventListener('click', moveLeft);
    itemRight(); 
}

// меняем цвет кружочков:
function itemLeft() { // при сдвиге влево
    console.log('itemLeft');
    for (let i = 0; i < sliderItem.length; i++) { // цикл сдвига от количества кружков
    // выбираем текущий активный и в зависимости от положения навешиваем активный на следующий кружок
        console.log(sliderItem[i]);
        if(sliderItem[i] == document.querySelector('.slider-item-active')) {
            if (i == 0) {
                sliderItem[0].classList.remove('slider-item-active');
                sliderItem[2].classList.add('slider-item-active');
                return
            } else if (i == 1) {
                sliderItem[1].classList.remove('slider-item-active');
                sliderItem[0].classList.add('slider-item-active');
                return
            } else {
                sliderItem[2].classList.remove('slider-item-active');
                sliderItem[1].classList.add('slider-item-active');
                return
            }
        }
    }
}

function itemRight() { // при сдвиге влево
    console.log('testRight');
    for (let i = 0; i < sliderItem.length; i++) { // цикл сдвига от количества кружков
    // выбираем текущий активный и в зависимости от положения навешиваем активный на следующий кружок
        if(sliderItem[i] == document.querySelector('.slider-item-active')) {
            if (i == 0) {
                
                sliderItem[0].classList.remove('slider-item-active');
                sliderItem[1].classList.add('slider-item-active');
                return
            } else if (i == 1) {
                console.log('itemRight');
                sliderItem[1].classList.remove('slider-item-active');
                sliderItem[2].classList.add('slider-item-active');
                return
            } else {
                sliderItem[2].classList.remove('slider-item-active');
                sliderItem[0].classList.add('slider-item-active');
                return
            }
        }
    }
}

// навешиваем прослушку и запускаем функции:
leftArrow.addEventListener('click', moveLeft); // на стрелки на мобильном
rightArrow.addEventListener('click', moveRight);
item1.addEventListener('click', moveLeft); // на слайды в десктопе
item3.addEventListener('click', moveRight);
// рaбота слайдера, перестановка слайдтов после сдвига
slider.addEventListener('animationend', (animation) => {
    let itemBox = item2.innerHTML;
    if (animation.animationName === 'move-left') {
        slider.classList.remove('transition-left');//заканчиваем анимацию
        item2.innerHTML = item1.innerHTML;
        item1.innerHTML = item0.innerHTML;
        item3.innerHTML = itemBox;
        item0.innerHTML = itemBox;
        item4.innerHTML = item1.innerHTML;

    } else {// была анимация в право
        slider.classList.remove('transition-right');//заканчиваем анимацию
        item2.innerHTML = item3.innerHTML;
        item3.innerHTML = item4.innerHTML;
        item1.innerHTML = itemBox;
        item4.innerHTML = itemBox;
        item0.innerHTML = item3.innerHTML;
    }
    leftArrow.addEventListener('click', moveLeft);
    rightArrow.addEventListener('click', moveRight);

    // сдвиг стартового слайда на десктопе

    const isMobile = () => document.documentElement.clientWidth > 390;

    let lastIsMobile = isMobile();
    if (lastIsMobile === true) {
        moveRight;
    }

    // переключение на ресайзе

    const switchSize = () => {
        if (isMobile() === lastIsMobile) return;
        lastIsMobile = isMobile();
        if (lastIsMobile === true) {
            moveRight();
        } else {
            moveLeft();
        }
    }

    window.addEventListener('resize', switchSize);
});