(function () {
    'use strict';
}());

window.onload = function(){
    addMenuClickHandler();
}

const addMenuClickHandler = () => {
    document.querySelector('.menu').addEventListener('click', (event) => {
        if(event.target.classList.contains('menu__link')){
            removeMenuLinkActive();
            addMenuLinkActive(event.target);
        }
    })
}

const removeMenuLinkActive = () => {
    document.querySelectorAll('.menu__link').forEach( el => {
        el.classList.remove('menu__link_active');
    })
}

const addMenuLinkActive = (target) => {
    target.classList.add('menu__link_active')
}


// slider
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующий слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//рамка вокруг картинок
const PICT = document.getElementById('pictures'); 
PICT.addEventListener('click', (event) => {
PICT.querySelectorAll('img').forEach(el => el.classList.remove('portfolio__img_active'));
event.target.classList.add('portfolio__img_active');
});

function func(){ //рандом картинок в галерее
    var a, b, c, d, e, f;
    f = document.getElementById("pictures").getElementsByTagName("img");
    b = a = f.length;
    e = [];
    while(a--){e.push(f[a].src)};
    a = b;
    while(a--){
    c = Math.floor(Math.random()*(a+1));
    d = e[c];
    e[c] = e[a];
    e[a] = d};
    a = b;
    while(a--){f[a].src =e[a]};
    };

const TAGS = document.getElementById('tags'); //активные пункты портфолио
    TAGS.addEventListener('click', (event) => {
    TAGS.querySelectorAll('button').forEach(el => el.classList.remove('tags_active'));
    event.target.classList.add('tags_active');
    });

    function validate_form(){ //валидация формы
        //name и email в переменные x и y
        var x = document.forms["form"]["name"].value;
        var y = document.forms["form"]["email"].value;
        //name пустой не отправит формы
        if (x.length==0){
        return false;
        }
        //email пустой не отправит формы
        if (y.length==0){
        return false;
        }
        //Проверим содержит ли значение введенное в поле email символы @ и .
        at = y.indexOf("@");
        dot = y.indexOf(".");
        //Если поле не содержит эти символы знач email введен не верно
        if (at<1 || dot <1){
        return false;
        }
         else {
        const SUBMIT = document.getElementById('submit'); // отправка формы subject и describe
        SUBMIT.addEventListener('click', () => {
        const subject = document.getElementById('subject').value.toString();
        if (document.getElementById("subject").value == ''){
        document.getElementById('topic').innerText="Без темы";}
        else {
        document.getElementById('topic').innerText=subject;}
      
        const describe = document.getElementById('describe').value.toString();
        if (document.getElementById("describe").value == ''){
          document.getElementById('description').innerText="Без описания";}
          else {
        document.getElementById('description').innerText=describe;}
        document.getElementById('popup').classList.remove('hidden_message');
          });}
        }
      
      const CLOSE = document.getElementById('close_button'); //закрыть окно
      CLOSE.addEventListener('click', () => {
        document.getElementById('topic').innerText="";
        document.getElementById('description').innerText="";
        document.getElementById('popup').classList.add('hidden_message');
      });
