// import { Options } from '../component/options';

const $rangeSlider = document.querySelector(".js-range-slider") as HTMLInputElement;
const $secondRangeSlider = document.querySelector(".js-range-slider_second-thumb") as HTMLInputElement;
const $labelFirst = document.querySelector(".label_first") as HTMLDivElement;
const $labelSecond = document.querySelector(".label_second") as HTMLDivElement;
const $maxDefValue = document.querySelector(".label__max-def-value") as HTMLDivElement;
const $minDefValue = document.querySelector(".label__min-def-value") as HTMLDivElement;


/**
 * Try Options.max, Options.min for constructor
 * 
 */

class View {
    max?: number;
    min?: number;
    // valueFirst?: number;
    // valueSecond?: number;
    // options: Options;
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
            //   (<HTMLInputElement>$rangeSlider).value: number;
            const valueOfInput =  $rangeSlider.value;
            let valueAsNumber: number | undefined = +valueOfInput;
            valueAsNumber = this.max;
            $labelFirst.innerHTML = `Current first value: ${valueAsNumber}`;
        });
    }
    // clickOnMinValue() {
    //     $minDefValue?.addEventListener('click', () => {
    //         (<HTMLInputElement>$rangeSlider).value = this.options.min;
    //         $labelFirst.innerHTML = `Current value: ${this.options.min}`;
    //     });
    // }
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

export { View };