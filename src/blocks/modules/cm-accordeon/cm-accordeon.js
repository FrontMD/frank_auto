function cmSpoilersInit() {
    const cmAccordeons = document.querySelectorAll('[data-js="cmAccordeon"]') 

    if(cmAccordeons.length < 1) return

    cmAccordeons.forEach(accordeon => {
        const cmSpoilers = accordeon.querySelectorAll('[data-js="cmSpoiler"]')

        if(cmSpoilers.length > 0) {
            cmSpoilers.forEach((spoiler, index) => {
                const header = spoiler.querySelector('[data-js="cmSpoilerHeader"]')
                const moreBtns = spoiler.querySelectorAll('[data-js="cmSpoilerMoreBtn"]')
                const content = spoiler.querySelector('[data-js="cmSpoilerContent"]')
                const detailed = spoiler.querySelector('[data-js="cmSpoilerDetailed"]')

                if(index == 0) {
                    open(spoiler, content)
                }

                header.addEventListener('click', () => {
                    if(spoiler.classList.contains('expanded')) {
                        close(spoiler, content)
                    } else {
                        open(spoiler, content)
                    }
                })

                moreBtns.forEach(moreBtn => {
                    moreBtn.addEventListener('click', function () {
                        if(this.classList.contains('expanded')) {
                            close(this, detailed)
                        } else {
                            open(this, detailed)
                        }
                    })
                })

            })
        }
    })

    function open(trigger, block) {
        trigger.classList.add('expanded')
        $(block).slideDown(400);
    }

    function close(trigger, block) {
        trigger.classList.remove('expanded')
        $(block).slideUp(400);
    }
}