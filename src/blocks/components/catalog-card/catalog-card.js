function ccSlidersInit() {
    const ccSliders = document.querySelectorAll('[data-js="catalogCardSlider"]')

    if(ccSliders.length < 1) return

    ccSliders.forEach(slider => {
        const pagination = slider.querySelector('[data-js="catalogCardPagination"]')

        let sliderEx = new Swiper(slider, {
            slidesPerView: 1.148,
            spaceBetween: 10,
            breakpoints: {
                768: {
                   slidesPerView: 1,
                    spaceBetween: 12, 
                }
            },
            pagination: {
                el: pagination,
                type: 'bullets',
                clickable: true
            },

        })
    })
}