function homeService() {
    const homeServices = document.querySelectorAll('[data-js="servicesList"]')

    if(homeServices.length < 1) return

    const showMoreLayout = `<span class="btn__text show">Все услуги</span><span class="btn__text hide">Показать меньше</span>`

    homeServices.forEach(service => {
        const list = service.querySelector('[data-js="servicesListContent"]')
        let rows = 1
        const listItemHeight = list.querySelector('[data-js="servicesListCard"]').offsetHeight
        const gap = parseInt(window.getComputedStyle(list).rowGap)
        const minHeight = rows * listItemHeight + (rows - 1) * gap
        const maxHeight = list.scrollHeight
    
        list.style.maxHeight = minHeight + 'px'
    
        if(maxHeight > minHeight) {
            const showMore = document.createElement('button')
            
            showMore.classList.add('btn', 'brands-list__link', 'btn--light-accent', 'btn--full')
            showMore.setAttribute('type', 'button')
            showMore.innerHTML = showMoreLayout
            service.appendChild(showMore)
    
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
    })
    
}