const $rangeSlider = document.querySelector(".js-range-slider") as HTMLInputElement;
const $secondRangeSlider = document.querySelector(".js-range-slider_second-thumb") as HTMLInputElement;
const $labelFirst = document.querySelector(".label_first") as HTMLDivElement;
const $labelSecond = document.querySelector(".label_second") as HTMLDivElement;
const $maxDefValue = document.querySelector(".label__max-def-value") as HTMLDivElement;
const $minDefValue = document.querySelector(".label__min-def-value") as HTMLDivElement;

// set values of inputs
function setValue() {
    $rangeSlider?.addEventListener('input', () => {
        $labelFirst.innerHTML = `Current first value: ${(<HTMLInputElement>$rangeSlider).value}`;
    });
}
setValue();

$secondRangeSlider?.addEventListener('input', () => {
    $labelSecond.innerHTML = `Current second value: ${(<HTMLInputElement>$secondRangeSlider).value}`;
});

// set max and min values
$maxDefValue.innerHTML = `Max default value: ${(<HTMLInputElement>$rangeSlider)?.max}`;
$minDefValue.innerHTML = `Min default value: ${(<HTMLInputElement>$rangeSlider)?.min}`;

// set min and max values by click on words
function maxDefValue() {
    $maxDefValue?.addEventListener('click', () => {
        (<HTMLInputElement>$rangeSlider).value = (<HTMLInputElement>$rangeSlider).max;
        $labelFirst.innerHTML = `Current value: ${(<HTMLInputElement>$rangeSlider).max}`;
    });
}
maxDefValue();

function minDefValue() {
    $minDefValue?.addEventListener('click', () => {
        (<HTMLInputElement>$rangeSlider).value = (<HTMLInputElement>$rangeSlider).min;
        $labelFirst.innerHTML = `Current value: ${(<HTMLInputElement>$rangeSlider).min}`;
    });
}
minDefValue();

export {maxDefValue};

// unfinished version with class View

// class View {
    // $range: <HTMLDivElement>;
    // $wrapper:  <HTMLDivElement>;
    // constructor($wrapper: <HTMLDivElement>, $range: <HTMLDivElement>) {
    //     this.$wrapper = $wrapper;
    //     this.$range = $range;
    //     this.init();
    // }
    // init = () => {
    //     this.createSlider();
    // }
    // createSlider() {
    //     this.$range = this.$wrapper.find('js-rage-slider');
    //     const slider = $(`
    //     <div class="wrap">
    //       <input type="range" min="1" max="10" step="1" orient="vertical" class="range-slider js-range-slider" id="range-slider"/>
    //       <div class="ticks">
    //         <span class="tick">1</span>
    //         <span class="tick">2</span>
    //         <span class="tick">3</span>
    //         <span class="tick">4</span>
    //         <span class="tick">5</span>
    //         <span class="tick">6</span>
    //         <span class="tick">7</span>
    //         <span class="tick">8</span>
    //         <span class="tick">9</span>
    //         <span class="tick">10</span>
    //       </div>
    //       <input type="range" min="1" max="10" step="1" value="1" orient="vertical" class="range-slider_second-thumb js-range-slider_second-thumb"/>
    //       <div class="label">
    //         <div class="label_first">Current first value: 5</div>
    //         <div class="label_second">Current second value: 1</div>
    //         <div class="label_max-def-value">10</div>
    //         <div class="label_min-def-value">1</div>
    //       </div>
    //     </div>
    //   `);
    //   this.$range.append(slider);
    // }
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