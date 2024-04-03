console.log('loading index.js file...')
function initSlider() {
    $('#main_content').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 920,
                settings: "unslick"
            }
        ]
    });
}
  
initSlider();

// fancybox init
Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
    
    Toolbar: {
        display: {
        left: ['close'],
        middle: [],
        right: [],
        },
    },
    
    Images: {
        zoom: false,
    },
    
    Thumbs: {
        type: 'classic',
    },
    
    Carousel: {
        transition: false,
        friction: 0,
    },
    
    on: {
        'Carousel.ready Carousel.change': (fancybox) => {
        fancybox.container.style.setProperty(
            '--bg-image',
            `url("${fancybox.getSlide().thumbSrc}")`
        );
        },
    },
    });
    