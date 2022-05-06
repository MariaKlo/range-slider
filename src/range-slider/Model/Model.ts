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
    rightProgressBar!: boolean;
    showBubble!: boolean;
    isVertical!: boolean;
    showTicks!: boolean;
    ticksValues!: number[];
    observers!: IObserverModel[];

    constructor(options: Options) {
        this.max = Number(options.max || 100);
        this.min = Number(options.min || 0);
        this.step = Number(options.step || 1);
        this.defaultValue = Number(options.defaultValue || 50);
        this.valueSecond = Number(options.valueSecond || 70);
        this.isMultiThumb = options.isMultiThumb || false;
        this.rightProgressBar = options.showRightProgressBar || false;
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
            showRightProgressBar: this.rightProgressBar,
            showBubble: this.showBubble,
            isVertical: this.isVertical,
            showTicks: this.showTicks,
            ticksValues: this.getScale(),
        };
    }

    subscribe(observer: IObserverModel) {
        this.observers.push(observer);
    }

    init() {
        this.getScale();
    }
    
    update(newVal: number, isDefault: boolean) {
        if (this.isMultiThumb) {
            this.limitToggle(newVal, isDefault);
        } else {
            this.limitStep(newVal, isDefault);
        }
    }
    
    getScale(min: number = this.min, max: number = this.max, step: number = this.step, 
        showTicks: boolean = this.showTicks): number[] {
        if (step <= 0) {
            step = 1;
        }
        const scaleValues: number[] = [];
        if (!showTicks) {
            return scaleValues;
        }
        const possibleValues = (max - min) / step;

        if (possibleValues <= 11) {
            for (let i: number = min; i <= max; i += step) {
            scaleValues.push(i);
            }
        } else {
        const scaleStep = Math.round(possibleValues / 10);
        let currentValue = min;
        for (let i = 0; i < possibleValues; i += scaleStep) {
            if (currentValue <= max) {
                scaleValues.push(currentValue);
            }
            currentValue += step * scaleStep;
            }
            if (currentValue <= max) {
            scaleValues.push(currentValue);
            }
    }
    if (scaleValues[scaleValues.length - 1] !== max) {
        scaleValues.pop();
        scaleValues.push(max);
    }

    return scaleValues;
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
            const value: number = this.calcNearest(newValue);
            this.setDefaultValue(value);
            this.updateObservers();
        }
        } else if (isInStep) {
            this.setSecondValue(newValue);
        } else {
            const value: number = this.calcNearest(newValue);
            this.setSecondValue(value);
            this.updateObservers();
        }
    }

    setDefaultValue(value: number) {
        this.defaultValue = value;
    }

    setSecondValue(value: number) {
        this.valueSecond = value;
    }

    updateObservers() {
        this.observers.forEach((observer) => {
            observer.updateView();
        });
    }

    calcNearest(newValue: number, step: number = this.step): number {
        const roundToMin = newValue - (newValue % step);
        if ((newValue % step) > (step / 2)) {
            return step + roundToMin;
        }
        return roundToMin;
    }
}

export default Model;