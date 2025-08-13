function sAdvantagesSlider() {
    const sAdvantagesSliders = document.querySelectorAll('[data-js="sAdvantagesSlider"]')
    const ww = window.innerWidth

    if(sAdvantagesSliders.length < 1 || ww > 1023) return

    sAdvantagesSliders.forEach(slider => {
        let sliderEx = new Swiper(slider, {
            slidesPerView: 1.1,
            spaceBetween: 10,
            breakpoints: {
                600: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                767: {
                    slidesPerView: 2.1,
                    spaceBetween: 20,
                },
                900: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                }
            }
        })
    })
}