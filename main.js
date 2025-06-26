
document.addEventListener('DOMContentLoaded', function() {
    let swiper = new Swiper(".swiper .container", {
        slidesPerView: 3,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        }
    });
});
