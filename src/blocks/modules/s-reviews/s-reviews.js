function sReviewsSlider() {
    const sReviewsSliders = document.querySelectorAll('[data-js="sReviewsSlider"]')
    const ww = window.innerWidth

    

    if(sReviewsSliders.length < 1 || ww > 767) return

    sReviewsSliders.forEach(slider => {
        let sliderEx = new Swiper(slider, {
            slidesPerView: 1.2,
            spaceBetween: 10,
        })
    })
}