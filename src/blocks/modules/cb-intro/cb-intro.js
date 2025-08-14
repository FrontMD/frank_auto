function colorSliderInit() {
    const colorSliders = document.querySelectorAll('[data-js="colorSlider"]')

    if(colorSliders.length < 1) return

    colorSliders.forEach(colorSlider => {
        const slider = colorSlider.querySelector('[data-js="colorSliderImg"]')
        const tabs = colorSlider.querySelector('[data-js="colorSliderTabs"]')

        let tabsEx = new Swiper(tabs, {
            slidesPerView: 'auto',
        })
        
        let sliderEx = new Swiper(slider, {
            slidesPerView: 1,
            effect: "fade",
            thumbs: {
                swiper: tabsEx
            }
        })
    })
}