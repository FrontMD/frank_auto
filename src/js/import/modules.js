@@include("../../blocks/modules/header/header.js")
@@include("../../blocks/modules/modals/modals.js")
@@include("../../blocks/modules/tabs-block/tabs-block.js")

document.addEventListener('DOMContentLoaded', () => {
    // открывает модалки
    modalsInit()

    // управляет хедером
    headerController()

    // управляет вкладками
    tabsBlockInit()
})