function imgSliderInit() {
    const imgSliderBlocks = document.querySelectorAll('[data-js="imgSliderBlock"]')

    if(imgSliderBlocks.length < 0) return

    window.onload  = function() { 
        imgSliderBlocks.forEach(block => {
            const slider = block.querySelector('[data-js="imgSlider"]')
            const slides = slider.querySelectorAll('[data-js="imgSliderSlide"]')

            slides.forEach(slide => {
                const img = slide.querySelector('[data-js="imgSliderImg"]')
                const imgWidth = img.offsetWidth
                slide.style.width = imgWidth + 'px'
            })
            
            const sliderEx = new Swiper(slider, {
                slidesPerView: 'auto',
                spaceBetween: 10,
                breakpoints: {
                    1280: {
                        spaceBetween: 24
                    }
                }
            })
            
        })
    };
}