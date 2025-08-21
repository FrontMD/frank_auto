function cpIntro() {
    const cpIntros = document.querySelectorAll('[data-js="cpIntro"]')

    if(cpIntros.lenght < 1) return

    cpIntros.forEach(cpIntro => {
        const slider = cpIntro.querySelector('[data-js="cpIntroSlider"]')
        const thumbs = cpIntro.querySelector('[data-js="cpIntroThumbs"]')
        const prev = slider.querySelector('[data-js="sliderPrev"]')
        const next = slider.querySelector('[data-js="sliderNext"]')

        const thumbsEx = new Swiper(thumbs, {
            slidesPerView: 5,
            spaceBetween: 10,
        })
        
        const sliderEx = new Swiper(slider, {
            slidesPerView: 1.06,
            spaceBetween: 10,
            loop: true,
            thumbs: {
                swiper: thumbs
            },
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            breakpoints: {
                768: {
                    slidesPerView: 1
                }
            }
        })
    })

}