import Options from '../component/options';
import {maxDefaultValue} from '../component/const';
import {minDefaultValue}from '../component/const';
const values: Options = {
    max: maxDefaultValue,
    min: minDefaultValue,
}

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
        this.init();
    }
    init() {
        this.setMinAndMaxValues();
        this.setFirstCurrentValue();
        this.setSecondCurrentValue();
        this.clickOnMaxValue();
        this.clickOnMinValue();
    }
    setMinAndMaxValues(): void {
        $maxDefValue.innerHTML = `Max default value: ${this.max}`;
        $minDefValue.innerHTML = `Min default value: ${this.min}`;
    }
    setFirstCurrentValue(): void {
        $rangeSlider.addEventListener('input', () => {
            let maxValue = values.max.toString();
            maxValue = $rangeSlider.max;
            $labelFirst.innerHTML = `Current first value: ${$rangeSlider.value}`;
            // if (parseInt($rangeSlider.value) > this.max) {
            //     let valueAsNumber = parseInt($rangeSlider.value);
            //     console.log(valueAsNumber);
            //     valueAsNumber = this.max;
            //     $labelFirst.innerHTML = `Current first value: ${this.max}`;
            // }
            console.log(maxValue);

            // let maxInputValueAsNumber = parseInt($rangeSlider.max);
            // maxInputValueAsNumber = values.max;
            // console.log(maxInputValueAsNumber);
        });
    }
    setSecondCurrentValue(): void {
        $secondRangeSlider.addEventListener('input', () => {
            $labelSecond.innerHTML = `Current second value: ${$secondRangeSlider.value}`;
        });
    }
    clickOnMaxValue(): void {
        $maxDefValue.addEventListener('click', () => {
            $rangeSlider.valueAsNumber = this.max;
            $labelFirst.innerHTML = `Current first value: ${this.max}`;
        });
    }
    clickOnMinValue(): void {
        $minDefValue.addEventListener('click', () => {
            $rangeSlider.valueAsNumber = this.min;
            $labelSecond.innerHTML = `Current first value: ${this.min}`;
        });
    }
}

export const view: View = new View(values.max, values.min);
console.log(view);

export {View};