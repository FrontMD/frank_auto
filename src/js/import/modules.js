@@include("../../blocks/modules/header/header.js")
@@include("../../blocks/modules/modals/modals.js")
@@include("../../blocks/modules/tabs-block/tabs-block.js")
@@include("../../blocks/modules/home-intro/home-intro.js")

document.addEventListener('DOMContentLoaded', () => {
    // открывает модалки
    modalsInit()

    // управляет хедером
    headerController()
    
    // первый экран главной
    homeIntro()

    // управляет вкладками
    tabsBlockInit()

})