// Flecha que te redirige al top 
var $arrow = $("#arrowbottom a");
$("#arrowbottom").on("click", function() {
$("body,html").animate({
    scrollTop: 0
}, 1250)
})

// Flecha que dirige hacia abajo 

var $arrow = $("#arrowtop a");
$("#arrowtop").on("click", function() {
$("body,html").animate({
    scrollTop: 1400
}, 1300)
})


// Inicializar el fade-in 

AOS.init();

// Menu open

$(document).ready(function () {
    var menuToggle = $('.js-menu-toggle');

    menuToggle.click(function (){
       $('html').toggleClass('menu-is-open');
    })

    });


// Carroussel 

new Splide('.splide', {
    type: 'loop',
    autoWidth: true,
    gap: '8.4rem',
    focus: 'center'
}).mount();


// Intento de menú sticky

$(document).ready(function() {

    // Dock the header to the top of the window when scrolled past the banner.
    // This is the default behavior.

    $('.menu').scrollToFixed( 
        {
            marginTop:500
        }
     );


    // Dock the footer to the bottom of the page, but scroll up to reveal more
    // content if the page is scrolled far enough.

    /*
    $('.footer').scrollToFixed( {
        bottom: 0,
        limit: $('.footer').offset().top
    });
    */
});


// detectar dónde está el menú

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll <2000) {
        $(".nav-item-projects").addClass("menu-is-active");
    }  
    
    else {
        $(".nav-item-projects").removeClass("menu-is-active");
    } 

});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if ((scroll >=2000) && (scroll <=3000)) {
        $(".nav-item-about").addClass("menu-is-active");
    }  

    else {
        $(".nav-item-about").removeClass("menu-is-active");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >3000){
        $(".nav-item-contact").addClass("menu-is-active");
    }  
    
    else {
        $(".nav-item-contact").removeClass("menu-is-active");
    } 
});

// typed

var typed = new Typed('.billboard_title_invert', {
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

