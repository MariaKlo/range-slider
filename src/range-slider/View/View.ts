const rangeSlider = document.querySelector(".range-slider") as HTMLElement;

// store values in label
rangeSlider.addEventListener('input', () => {
    const label = document.querySelector(".label") as HTMLElement;
    label.innerHTML = (<HTMLInputElement>rangeSlider).value;
});