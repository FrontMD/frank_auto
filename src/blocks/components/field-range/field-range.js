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
            const unit = rangeField.dataset.unit
            const isRange = rangeField.dataset.type == 'range' ? true : false
            
            let inputsList = [
                rangeField.querySelector('[data-js="fieldRangeMin"]')
            ]

            let sliderEx = false
            
            if(isRange) {
                inputsList.push(rangeField.querySelector('[data-js="fieldRangeMax"]'))

                sliderEx = noUiSlider.create(slider, {
                    start: [min, max],
                    format: formater,
                    connect: true,
                    tooltips: { 
                        to: function(value) { return Math.round(value).toLocaleString() + unit; },
                        from: function(value) { return Math.round(value).toLocaleString() + unit; } 
                    },
                    step: step,
                    range: {
                        'min': min,
                        'max': max
                    }
                });
    
                mergeTooltips(slider, 30, ' - ');

            } else {
                sliderEx = noUiSlider.create(slider, {
                    start: min,
                    format: formater,
                    connect: 'lower',
                    tooltips: [{to: function(value) { return Math.round(value).toLocaleString() + unit; }}],
                    step: step,
                    range: {
                        'min': min,
                        'max': max
                    }
                });
            }

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
            
            function mergeTooltips(slider, threshold, separator) {
            
                var textIsRtl = getComputedStyle(slider).direction === 'rtl';
                var isRtl = slider.noUiSlider.options.direction === 'rtl';
                var isVertical = slider.noUiSlider.options.orientation === 'vertical';
                var tooltips = slider.noUiSlider.getTooltips();
                var origins = slider.noUiSlider.getOrigins();
            
                // Move tooltips into the origin element. The default stylesheet handles this.
                tooltips.forEach(function (tooltip, index) {
                    if (tooltip) {
                        origins[index].appendChild(tooltip);
                    }
                });
            
                slider.noUiSlider.on('update', function (values, handle, unencoded, tap, positions) {
            
                    var pools = [[]];
                    var poolPositions = [[]];
                    var poolValues = [[]];
                    var atPool = 0;
            
                    // Assign the first tooltip to the first pool, if the tooltip is configured
                    if (tooltips[0]) {
                        pools[0][0] = 0;
                        poolPositions[0][0] = positions[0];
                        poolValues[0][0] = values[0].toLocaleString() + unit;
                    }
            
                    for (var i = 1; i < positions.length; i++) {
                        if (!tooltips[i] || (positions[i] - positions[i - 1]) > threshold) {
                            atPool++;
                            pools[atPool] = [];
                            poolValues[atPool] = [];
                            poolPositions[atPool] = [];
                        }
            
                        if (tooltips[i]) {
                            pools[atPool].push(i);
                            poolValues[atPool].push(values[i].toLocaleString() + unit);
                            poolPositions[atPool].push(positions[i]);
                        }
                    }
            
                    pools.forEach(function (pool, poolIndex) {
                        var handlesInPool = pool.length;
            
                        for (var j = 0; j < handlesInPool; j++) {
                            var handleNumber = pool[j];
            
                            if (j === handlesInPool - 1) {
                                var offset = 0;
            
                                poolPositions[poolIndex].forEach(function (value) {
                                    offset += 1000 - value;
                                });
            
                                var direction = isVertical ? 'bottom' : 'right';
                                var last = isRtl ? 0 : handlesInPool - 1;
                                var lastOffset = 1000 - poolPositions[poolIndex][last];
                                offset = (textIsRtl && !isVertical ? 100 : 0) + (offset / handlesInPool) - lastOffset;
            
                                // Center this tooltip over the affected handles
                                tooltips[handleNumber].innerHTML = poolValues[poolIndex].join(separator);
                                tooltips[handleNumber].style.display = 'block';
                                tooltips[handleNumber].style[direction] = offset + '%';
                            } else {
                                // Hide this tooltip
                                tooltips[handleNumber].style.display = 'none';
                            }
                        }
                    });
                });
            }
        }
        

    })
}
