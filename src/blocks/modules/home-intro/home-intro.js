function homeIntro() {
    const homeIntros = document.querySelectorAll('[data-js="homeIntro"]')

    if(homeIntros.lenght < 1) return

    homeIntros.forEach(homeIntro => {
        const homeIntroSlider = homeIntro.querySelector('[data-js="homeIntroSlider"]')
        const homeIntroPagination = homeIntro.querySelector('[data-js="bulletProgress"]')

        const homeIntroSliderEx = new Swiper(homeIntroSlider, {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: homeIntroPagination,
                type: 'bullets',
            },
            on: {
                init: function(swiper) {
                    progressBullets(homeIntroPagination, swiper)
                },
            }
        })
    })

}

function progressBullets(bullets, slider) {
    const bulletsList = bullets.querySelectorAll('.swiper-pagination-bullet')

    bulletsList.forEach(bullet => {
        const bulletOverlay = document.createElement('span')
        bulletOverlay.classList.add('bullet-progress__overlay')
        bulletOverlay.setAttribute('data-js', 'bulletProgressOverlay')

        bullet.appendChild(bulletOverlay)
    })

    slider.on('afterInit slideChangeTransitionEnd', () => {
        const activeBullitOverlay = bullets.querySelector('.swiper-pagination-bullet.swiper-pagination-bullet-active [data-js="bulletProgressOverlay"]')
        slider.autoplay.stop()
        const fullTime = slider.autoplay.timeLeft
        slider.autoplay.start()

        let interval = setInterval(() => {

            let currentTime = slider.autoplay.timeLeft
            activeBullitOverlay.style.width = 100 - currentTime / fullTime * 100 + "%"

            if(slider.autoplay.timeLeft <= 0) {
                clearInterval(interval)
                activeBullitOverlay.removeAttribute('style')
            }

        }, 10)

    })
}

