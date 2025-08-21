function popularBrands() {
    const popularBrandsSliders = document.querySelectorAll('[data-js="popularBrandsSlider"]')

    if(popularBrandsSliders.length < 1) return
    
    popularBrandsSliders.forEach(slider => {
        const swiperWrapper = slider.querySelector('.swiper-wrapper')
        const width = swiperWrapper.offsetWidth
        const scrollWidth = swiperWrapper.scrollWidth
        const slideWidth = swiperWrapper.querySelector('.swiper-slide').offsetWidth

        let loop = false
        let autoplay = false
    
        if(scrollWidth - slideWidth > width) {
            autoplay =  {
                            delay: 0,
                            
                        }
            loop = true
        }

        const sliderEx = new Swiper(slider, {
            slidesPerView: 'auto',
            loop: loop,
            speed: 1200,
            autoplay: autoplay,
            breakpoints: {
                500: {
                    slidesPerView: 'auto',
                }
            },
            on: {
                init: function() {
                    if(loop == false) {
                        swiperWrapper.style.justifyContent = 'center'
                    }
                }
            }
        })

    })
}