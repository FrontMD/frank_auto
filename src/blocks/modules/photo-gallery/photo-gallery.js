function photoGalleryInit() {
    const photoGalleries = document.querySelectorAll('[data-js="photoGallery"]')

    if(photoGalleries.length < 1) return

    photoGalleries.forEach(gallery => {
        const slider = gallery.querySelector('[data-js="photoGallerySlider"]')
        const thumbs = gallery.querySelector('[data-js="photoGalleryThumbs"]')
        const prev = slider.querySelector('[data-js="sliderPrev"]')
        const next = slider.querySelector('[data-js="sliderNext"]')

        const thumbsEl = new Swiper(thumbs, {
            slidesPerView: 'auto',
            direction: "vertical",
            spaceBetween: 20,
            breakpoints: {
                1280: {
                    spaceBetween: 24,
                } 
            },
            mousewheel: {
                enabled: true,
            },
            on: {
                init: function(swiper) {
                    setGlare(swiper)
                },
                reachEnd: function(swiper) {
                    setGlare(swiper)
                },
                slideChange: function(swiper) {
                    setGlare(swiper)
                },
            }
        })

        const sliderEl = new Swiper(slider, {
            slidesPerView: 1.1,
            spaceBetween: 10,
            thumbs: {
                swiper: thumbsEl
            },
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1280: {
                    spaceBetween: 24,
                } 
            }

        })

        function setGlare(swiper) {
            let progress = swiper.progress;

            if(progress == 0) {
                thumbs.classList.remove('start')
                thumbs.classList.add('end')
            } else if (progress == 1) {
                thumbs.classList.add('start')
                thumbs.classList.remove('end')
            } else {
                thumbs.classList.add('start')
                thumbs.classList.add('end')
            }
        }
    })

}