function sConfigInit() {
        const gridSpoilers = document.querySelectorAll('[data-js="gridSpoiler"]')

        if(gridSpoilers.length < 1) return
        
        const showMoreLayout = `<span class="btn__text show">Показать еще</span><span class="btn__text hide">Свернуть</span>`
        const ww = window.innerWidth
        
        gridSpoilers.forEach(gridSpoiler => {
            const content = gridSpoiler.querySelector('[data-js="gridSpoilerContent"]')
            const textBlock = content.querySelector('.cm-spoiler-list__text')
            let rows = parseInt(gridSpoiler.dataset.rows)
            const resp = gridSpoiler.dataset.resp

            
            if(resp) {
                let respArr = resp.split('-')
                
                if(ww < respArr[1]) {
                    rows = respArr[0]
                }
            }

            const cell = content.querySelectorAll('[data-js="gridSpoilerCell"]')[1]
            const gridItemHeight = cell.offsetHeight
            const margins = isNaN(parseInt(window.getComputedStyle(cell).marginTop)) ? 0 : parseInt(window.getComputedStyle(cell).marginTop)
            const paddings = !textBlock || isNaN(parseInt(window.getComputedStyle(textBlock).paddingTop)) ? 0 : parseInt(window.getComputedStyle(textBlock).paddingTop)
            //const rowGap = isNaN(parseInt(window.getComputedStyle(content).rowGap)) ? 0 : parseInt(window.getComputedStyle(content).rowGap)
            const gap = paddings + (rows - 1) * margins
            const minHeight = rows * gridItemHeight + gap
            const maxHeight = content.scrollHeight

            content.style.maxHeight = minHeight + 'px'

            if(maxHeight - ((gridItemHeight + gap) / 2) > minHeight) {
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