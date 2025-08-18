function sCatalogSliderInit() {
    const sCatalogSliders = document.querySelectorAll('[data-js="sCatalogSlider"]')

    if(sCatalogSliders.length < 1) return

    sCatalogSliders.forEach(sCatalogSlider => {
        const slider = sCatalogSlider.querySelector('[data-js="sCatalogSliderSlider"]')

        let sliderEl = new Swiper(slider, {
            slidesPerView: 1.1,
            spaceBetween: 10,
            breakpoints: {
                767: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    spaceBetween: 20,
                    slidesPerView: 2
                },
                1279: {
                    spaceBetween: 20,
                    slidesPerView: 3
                }
            }
        }) 
    })
}