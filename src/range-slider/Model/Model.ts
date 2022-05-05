import Options from "../component/globalOptions";

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
            ticksValues: this.ticksValues
        };
    }
}

export default Model;