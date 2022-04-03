// import { Options } from '../component/options';

const $rangeSlider = document.querySelector(".js-range-slider") as HTMLInputElement;
const $secondRangeSlider = document.querySelector(".js-range-slider_second-thumb") as HTMLInputElement;
const $labelFirst = document.querySelector(".label_first") as HTMLDivElement;
const $labelSecond = document.querySelector(".label_second") as HTMLDivElement;
const $maxDefValue = document.querySelector(".label__max-def-value") as HTMLDivElement;
const $minDefValue = document.querySelector(".label__min-def-value") as HTMLDivElement;

class View {
    max: number;
    min: number;
    constructor(max: number, min: number) {
        this.max = max;
        this.min = min;
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

const view: View = new View(10, 1);
const result: void = view.setMinAndMaxValues();
console.log(result);

const result2 = view.setFirstCurrentValue();
console.log(result2);

const result3 = view.setSecondCurrentValue();
console.log(result3);

const result4 = view.clickOnMaxValue();
console.log(result4);

const result5 = view.clickOnMinValue();
console.log(result5);

export { View };