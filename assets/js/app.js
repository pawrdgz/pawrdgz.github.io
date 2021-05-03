// Flecha que dirige hacia abajo 

$("#arrowtop").on("click", function() {
    $("body,html").animate({
        scrollTop: $("#projects").position().top
    }, 1300)
    })

// Flecha que dirige hacia top     

$("#arrowbottom").on("click", function() {
    $("body,html").animate({
        scrollTop: 0
    }, 1250)
    })

// Inicializar el fade-in 

AOS.init();


// Carrusel 

new Splide('.splide', {
    type: 'loop',
    autoWidth: true,
    gap: '8.4rem',
    focus: 'center'
    }).mount();


// Menu open

$(document).ready(function () {
    var menuToggle = $('.js-menu-toggle');

    menuToggle.click(function (){
       $('html').toggleClass('menu-is-open');
    })




// typed

new Typed('.billboard_title_invert', {
    strings: ['Tiramisu enjoyer','The Batman', 'UX Designer'],
    typeSpeed: 50,
    backSpeed: 40,
    smartBackspace: true,
    });


// smooth movement entre a en one page
  
  $('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });


    });


// detectar dónde está el menú

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).innerHeight();
    var projectsTop = $("#projects").position().top;
    var aboutTop = $("#about").position().top;
    var contactTop = $("#contact").position().top;
    var menuTop = $(".menu").position().top;
    var menuHeight = $(".menu").height();
    var menuRealHeight = $(".menu").outerHeight(true);
    var menuFixed = scroll + windowHeight - menuRealHeight;

    if (menuFixed >= menuTop) {
        $(".menu").addClass("is-fixed");
        $(".menu").css({height: menuHeight});
    } else {
        $(".menu").removeClass("is-fixed");
        $(".menu").css({height: ""});
    }




    if (scroll >= projectsTop && scroll < aboutTop) {
        $(".nav-item").removeClass("menu-is-active");
        $(".nav-item-projects").addClass("menu-is-active");
    }   else if (scroll >= aboutTop && scroll < contactTop) {
        $(".nav-item").removeClass("menu-is-active");
        $(".nav-item-about").addClass("menu-is-active");
    }   else if (scroll >= contactTop) {
        $(".nav-item").removeClass("menu-is-active");
        $(".nav-item-contact").addClass("menu-is-active");
    }   else {
        $(".nav-item").removeClass("menu-is-active");
    }

});



