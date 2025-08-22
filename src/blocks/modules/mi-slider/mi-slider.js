function miSliderInit() {
    const miSliders = document.querySelectorAll('[data-js="miSlider"]')

    if(miSliders.length < 0) return

    miSliders.forEach(slider => {
        const prev = slider.querySelector('[data-js="sliderPrev"]')
        const next = slider.querySelector('[data-js="sliderNext"]')

        const sliderEx = new Swiper(slider, {
            slidesPerView: 'auto',
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
        })
    })
}