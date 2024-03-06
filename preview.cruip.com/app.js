$(document).ready(function(){       
    $('#reviews-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:3000,  
        autoplayHoverPause:false,
        margin: 24,
        responsive: {
            0: {
                items: 1,
                nav:false,
                margin: 0,
                dots: false,
            },
            768: {
                items: 2,
                dots: false,
            },
            1140: {
                items: 4,
                dots: false,
            }
        }
    });

});




