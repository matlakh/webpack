import '../css/normalize.css';
import '../css/jquery.fancybox.min.css';
import '../css/jquery.formstyler.css';
import '../css/slick.css';
import '../css/fonts.css';
import '../css/style.css';
import '../css/media.css';

import '../img/about-first.png';
import '../img/about-second.png';
import '../img/about-third.png';
import '../img/logo.png';
import '../img/news-first.jpg';
import '../img/news-second.jpg';



$(function(){

    $('.slider__inner, .news__slider-inner').slick({
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
      infinite: false
    });
  
    $('select').styler();
  
    $('.header__btn-menu').on('click', function(){
      $('.menu ul').slideToggle();
    });
  
  });

let phoneFields = document.querySelectorAll(".phoneInput")

let im = new Inputmask("+38 (099) 999 99 99");
im.mask(phoneFields);

new JustValidate('.js-form', {
    rules: {
        email:{
            required : false,
            email : true
        },
        name:{
            required: true,
            minLength: 2
        },
        phone:{
            required: true
        },
    },
    messages:{
        name:{
            minLength: 'It`s more than 1 symbol!'
        },
        email:{
            email: 'Your email is invalid!'
   
        },
        phone:{
            required: 'Enter your real phone!'
        },
    },
    submitHandler: function(form){
       let xhr = new XMLHttpRequest();

       xhr.open("POST", "mail.php", true);

       let formData = new FormData(form);

       xhr.addEventListener("load", function(){
            if (xhr.readyState === 4){
                switch (xhr.status){
                    case 200:
                        console.log("OK!!!");
                        break;
                    case 404:
                        console.log("You are looser!");
                        break;
                    default:
                        console.log(":(");
                        break;
                }
            }
    });
    xhr.send(formData);
    },
});