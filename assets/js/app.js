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

