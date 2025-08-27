function sNewsSliders() {
    const sNewsblocks = document.querySelectorAll('[data-js="sNews"]')

    if(sNewsblocks.length < 1) return

    sNewsblocks.forEach(sNewsblock => {
        const slider = sNewsblock.querySelector('[data-js="sNewsSlider"]')
        const slidesPerView = sNewsblock.dataset.slides ? parseInt(sNewsblock.dataset.slides) : 3

        const sliderEx = new Swiper(slider, {
            slidesPerView: 1.26,
            spaceBetween: 10,
            breakpoints: {
                500: {
                    slidesPerView: 2.12,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: slidesPerView,
                    spaceBetween: 20,
                }
            }
        })
    })
}