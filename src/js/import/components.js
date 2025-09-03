
@@include("../../blocks/components/form/form.js")
@@include("../../blocks/components/form-filter/form-filter.js")
@@include("../../blocks/components/field/field.js")
@@include("../../blocks/components/field-range/field-range.js")
@@include("../../blocks/components/catalog-card/catalog-card.js")
@@include("../../blocks/components/cookie/cookie.js")
@@include("../../blocks/components/media-slider/media-slider.js")
@@include("../../blocks/components/spoiler/spoiler.js")

document.addEventListener('DOMContentLoaded', () => {
    cookieInit()
    fieldsController();
    selects();
    fieldsRangeController();
    formFilterController();
    ccSlidersInit();
    mediaSliderInit();
    spoilers()
})

window.onload = function() { 
    validation();
};