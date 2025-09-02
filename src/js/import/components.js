
@@include("../../blocks/components/form/form.js")
@@include("../../blocks/components/form-filter/form-filter.js")
@@include("../../blocks/components/field/field.js")
@@include("../../blocks/components/field-range/field-range.js")
@@include("../../blocks/components/catalog-card/catalog-card.js")
//include("../../blocks/components/field-file/field-file.js")

document.addEventListener('DOMContentLoaded', () => {
    fieldsController();
    selects();
    fieldsRangeController();
    //validation();
    formFilterController();
    ccSlidersInit();
})

window.onload = function() { 
    validation();
};