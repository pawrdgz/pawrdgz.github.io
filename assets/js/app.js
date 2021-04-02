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


// Esto es inicializar el fade-in 


AOS.init();

// Esto es el carroussel 

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

    $('.footer').scrollToFixed( {
        bottom: 0,
        limit: $('.footer').offset().top
    });

});
