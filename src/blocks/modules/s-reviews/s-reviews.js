function sReviewsSlider() {
    const sReviewsSliders = document.querySelectorAll('[data-js="sReviewsSlider"]')
    const ww = window.innerWidth

    

    if(sReviewsSliders.length < 1 || ww > 1023) return

    sReviewsSliders.forEach(slider => {
        let sliderEx = new Swiper(slider, {
            slidesPerView: 1.2,
            spaceBetween: 10,
            breakpoints: {
                768: {
                    slidesPerView: 2.1
                }
            }
        })
    })
}