import { Options } from '../component/options';

const $rangeSlider = document.querySelector(".js-range-slider") as HTMLInputElement;
const $secondRangeSlider = document.querySelector(".js-range-slider_second-thumb") as HTMLInputElement;
const $labelFirst = document.querySelector(".label_first") as HTMLDivElement;
const $labelSecond = document.querySelector(".label_second") as HTMLDivElement;
const $maxDefValue = document.querySelector(".label__max-def-value") as HTMLDivElement;
const $minDefValue = document.querySelector(".label__min-def-value") as HTMLDivElement;


class View {
    options: Options;
    constructor(options: Options) {
        this.options = options;
    }
    setMinAndMaxValues() {
        $maxDefValue.innerHTML = `Max default value: ${this.options.max}`;
        $minDefValue.innerHTML = `Min default value: ${this.options.min}`;
    }
    setFirstCurrentValue() {
        $rangeSlider?.addEventListener('input', () => {
            $labelFirst.innerHTML = `Current first value: ${this.options.valueFirst}`;
        });
    }
    setSecondCurrentValue() {
        $secondRangeSlider?.addEventListener('input', () => {
            $labelSecond.innerHTML = `Current second value: ${this.options.valueSecond}`;
        });
    }
    // clickOnMaxValue() {
    //     $maxDefValue?.addEventListener('click', () => {
    //         (<HTMLInputElement>$rangeSlider).value: number;
    //         (<HTMLInputElement>$rangeSlider).value = this.options.max;
    //         $labelFirst.innerHTML = `Current value: ${this.options.max}`;
    //     });
    // }
    // clickOnMinValue() {
    //     $minDefValue?.addEventListener('click', () => {
    //         (<HTMLInputElement>$rangeSlider).value = this.options.min;
    //         $labelFirst.innerHTML = `Current value: ${this.options.min}`;
    //     });
    // }
}

export { View };