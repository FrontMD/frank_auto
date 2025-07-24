
@@include("../../blocks/components/form/form.js")
@@include("../../blocks/components/field/field.js")
//include("../../blocks/components/field-file/field-file.js")

document.addEventListener('DOMContentLoaded', () => {
    // управляет кнопками в полях форм
    //selects();
    // инициализирует селекты
    fieldsController();
    // маски полей и валидация
    validation();
})