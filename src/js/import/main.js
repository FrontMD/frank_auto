document.addEventListener('DOMContentLoaded', () => {
    $('img.lazyload').lazyload();
    fancyboxInit();
    compareSliderInit();
    //anchorsInit();
    //printBtnsInit();
})



// Блокировка скролла при открытии модалок
function lockBody(onlyHeaderPadding = false) {
    let scrollbarWidth = getScrollbarWidth()

    if(!onlyHeaderPadding) {
        $('body').addClass('no-scroll');
        $('body').css('padding-right', scrollbarWidth)
    }

    $('[data-js="siteHeader"]').css('padding-right', scrollbarWidth)
}

function unlockBody() {
	$('body').removeClass('no-scroll');
    $('body').css('padding-right', 0);
    $('[data-js="siteHeader"]').css('padding-right', 0)
}

function getScrollbarWidth() {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth
}

// инициализация слайдера сравнения
function compareSliderInit() {
    const compareBlocks = document.querySelectorAll('[data-js="compareBlock"]')

    if(compareBlocks.length < 1) return

    compareBlocks.forEach(compareBlock => {
        const sliders = compareBlock.querySelectorAll('[data-js="compareSlider"]')
        const sliderPrev = compareBlock.querySelector('[data-js="sliderPrev"]')
        const sliderNext = compareBlock.querySelector('[data-js="sliderNext"]')

        sliders.forEach(slider => {
            const sliderScrollbar = slider.querySelector('[data-js="sliderScrollbar"]')

            if(sliderScrollbar) {
                let sliderEx = new Swiper(slider, {
                    slidesPerView: 'auto',
                    spaceBetween: 8,
                    allowTouchMove: false,
                    navigation: {
                        nextEl: sliderNext,
                        prevEl: sliderPrev,
                    },
                    scrollbar: {
                        el: sliderScrollbar,
                        draggable: false,
                    },
                    breackpoints: {
                        768: {
                            spaceBetween: 12
                        },
                        1421: {
                            spaceBetween: 16
                        }
                    },
                    on: {
                        init: function (swiper) {
                            const pdfBtn = document.querySelector("[data-js='pdf']")
                            let pdfBtnHref = pdfBtn.getAttribute('href')
                            const compareBlock = swiper.el.closest('.compare-block__prodwrap')
                            const leftMargin = parseInt(window.getComputedStyle(compareBlock).marginLeft)
                            const slidesGap = parseInt(window.getComputedStyle(swiper.slides[0]).marginRight)
                            let width = swiper.slides.reduce((acc, currentValue) => {
                                return acc + currentValue.offsetWidth + slidesGap
                            }, leftMargin)
                            width = width  * (72 / 96)
                            const height = swiper.el.closest('[data-js="compareBlock"]').offsetHeight * (72 / 96)

                            pdfBtnHref = pdfBtnHref + '&width=' + Math.ceil(width) + '&height=' + Math.ceil(height)

                            pdfBtn.setAttribute('href', pdfBtnHref)

                        },
                    }
 
                })
            } else {
                let sliderEx = new Swiper(slider, {
                    slidesPerView: 'auto',
                    spaceBetween: 8,
                    allowTouchMove: false,
                    navigation: {
                        nextEl: sliderNext,
                        prevEl: sliderPrev,
                    },
                    breackpoints: {
                        768: {
                            spaceBetween: 12
                        },
                        1421: {
                            spaceBetween: 16
                        }
                    }
                })
            }

        })
    })
} 

// инициализация фансибокса
function fancyboxInit() {
    if (typeof window.distPath == 'undefined') {
        window.distPath = '';
    }
    Fancybox.bind("[data-fancybox]", {
        placeFocusBack: false,
        mainClass: 'my-fancybox',
        idle: false,
        closeExisting: true,
        Carousel: {
            transition: "crossfade",
            Navigation: {
                prevTpl: `<svg><use xlink:href=${window.distPath}img/sprites/sprite.svg#arrow_classic></use></svg>`,
                nextTpl: `<svg><use xlink:href=${window.distPath}img/sprites/sprite.svg#arrow_classic></use></svg>`,
              },
              Video: {
                  loop: true
              },
        },
        Thumbs: {
            type: "classic",
        },
        Toolbar: {
            enabled: true,
            display: {
                left: [],
                middle: [],
                right: [
                  "close",
                ],
            },
        },

        on: {
            /*"Carousel.change": (fancybox, event) => {
                let currentSlide = fancybox.getSlide()
                let prevSlide = event.slides[event.prevPage]

                if(prevSlide.type == 'iframe') {
                    let player = prevSlide.el.querySelector('iframe')
                    let playerSrc = player.getAttribute('src')

                    if(playerSrc.includes('rutube')) {
                        player.contentWindow.postMessage(JSON.stringify({
                            type: 'player:pause',
                            data: {}
                        }), '*');
                    } else if(playerSrc.includes('vkvideo')) {
                        let player = VK.VideoPlayer(prevSlide.el.querySelector('iframe'));
                        player.pause();
                    }
                }

                if(currentSlide.type == 'iframe') {
                    let player = currentSlide.el.querySelector('iframe')
                    let playerSrc = player.getAttribute('src')

                    if(playerSrc.includes('rutube')) {
                        if(player.contentDocument!==null) {
                            player.contentWindow.postMessage(JSON.stringify({
                                type: 'player:play',
                                data: {}
                            }), '*');
                        }  else {
                            player.addEventListener("load", function() {
                                player.contentWindow.postMessage(JSON.stringify({
                                    type: 'player:play',
                                    data: {}
                                }), '*');
                            })
                        }
                    }else if(playerSrc.includes('vkvideo')) {
                        let player = VK.VideoPlayer(currentSlide.el.querySelector('iframe'));
                        player.play();
                    }

              }

              if(currentSlide.type == 'html5video') {
                    let videoEl = currentSlide.el.querySelector('video')

                    if(videoEl) {
                        videoEl.setAttribute('loop', '')
                    }
                }

            },*/
            "Carousel.ready Carousel.change": (fancybox, event) => {
                let currentSlide = fancybox.getSlide()

                if(currentSlide.type == 'html5video') {
                    let videoEl = currentSlide.el.querySelector('video')

                    if(videoEl) {
                        videoEl.setAttribute('loop', '')
                    }
                }
            },
            close: () => {
                const articleMediaSlider = document.querySelector('.article-layout__body [data-js="mediaSlider"]')

                if(articleMediaSlider) {
                    setTimeout(() => {
                        mediaSliderInit()
                    }, 100)
                }
            },
            
        },

    });
}

