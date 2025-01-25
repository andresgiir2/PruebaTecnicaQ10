(function ($) {
    "use strict";

    $(document).ready(function(){
        // Cuando se haga clic en un enlace de la navbar
        $('.navbar-nav .nav-link').click(function(){
            // Elimina la clase active de todos los enlaces
            $('.navbar-nav .nav-link').removeClass('active');
            
            // Agrega la clase active al enlace que se clickeó
            $(this).addClass('active');
        });
    });
    // boton para voler al inicio de la pagina
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Contador para los datos
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // carrusel de los precios para asociarse
    $(".pricing-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        loop: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
    
    //  Desplazarse suavemente cuando le den click a cualquier nav que redirige a la seccion
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        
        
        var targetId = $(this).attr('href').substring(1);
        var targetElement = $('#' + targetId);
        
        if (targetElement.length) {
            // Desplazamiento suave al destino
            $('html, body').animate({
                scrollTop: targetElement.offset().top - 70 // Ajusta según la altura del navbar
            }, 1500, 'easeInOutExpo');
        }
    });
    
})(jQuery);
