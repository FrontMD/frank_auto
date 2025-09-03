function mediaSliderInit() {
    const mediaSliderBlocks = document.querySelectorAll('[data-js="mediaSliderBlock"]')

    if(mediaSliderBlocks.length < 0) return

    
    mediaSliderBlocks.forEach(block => {
        const slider = block.querySelector('[data-js="mediaSlider"]')
        const prev = slider.querySelector('[data-js="sliderPrev"]')
        const next = slider.querySelector('[data-js="sliderNext"]')
        
        const sliderEx = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
        })

    })
}