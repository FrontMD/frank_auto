@@include("../../blocks/modules/header/header.js")
@@include("../../blocks/modules/modals/modals.js")

document.addEventListener('DOMContentLoaded', () => {
    // открывает модалки
    modalsInit()

    // управляет хедером
    headerController()
})