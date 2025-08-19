function sConfigInit() {
        const gridSpoilers = document.querySelectorAll('[data-js="gridSpoiler"]')

        if(gridSpoilers.length < 1) return

        const showMoreLayout = `<span class="btn__text show">Показать еще</span><span class="btn__text hide">Свернуть</span>`

        gridSpoilers.forEach(gridSpoiler => {
            const content = gridSpoiler.querySelector('[data-js="gridSpoilerContent"]')
            const rows = 1
            const gridItemHeight = content.querySelector('[data-js="gridSpoilerCell"]').offsetHeight
            const gap = parseInt(window.getComputedStyle(content).rowGap)
            const minHeight = rows * gridItemHeight + (rows - 1) * gap
            const maxHeight = content.scrollHeight

            content.style.maxHeight = minHeight + 'px'

            if(maxHeight > minHeight) {
                const showMore = document.createElement('button')
                
                showMore.classList.add('btn', 's-config__more', 'btn--light-accent', 'btn--full', 'btn--toggle')
                showMore.setAttribute('type', 'button')
                showMore.innerHTML = showMoreLayout
                
                content.parentNode.insertBefore(showMore, content.nextSibling);

                showMore.addEventListener('click', function() {
                    if(this.classList.contains('expanded')) {
                        this.classList.remove('expanded')
                        content.style.maxHeight = minHeight + 'px'
                    } else {
                        this.classList.add('expanded')
                        content.style.maxHeight = maxHeight + 'px'
                    }
                })
            }
        })

}