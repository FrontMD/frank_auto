function sBanksSlider() {
    const sBanksBlocks = document.querySelectorAll('[data-js="sBanks"]')

    if(sBanksBlocks.length < 0) return

    sBanksBlocks.forEach(block => {
        const slider = block.querySelector('[data-js="sBanksSlider"]')
        const prev = block.querySelector('[data-js="sliderPrev"]')
        const next = block.querySelector('[data-js="sliderNext"]')

        const sliderEx = new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: 10,
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
        })
    })
}