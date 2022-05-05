/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ticksView from "./subView/ticksView/ticksView";
import stepView from "./subView/stepView/stepView";
import bubbleView from "./subView/bubbleView/bubbleView";
import barView from "./subView/barView/barView";
import Options from "../component/globalOptions";

class View {
    // vars for form
    parent!: HTMLElement;
    form!: HTMLInputElement;
    formDiv!: HTMLElement;
    wrapper!: HTMLElement;
    track!: HTMLDivElement;
    input!: HTMLInputElement;
    secondInput!: HTMLInputElement;
    isMultiThumb!: boolean;
    max!: number;
    min!: number;
    // vars for thumbs
    firstThumb!: HTMLDivElement;
    secondThumb!: HTMLDivElement;
    // imported classes
    ticks!: ticksView;
    step!: stepView;
    bubble!: bubbleView;
    bar!: barView;
    options!: Options;

    constructor(parent: HTMLElement, ticks: ticksView, step: stepView, bubble: bubbleView, bar: barView) {
        this.parent = parent;
        this.ticks = ticks;
        this.step = step;
        this.bubble = bubble;
        this.bar = bar;

        this.options = {
            max: 100,
            min: 0,
            step: 1,
            defaultValue: 50,
            valueSecond: 70,
            isMultiThumb: false,
            showRightProgressBar: false,
            showBubble: true,
            isVertical: false,
            showTicks: false,
            ticksValues: [],
        };
    }

    init(): void {
        this.createForm(this.parent);
        this.createInput(this.isMultiThumb);
        this.setMax(this.isMultiThumb, this.max);
        this.setMin(this.isMultiThumb, this.min);
        // thumbs
        this.createThumb(this.parent, this.isMultiThumb);
        this.bar.createProgressBar(this.track);
        this.options.isMultiThumb,
        this.options.max,
        this.options.min
        this.options.step
    }

    createWrapper = () => {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('range-slider');
        this.setAttributesValue();
        this.parent.append(this.wrapper);
    }

    setAttributesValue = () => {
        if (this.options.isMultiThumb) {
          this.wrapper.setAttribute('first-value', String(this.options.defaultValue));
          this.wrapper.setAttribute('second-value', String(this.options.valueSecond));
        } else {
          this.wrapper.setAttribute('default-value', String(this.options.defaultValue));
        }
    };

    // methods creating form
    createForm(parent: HTMLElement): void {
        this.formDiv = <HTMLElement>(document.createElement('div'));
        this.form.classList.add('range-slider__form');
        parent.append(this.form);
    }

    createInput(isDouble: boolean): void {
        if (isDouble) {
            this.input = document.createElement('input');
            this.input.type = 'range';
            this.input.classList.add('range-slider__input');
            this.input.classList.add('range-slider__input_first');
            this.form.append(this.input);

            this.secondInput = document.createElement('input');
            this.secondInput.type = 'range';
            this.secondInput.classList.add('range-slider__input');
            this.secondInput.classList.add('range-slider__input_second');
            this.form.append(this.secondInput);

        } else {
            this.input = document.createElement('input');
            this.input.type = 'range';
            this.input.classList.add('range-slider__input');
            this.form.append(this.input);
        }
    }

    setValues(isDouble: boolean, value: number, secondValue?: number): void {
        this.input.value = String(value);

        if (isDouble && secondValue) {
            this.secondInput.value = String(secondValue);
        }
    }

    setMax(isDouble: boolean, max: number) {
        this.input.max = String(max);
        if (isDouble) {
            this.secondInput.max = String(max);
        }
    }

    setMin(isDouble: boolean, min: number) {
        this.input.min = String(min);
        if (isDouble) {
            this.secondInput.min = String(min);
        }
    }

    // methods creating thumbs

    createThumb(parent: HTMLElement, isDouble: boolean): void {
        this.firstThumb = document.createElement('div');
        this.firstThumb.className = 'range-slider__thumb';
        parent.append(this.firstThumb);

        if (isDouble) {
            this.firstThumb.classList.add('range-slider__thumb_first');
            this.secondThumb = document.createElement('div');
            this.secondThumb.classList.add('range-slider__thumb');
            this.secondThumb.classList.add('range-slider__thumb_second');
            parent.append(this.secondThumb);
        }
    }

    // set progress bar
    setInput = () => {
        this.setValues(this.options.isMultiThumb, this.options.defaultValue,
          this.options.valueSecond);
        const placeDefault: number = this.bar.calcPercent(
          Number(this.input.value),
          Number(this.input.min),
          Number(this.input.max),
        );
    
        const placeRight: number = this.secondInput
          ? this.bar.calcPercent(
            Number(this.secondInput.value),
            Number(this.secondInput.min),
            Number(this.secondInput.max),
          )
          : NaN;
    
        this.bar.setDefault(this.options.isMultiThumb, placeDefault, placeRight);
        if (this.options.showRightProgressBar && !this.options.isMultiThumb) {
          this.bar.setRight(placeDefault);
        }
    };
}

export default View;