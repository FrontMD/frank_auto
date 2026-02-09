function sText(container = null) {
    const sTexts = container ? container.querySelectorAll('[data-js="sText"]') : document.querySelectorAll('[data-js="sText"]')
    const ww = window.innerWidth

    if(sTexts.length < 1 || ww > 767) return

    const toggleBtnLayout = `<svg>
                                <use xlink:href="img/sprites/sprite.svg#burger_chevron"></use>
                            </svg>
                            <span class="show">Развернуть текст</span><span class="hide">Cвернуть текст</span>`

    sTexts.forEach(text => {
        if(text.dataset.activated !== 'true') {
            const sTextContent = text.querySelector('[data-js="sTextContent"]')
            const minHeight = sTextContent.offsetHeight
            const maxHeight = sTextContent.scrollHeight
    
            if(maxHeight > minHeight) {
                sTextContent.classList.add('collapsed')
    
                const toggleBtn = document.createElement("button")
                
                toggleBtn.setAttribute('type', 'button')
                toggleBtn.classList.add('btn', 'btn--toggle', 'btn--light-accent', 'btn--full', 's-text__toggle')
                toggleBtn.innerHTML = toggleBtnLayout
    
                sTextContent.parentNode.insertBefore(toggleBtn, sTextContent.nextSibling);
    
                toggleBtn.addEventListener('click', function() {
                    if(this.classList.contains('expanded')) {
                        sTextContent.style.maxHeight = minHeight + 'px'
                        sTextContent.classList.add('collapsed')
                        this.classList.remove('expanded')
                    } else {
                        sTextContent.style.maxHeight = maxHeight + 'px'
                        sTextContent.classList.remove('collapsed')
                        this.classList.add('expanded')
                    }
                })

                text.setAttribute('data-activated', true)
            }
        }
    })
}