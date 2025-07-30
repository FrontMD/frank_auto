
@@include("../../blocks/components/form/form.js")
@@include("../../blocks/components/field/field.js")
@@include("../../blocks/components/field-range/field-range.js")
//include("../../blocks/components/field-file/field-file.js")

document.addEventListener('DOMContentLoaded', () => {
    // управляет полями в формах
    fieldsController();
    // управляет селектами в формах
    selects();
    // управляет диапазонами в формах
    fieldsRangeController()
    // маски полей и валидация
    validation();
})