// инициализация слайдера сравнения
/*function compareSliderInit() {
    const compareBlocks = document.querySelectorAll('[data-js="compareBlock"]')

    if(compareBlocks.length < 1) return

    compareBlocks.forEach(compareBlock => {
        const sliders = compareBlock.querySelectorAll('[data-js="compareSlider"]')
        const sliderPrev = compareBlock.querySelector('[data-js="sliderPrev"]')
        const sliderNext = compareBlock.querySelector('[data-js="sliderNext"]')

        sliders.forEach(slider => {
            const sliderScrollbar = slider.querySelector('[data-js="sliderScrollbar"]')

            if(sliderScrollbar) {
                let sliderEx = new Swiper(slider, {
                    slidesPerView: 'auto',
                    spaceBetween: 8,
                    allowTouchMove: false,
                    navigation: {
                        nextEl: sliderNext,
                        prevEl: sliderPrev,
                    },
                    scrollbar: {
                        el: sliderScrollbar,
                        draggable: false,
                    },
                    breackpoints: {
                        768: {
                            spaceBetween: 12
                        },
                        1421: {
                            spaceBetween: 16
                        }
                    },
                    on: {
                        init: function (swiper) {
                            const pdfBtn = document.querySelector("[data-js='pdf']")
                            let pdfBtnHref = pdfBtn.getAttribute('href')
                            const compareBlock = swiper.el.closest('.compare-block__prodwrap')
                            const leftMargin = parseInt(window.getComputedStyle(compareBlock).marginLeft)
                            const slidesGap = parseInt(window.getComputedStyle(swiper.slides[0]).marginRight)
                            let width = swiper.slides.reduce((acc, currentValue) => {
                                return acc + currentValue.offsetWidth + slidesGap
                            }, leftMargin)
                            width = width  * (72 / 96)
                            const height = swiper.el.closest('[data-js="compareBlock"]').offsetHeight * (72 / 96)

                            pdfBtnHref = pdfBtnHref + '&width=' + Math.ceil(width) + '&height=' + Math.ceil(height)

                            pdfBtn.setAttribute('href', pdfBtnHref)

                        },
                    }
 
                })
            } else {
                let sliderEx = new Swiper(slider, {
                    slidesPerView: 'auto',
                    spaceBetween: 8,
                    allowTouchMove: false,
                    navigation: {
                        nextEl: sliderNext,
                        prevEl: sliderPrev,
                    },
                    breackpoints: {
                        768: {
                            spaceBetween: 12
                        },
                        1421: {
                            spaceBetween: 16
                        }
                    }
                })
            }

        })
    })
} */

// якорные ссылки
/*function anchorsInit() {

    const anchors = document.querySelectorAll('a[href^="#"]');

    if(anchors.length < 1) return

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const anchorName = this.getAttribute('href').replace('#', '');
            const targetEl = document.getElementById(anchorName);
            const targetTabs = targetEl.closest('[data-js="tabsBlock"]');
            let scrollTopOffset = document.querySelector('[data-js="siteHeader"]') ? document.querySelector('[data-js="siteHeader"]').offsetHeight : '0'

            if(targetTabs) {
                const targetTabsSlide = targetEl.closest('[data-js="tabsBlockSlide"]')
                const targetTabIndex = $(targetTabsSlide).index()
                const targetTab = targetTabs.querySelector(`[data-js="tabsBlockTab"][data-index="${targetTabIndex}"]`)

                if(targetTab) {
                    targetTab.click()
                }

                scrollTopOffset = scrollTopOffset + targetTabs.querySelector('[data-js="tabsBlockList"]').offsetHeight + 32

            }

            const targetElPos = Math.ceil($(targetEl).offset().top - scrollTopOffset)

            window.scrollTo({
                top: targetElPos,
                behavior: 'smooth'
            })
    
        });
    });
}*/

// кнопки Распечатать
/*function printBtnsInit() {
    const printBtns = document.querySelectorAll('[data-js="printBtn"]');

    if(printBtns.length < 1) return

    printBtns.forEach(printBtn => {
        printBtn.addEventListener('click', function() {
            window.print();
        })
    })
}

function scrollTriggerRefresh(timeout = 0) {
    if(footerScrollTriggerObj) {

        if(timeout > 0) {
            setTimeout(() => {
                footerScrollTriggerObj.refresh()
            }, timeout)

        } else {
            footerScrollTriggerObj.refresh()
        }
    } else {
        return
    }
}*/