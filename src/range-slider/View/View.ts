import Options from '../component/options';
import {maxDefaultValue} from '../component/const';
import {minDefaultValue}from '../component/const';
import {defaultStep}from '../component/const';
const values: Options = {
    max: maxDefaultValue,
    min: minDefaultValue,
    step: defaultStep
}

const $rangeSlider = document.querySelector(".js-range-slider") as HTMLInputElement;
const $secondRangeSlider = document.querySelector(".js-range-slider_second-thumb") as HTMLInputElement;
const $labelFirst = document.querySelector(".label_first") as HTMLDivElement;
const $labelSecond = document.querySelector(".label_second") as HTMLDivElement;
const $maxDefValue = document.querySelector(".label__max-def-value") as HTMLDivElement;
const $minDefValue = document.querySelector(".label__min-def-value") as HTMLDivElement;
const $step = document.querySelector(".label__step") as HTMLDivElement;

class View {
    max: number;
    min: number;
    constructor(max: number, min: number) {
        this.max = max;
        this.min = min;
        this.init();
    }
    init() {
        this.setMinAndMaxValuesForLabels();
        this.setMaxAndMinValuesForFirstInput();
        this.setMaxAndMinValuesForSecondInput();
        this.setFirstCurrentValue();
        this.setSecondCurrentValue();
        this.clickOnMaxValueForFirstInput();
        this.clickOnMinValueForSecondInput();
        this.setStepForFirstInput();
        this.setStepForSecondInput();
    }
    setMinAndMaxValuesForLabels(): void {
        $maxDefValue.innerHTML = `Max default value: ${this.max}`;
        $minDefValue.innerHTML = `Min default value: ${this.min}`;
    }
    setMaxAndMinValuesForFirstInput(): void {
        $rangeSlider.addEventListener('input', () => {
            const maxValue = values.max.toString();
            $rangeSlider.max = maxValue;
            const minValue = values.min.toString();
            $rangeSlider.min = minValue;
        });
    }
    setMaxAndMinValuesForSecondInput(): void {
        $secondRangeSlider.addEventListener('input', () => {
            const maxValue = values.max.toString();
            $secondRangeSlider.max = maxValue;
            const minValue = values.min.toString();
            $secondRangeSlider.min = minValue;
        });
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
    clickOnMaxValueForFirstInput(): void {
        $maxDefValue.addEventListener('click', () => {
            $rangeSlider.valueAsNumber = this.max;
            $labelFirst.innerHTML = `Current first value: ${this.max}`;
        });
    }
    clickOnMinValueForSecondInput(): void {
        $minDefValue.addEventListener('click', () => {
            $secondRangeSlider.valueAsNumber = this.min;
            $labelSecond.innerHTML = `Current second value: ${this.min}`;
        });
    }
    setStepForFirstInput(): void {
        $rangeSlider.addEventListener('input', () => {
            const steps = values.step.toString();
            $rangeSlider.step = steps;
            $step.innerHTML = `Step of slider: ${$rangeSlider.step}`;
        });
    }
    setStepForSecondInput(): void {
        $secondRangeSlider.addEventListener('input', () => {
            const steps = values.step.toString();
            $secondRangeSlider.step = steps;
            $step.innerHTML = `Step of slider: ${$secondRangeSlider.step}`;
        });
    }
}

export const view: View = new View(values.max, values.min);
console.log(view);

export {View};