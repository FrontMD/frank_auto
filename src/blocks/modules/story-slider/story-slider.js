function storySlidersInit() {
    const storySliders = document.querySelectorAll('[data-js="storySlider"]')

    if(storySliders.length < 1) return
    
    storySliders.forEach(slider => {
        const sliderBlock = slider.querySelector('[data-js="storySliderSlider"]')

        const sliderEx = new Swiper(sliderBlock, {
            slidesPerView: 'auto',
            spaceBetween: 16
        })
    })
}