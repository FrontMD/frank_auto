function tabsBlockInit() {
    const tabsBlock = document.querySelector('[data-js="tabsBlock"]');

    if(!tabsBlock) return

    const slidesList = tabsBlock.querySelectorAll('[data-js="tabsBlockSlide"]')
    const tabsList = tabsBlock.querySelectorAll('[data-js="tabsBlockTab"]')
    const homeSelection = tabsBlock.closest('[data-js="homeSelection"]')
    let filtersList = false

    if(homeSelection) {
        filtersList = homeSelection.querySelectorAll('[data-hs-form="homeSelectionFormSlide"]')
    }

    tabsList.forEach(tab => {
        tab.addEventListener('click', e => {

            currentTab = e.target.closest('[data-js="tabsBlockTab"]')
            currentIndex = currentTab.dataset.index

            tabsList.forEach(iTab => {
                iTab.classList.remove('active')
            })

            currentTab.classList.add('active')

            slidesList.forEach((slide, index) => {
                if(index == currentIndex) {
                    slide.classList.add('active')
                    slide.dispatchEvent(new CustomEvent("activatedSlide"))
                } else {
                    slide.classList.remove('active')
                }
            })

            if(filtersList.length > 1) {
                filtersList.forEach((item, index) => {
                    if(index == currentIndex) {
                        item.classList.remove('hs-hidden')

                        if(!item.classList.contains('activated')) {
                            let selects = item.querySelectorAll('[data-js="formSelect"]')

                            if(selects.length > 0) {
                                selects.forEach(select => {
                                    reloadSelect(select)
                                })
                            }

                            item.classList.add('activated')
                        }

                    } else {
                        item.classList.add('hs-hidden')
                    }
                })
            }

        })
    })

}