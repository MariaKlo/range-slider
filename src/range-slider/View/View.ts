const $rangeSlider = document.querySelector(".js-range-slider") as HTMLInputElement;
const $secondRangeSlider = document.querySelector(".js-range-slider_second-thumb") as HTMLInputElement;
const $labelFirst = document.querySelector(".label_first") as HTMLDivElement;
const $labelSecond = document.querySelector(".label_second") as HTMLDivElement;
const $maxDefValue = document.querySelector(".label__max-def-value") as HTMLDivElement;
const $minDefValue = document.querySelector(".label__min-def-value") as HTMLDivElement;

// set values of inputs
$rangeSlider.addEventListener('input', () => {
    $labelFirst.innerHTML = `Current first value: ${(<HTMLInputElement>$rangeSlider).value}`;
});

$secondRangeSlider.addEventListener('input', () => {
    $labelSecond.innerHTML = `Current second value: ${(<HTMLInputElement>$secondRangeSlider).value}`;
});

// set max and min values
function setDefaultValues() {
    $maxDefValue.innerHTML = `Max default value: ${(<HTMLInputElement>$rangeSlider).max}`;
    $minDefValue.innerHTML = `Min default value: ${(<HTMLInputElement>$rangeSlider).min}`;
}
setDefaultValues();

// set min and max values by click on words
$maxDefValue.addEventListener('click', () => {
    (<HTMLInputElement>$rangeSlider).value = (<HTMLInputElement>$rangeSlider).max;
    $labelFirst.innerHTML = `Current value: ${(<HTMLInputElement>$rangeSlider).max}`;
});

$minDefValue.addEventListener('click', () => {
    (<HTMLInputElement>$rangeSlider).value = (<HTMLInputElement>$rangeSlider).min;
    $labelFirst.innerHTML = `Current value: ${(<HTMLInputElement>$rangeSlider).min}`;
});

// unfinished version with class View

// class View {
//     $label: JQuery<HTMLDivElement>;
//     $rangeSlider: JQuery<HTMLInputElement>;
//     constructor($label: JQuery<HTMLDivElement>, $rangeSlider: JQuery<HTMLInputElement>) {
//         this.$label = $label;
//         this.$rangeSlider = $rangeSlider;
//     }
//     storeValues (): void {
//         this.$rangeSlider.addEventListener('input', () => {
//             this.$label.innerHTML = (<JQuery<HTMLInputElement>>this.$rangeSlider).value;
//         });
//     } 
// }

// const view = new View($(`<div class="label">25</div>`), $(`<input type="range" min="0" max="50" step="1" class="range-slider js-range-slider" id="range-slider">`));
// view.storeValues();
// export { View };