/* eslint-disable @typescript-eslint/no-unused-vars */
import Options from '../component/options';
const values: Options = {
    max: 40,
    min: 1,
    value: 7
}

const $rangeSlider = document.querySelector(".js-range-slider") as HTMLInputElement;
const $secondRangeSlider = document.querySelector(".js-range-slider_second-thumb") as HTMLInputElement;
const $labelFirst = document.querySelector(".label_first") as HTMLDivElement;
const $labelSecond = document.querySelector(".label_second") as HTMLDivElement;
const $maxDefValue = document.querySelector(".label__max-def-value") as HTMLDivElement;
const $minDefValue = document.querySelector(".label__min-def-value") as HTMLDivElement;

// const maxDefaultValue = 10;
// const minDefaultValue = 1;

class View {
    max: number;
    min: number;
    constructor(max: number, min: number) {
        this.max = max;
        this.min = min;
        this.init();
    }
    init() {
        this.setMinAndMaxValues();
        this.setFirstCurrentValue();
        this.setSecondCurrentValue();
        this.clickOnMaxValue();
        this.clickOnMinValue();
    }
    setMinAndMaxValues() {
        $maxDefValue.innerHTML = `Max default value: ${this.max}`;
        $minDefValue.innerHTML = `Min default value: ${this.min}`;
    }
    setFirstCurrentValue(): void {
        $rangeSlider.addEventListener('input', () => {
            $labelFirst.innerHTML = `Current first value: ${$rangeSlider.value}`;
        });
    }
    setSecondCurrentValue(): void {
        $secondRangeSlider.addEventListener('input', () => {
            $labelSecond.innerHTML = `Current second value: ${$secondRangeSlider.value}`;
        });
    }
    clickOnMaxValue(): void {
        $maxDefValue?.addEventListener('click', () => {
            $rangeSlider.valueAsNumber = this.max;
            $labelFirst.innerHTML = `Current first value: ${this.max}`;
        });
    }
    clickOnMinValue(): void {
        $minDefValue?.addEventListener('click', () => {
            $rangeSlider.valueAsNumber = this.min;
            $labelSecond.innerHTML = `Current first value: ${this.min}`;
        });
    }
}

const view: View = new View(values.max, values.min);
console.log(view);

export default { View };