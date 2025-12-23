function brandsList() {
    const brandsLists = document.querySelectorAll('[data-js="brandsList"]')

    if(brandsLists.length < 1) return

    const showMoreLayout = `<span class="btn__text show">Все бренды</span><span class="btn__text hide">Показать меньше</span>`

    brandsLists.forEach(brandsList => {
        const parentSlide = brandsList.closest('[data-js="tabsBlockSlide"]')
        
        if(!parentSlide) {
            brandsListInit(brandsList) 
        } else {
            const inActiveTab = parentSlide.classList.contains('active');
            
            if(inActiveTab) {
                brandsListInit(brandsList)
            } else {
                parentSlide.addEventListener('activatedSlide', () => {
                    brandsListInit(brandsList)
                }, { once: true })
            }

        }
        
    })

    function brandsListInit(brandsList) {
        const list = brandsList.querySelector('[data-js="brandsListItems"]')
        const ww = window.innerWidth
        let rows = 5
        
        if(brandsList.classList.contains('brands-list--full')) {
            if(ww > 767) {
                rows = 3
            } else {
                rows = 4
            }
        }

        if(brandsList.classList.contains('brands-list--catalog')) {
            rows = 2
        }

        const listItemHeight = list.querySelector('[data-js="brandsListItem"]').offsetHeight
        const gap = parseInt(window.getComputedStyle(list).rowGap)
        const minHeight = rows * listItemHeight + (rows - 1) * gap
        const maxHeight = list.scrollHeight

        list.style.maxHeight = minHeight + 'px'

        if(maxHeight > minHeight) {
            const showMore = document.createElement('button')
            
            showMore.classList.add('btn', 'brands-list__link', 'btn--light-accent', 'btn--full')
            showMore.setAttribute('type', 'button')
            showMore.innerHTML = showMoreLayout
            brandsList.appendChild(showMore)

            showMore.addEventListener('click', function() {
                if(this.classList.contains('showed')) {
                    this.classList.remove('showed')
                    list.style.maxHeight = minHeight + 'px'
                } else {
                    this.classList.add('showed')
                    list.style.maxHeight = maxHeight + 'px'
                }
            })
        }
    }
}