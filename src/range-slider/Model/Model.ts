import Options from '../component/Options';
import { Observer, IObserverModel } from '../Observer/Observer';

// interface IObserverModel {
//   updateView(): void
// }

class Model {
  optionsForView!: Options;

  private max!: number;

  private min!: number;

  private step!: number;

  defaultValue!: number;

  valueSecond!: number;

  private isMultiThumb!: boolean;

  private showBubble!: boolean;

  private isVertical!: boolean;

  private showTicks!: boolean;

  protected ticksValues!: number[];

  private barColor!: string;

  private thumbColor!: string;

  private bubbleColor!: string;

  // private observers!: IObserverModel[];

  observers!: IObserverModel[];

  observer!: Observer;

  observerInModel!: IObserverModel;

  constructor(options: Options) {
    this.max = Number(options.max === 0 ? 0 : (options.max || 100));
    this.min = Number(options.min || 0);
    this.step = Number(options.step || 1);
    this.defaultValue = Number(options.defaultValue === 0 ? 0 : (options.defaultValue || 50));
    this.valueSecond = Number(options.valueSecond === 0 ? 0 : (options.valueSecond || 70));
    this.isMultiThumb = options.isMultiThumb || false;
    this.showBubble = options.showBubble || false;
    this.isVertical = options.isVertical || false;
    this.showTicks = options.showTicks || false;
    this.ticksValues = [];
    this.barColor = options.barColor || 'linear-gradient(180deg, #cf6f7f 0%, #ea6666 100%)';
    this.thumbColor = options.thumbColor || 'linear-gradient(180deg,  #cf6f7f 0%, #ea6666 100%)';
    this.bubbleColor = options.bubbleColor || '#eac966';
    // this.observers = [];
    this.observers = [];
    this.observer = new Observer();

    this.optionsForView = {
      max: this.max,
      min: this.min,
      step: this.step,
      defaultValue: this.defaultValue,
      valueSecond: this.valueSecond,
      isMultiThumb: this.isMultiThumb,
      showBubble: this.showBubble,
      isVertical: this.isVertical,
      showTicks: this.showTicks,
      ticksValues: this.getTicks(),
      barColor: this.barColor,
      thumbColor: this.thumbColor,
      bubbleColor: this.bubbleColor,
    };
  }

  init() {
    this.getTicks();
    this.observer.subscribeInModel(this.observerInModel);
    this.updateObservers();
  }

  // subscribe(observer: IObserverModel) {
  //   this.observers.push(observer);
  // }
    
  update(newVal: number, isDefault: boolean) {
    if (this.isMultiThumb) {
      this.limitToggle(newVal, isDefault);
    } else {
      this.limitStep(newVal, isDefault);
    }
  }

  private updateObservers() {
    this.observers.forEach((observer) => {
      observer.updateView();
    });
  }

  private setDefaultValue(value: number) {
    this.defaultValue = value;
  }

  private setSecondValue(value: number) {
    this.valueSecond = value;
  }

  // calculate steps and ticks
  private calcNearestMinValueConsideringStep(newValue: number, step: number = this.step): number {
    const roundToMin = newValue - (newValue % step);
    const addStepToRoundToMin = (newValue % step) > (step / 2);
    if (addStepToRoundToMin) {
      return step + roundToMin;
    }
    return roundToMin;
  }
    
  getTicks(step: number = this.step, showTicks: boolean = this.showTicks): number[] {
    if (step <= 0) {
      step = 1;
    }
    const ticksValues: number[] = [];
    if (!showTicks) {
      return ticksValues;
    }
    return ticksValues;
  }

  private limitToggle(newValue: number, isDefault: boolean) {
    const isInRange = isDefault ? newValue < this.valueSecond : newValue > this.defaultValue;
    if (isInRange) {
      this.limitStep(newValue, isDefault);
    } else {
      this.updateObservers();
      // this.observer.updateObserversInModel();
    }
  }
    
  private limitStep(newValue: number, isDefault: boolean) {
    const isInStep = newValue % this.step === 0;
    if (isDefault) {
      if (isInStep) {
        this.setDefaultValue(newValue);
      } else {
        const value: number = this.calcNearestMinValueConsideringStep(newValue);
        this.setDefaultValue(value);
        this.updateObservers();
        // this.observer.updateObserversInModel();
      }
    } else if (isInStep) {
      this.setSecondValue(newValue);
    } else {
      const value: number = this.calcNearestMinValueConsideringStep(newValue);
      this.setSecondValue(value);
      this.updateObservers();
      // this.observer.updateObserversInModel();
    }
  }
}

export default Model;