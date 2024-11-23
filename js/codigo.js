
let menuFloat = document.querySelector(".menu");
let navFloat = document.querySelector(".nav");


window.addEventListener('scroll', function () {
    if (scrollY > 0){
        console.log("es mayor");
    } else{
        console.log("es menor");
    }
});


let enlaces= document.querySelector(".header__menu__center__enlaces");
let btn= document.querySelector(".header__menu__center--btn");

btn.addEventListener('click', function(abrir){
    //console.log(abrir);
    abrir.preventDefault();
    enlaces.classList.toggle('active');
})
