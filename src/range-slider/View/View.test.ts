test('check current value of first thumb', () => {
    const $rangeSlider = document.querySelector(".js-range-slider") as HTMLInputElement;
    expect($rangeSlider.value).toEqual(5);
})

test('check current value of second thumb', () => {
    const $secondRangeSlider = document.querySelector(".js-range-slider_second-thumb") as HTMLInputElement;
    expect($secondRangeSlider.value).toEqual(1);
})