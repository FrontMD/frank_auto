function headerController() {
    const header = document.querySelector('[data-js="siteHeader"]')

    if(!header) return

    // высота по скроллу
    let lastScroll = window.scrollY ? window.scrollY : 0

    if(lastScroll > 10) {
        header.classList.add('small')
    }

    window.addEventListener('scroll', function() {
        let currentScroll = window.scrollY
        toggleHeader(lastScroll, currentScroll)
        lastScroll = currentScroll
    })

    function toggleHeader(lastScroll, currentScroll) {
        if(currentScroll <= lastScroll || currentScroll === 0) {
            header.classList.remove('small')
        } else {
            header.classList.add('small')
        }
    }

    // открытие бургера
    const burger = document.querySelector('[data-js="headerBurger"]')

    if(burger) {
        const burgerToggle = burger.querySelector('[data-js="headerBurgerToggle"]')
    }
}