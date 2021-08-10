var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    spaceBetween: 10,
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: true,
    freeMode: true,
    loopAdditionalSlides: 5,
    speed: 400,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 640px
        640: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            freeMode: false
        }
    }
});