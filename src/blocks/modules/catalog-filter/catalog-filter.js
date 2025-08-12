function catalogFilter() {
    const catalogFilterEl = document.querySelector('[data-js="catalogFilter"]')
    const catalogFilterOpenBtns = document.querySelectorAll('[data-js="catalogFilterOpen"]')

    if(!catalogFilter || catalogFilterOpenBtns.length < 1) return
    const catalogFilterCloseBtns = document.querySelectorAll('[data-js="catalogFilterClose"]')

    catalogFilterOpenBtns.forEach(openBtn => {
        openBtn.addEventListener('click', function() {
            lockBody();
            catalogFilterEl.classList.add('active')
        })
    })

    catalogFilterCloseBtns.forEach(openBtn => {
        openBtn.addEventListener('click', function() {
            unlockBody();
            catalogFilterEl.classList.remove('active')
        })
    })
}