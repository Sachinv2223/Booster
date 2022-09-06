$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 24,
    navText: ['<i class="ri-arrow-left-s-line"></i>', '<i class="ri-arrow-right-s-line"></i>'],
    autoPlay: true,
    smartSpeed: 500,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2,
        }
    }
})