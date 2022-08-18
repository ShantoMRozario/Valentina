// preloading

const preloader = document.querySelector('.preloader');

window.addEventListener('load',function () {

    setTimeout(function(){

        preloader.style.display = 'none';

    },1000)
    
})

// Sticky_Menu

let stickymenu = document.querySelector('#navbar');
let scrolltop = document.querySelector('.top');
window.addEventListener('scroll',function(){
    var sticky = window.scrollY;

    if (sticky > 100) {
        stickymenu.classList.add('stickymenu')
        scrolltop.classList.add('top_btn_show')
        
    } else {
        stickymenu.classList.remove('stickymenu')
        scrolltop.classList.remove('top_btn_show')
    }
})