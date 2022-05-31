import Options from "../component/globalOptions";

interface IObserverModel {
    updateView(): void
}

class Model {
    optionsForView!: Options;
    max!: number;
    min!: number;
    step!: number;
    defaultValue!: number;
    valueSecond!: number;
    isMultiThumb!: boolean;
    showRightProgressBar!: boolean;
    showBubble!: boolean;
    isVertical!: boolean;
    showTicks!: boolean;
    ticksValues!: number[];
    observers!: IObserverModel[];

    constructor(options: Options) {
        this.max = Number(options.max === 0 ? 0 : (options.max || 100));
        this.min = Number(options.min || 0);
        this.step = Number(options.step || 1);
        this.defaultValue = Number(options.defaultValue === 0 ? 0 : (options.defaultValue || 50));
        this.valueSecond = Number(options.valueSecond === 0 ? 0 : (options.valueSecond || 70));
        this.isMultiThumb = options.isMultiThumb || false;
        this.showRightProgressBar = options.showRightProgressBar || false;
        this.showBubble = options.showBubble || false;
        this.isVertical = options.isVertical || false;
        this.showTicks = options.showTicks || false;
        this.ticksValues = [];
        this.observers = [];

        this.optionsForView = {
            max: this.max,
            min: this.min,
            step: this.step,
            defaultValue: this.defaultValue,
            valueSecond: this.valueSecond,
            isMultiThumb: this.isMultiThumb,
            showRightProgressBar: this.showRightProgressBar,
            showBubble: this.showBubble,
            isVertical: this.isVertical,
            showTicks: this.showTicks,
            ticksValues: this.getTicks(),
        };
    }

    init() {
        this.getTicks();
    }

    subscribe(observer: IObserverModel) {
        this.observers.push(observer);
    }
    
    update(newVal: number, isDefault: boolean) {
        if (this.isMultiThumb) {
            this.limitToggle(newVal, isDefault);
        } else {
            this.limitStep(newVal, isDefault);
        }
    }

    updateObservers() {
        this.observers.forEach((observer) => {
            observer.updateView();
        });
    }

    setDefaultValue(value: number) {
        this.defaultValue = value;
    }

    setSecondValue(value: number) {
        this.valueSecond = value;
    }

    // calculate steps and ticks
    calcNearestMaxValueConsideringStep(newValue: number, step: number = this.step): number {
        const roundToMin = newValue - (newValue % step);
        if ((newValue % step) > (step / 2)) {
            return step + roundToMin;
        }
        return roundToMin;
    }
    
    getTicks(min: number = this.min, max: number = this.max, step: number = this.step, 
        showTicks: boolean = this.showTicks): number[] {
        if (step <= 0) {
            step = 1;
        }
        const ticksValues: number[] = [];
        if (!showTicks) {
            return ticksValues;
        }
        const possibleValues = (max - min) / step;

        if (possibleValues <= 11) {
            for (let i: number = min; i <= max; i += step) {
            ticksValues.push(i);
            }
        } else {
        const ticksStep = Math.round(possibleValues / 10);
        let currentValue = min;
        for (let i = 0; i < possibleValues; i += ticksStep) {
            if (currentValue <= max) {
                ticksValues.push(currentValue);
            }
            currentValue += step * ticksStep;
            }
            if (currentValue <= max) {
            ticksValues.push(currentValue);
            }
        }
        if (ticksValues[ticksValues.length - 1] !== max) {
            ticksValues.pop();
            ticksValues.push(max);
        }

        return ticksValues;
    }

    limitToggle(newValue: number, isDefault: boolean) {
        const isInRange = isDefault ? newValue < this.valueSecond : newValue > this.defaultValue;
        if (isInRange) {
          this.limitStep(newValue, isDefault);
        } else {
          this.updateObservers();
        }
    }
    
    limitStep(newValue: number, isDefault: boolean) {
    const isInStep = newValue % this.step === 0;
    if (isDefault) {
        if (isInStep) {
            this.setDefaultValue(newValue);
        } else {
            const value: number = this.calcNearestMaxValueConsideringStep(newValue);
            this.setDefaultValue(value);
            this.updateObservers();
        }
        } else if (isInStep) {
            this.setSecondValue(newValue);
        } else {
            const value: number = this.calcNearestMaxValueConsideringStep(newValue);
            this.setSecondValue(value);
            this.updateObservers();
        }
    }
}

export default Model;