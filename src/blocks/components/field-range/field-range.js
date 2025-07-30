function fieldsRangeController() {
    const rangeFields = document.querySelectorAll('[data-js="fieldRange"]')

    if(rangeFields.length < 1) return
    
    const formater = {
        from: function (formattedValue) {
            return Number(formattedValue);
        },
        to: function (numericValue) {
            return Math.round(numericValue);
        },
        };

    rangeFields.forEach(rangeField => {
        const slider = rangeField.querySelector('[data-js="fieldRangeSlider"]');
        if(!slider.noUiSlider) {
            const min = parseInt(rangeField.dataset.min);
            const max = parseInt(rangeField.dataset.max);
            const step = parseInt(rangeField.dataset.step);
            const inputsList = [
                rangeField.querySelector('[data-js="fieldRangeMin"]'),
                rangeField.querySelector('[data-js="fieldRangeMax"]')
            ]

            let sliderEx = noUiSlider.create(slider, {
                start: [min, max],
                connect: true,
                format: formater,
                tooltips: true,
                step: step,
                range: {
                    'min': min,
                    'max': max
                }
            });

            sliderEx.on("update", function (values, handle) {
                inputsList[handle].value = values[handle]
                inputsList[handle].dispatchEvent(new Event('change'));
            });

            inputsList.forEach((currentInput, index) => {
                if(index == 0) {
                    currentInput.addEventListener('input', function() {
                        sliderEx.set([this.value, null])
                    })
                } else if(index == 1) {
                    currentInput.addEventListener('input', function() {
                        sliderEx.set([null, this.value])
                    })
                }

                currentInput.addEventListener('keydown', function(e) {
                    if (e.keyCode === 13) {
                        e.preventDefault()
                        e.stopPropagation()
                        this.blur()
                    }
                })
            })

            const parentForm = rangeField.closest('form')

            if(parentForm) {
                parentForm.addEventListener('reset', function() {
                    sliderEx.reset();
                    setTimeout(() => {
                        sliderEx.set([null, null])
                    }, 0)
                })
            }
            
        }
        

    })
}