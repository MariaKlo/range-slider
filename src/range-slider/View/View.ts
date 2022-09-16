/* eslint-disable @typescript-eslint/no-unused-vars */
import BarView from './subView/barView/barView';
import FormView from './subView/formView/formView';
// import StepView from './subView/stepView/stepView';
import TicksView from './subView/ticksView/ticksView';
import ThumbView from './subView/thumbView/thumbView';

import { Observer, IObserverView } from '../Observer/Observer';
import Options from '../component/Options';

class View {
  // vars for view
  private parent: HTMLElement | JQuery<HTMLElement>;

  private wrapper!: HTMLDivElement;

  private warning!: HTMLElement;

  private track!: HTMLDivElement;

  protected input!: HTMLInputElement;

  protected firstInput!: HTMLElement;

  protected secondInput!: HTMLInputElement;

  private ticks: TicksView;

  // protected step: StepView;

  private bar: BarView;

  private thumb: ThumbView;

  private form!: FormView;

  options!: Options;

  observers!: IObserverView[];

  observer!: Observer;

  observerInView!: IObserverView;

  constructor(parent: HTMLElement | JQuery<HTMLElement>, options: Options) {
    this.ticks = new TicksView();
    // this.step = new StepView();
    this.bar = new BarView();
    this.thumb = new ThumbView();
    this.form = new FormView();
    this.observer = new Observer();

    this.parent = parent;
    this.options = options;
    this.observers = [];
  }

  init = () => {      
    this.createWrapper();

    this.observer.subscribeInView(this.observerInView);

    this.form.init(
      this.wrapper,
      this.options.isMultiThumb,
      this.options.min,
      this.options.max,
    );

    this.createTrack(this.wrapper);
    this.bar.createProgressBar(this.track);
    this.bar.changeBarColor(this.options.barColor);
    this.thumb.init(
      this.track,
      this.options.isMultiThumb,
      this.options.showBubble,
      this.options.defaultValue,
      this.options.valueSecond,
    );

    this.thumb.changeThumbColor(this.options.thumbColor, this.options.isMultiThumb);
    this.thumb.changeBubbleColor(this.options.bubbleColor, this.options.isMultiThumb);

    this.setInput();
    this.eventInput();
    this.bar.bar.onmousedown = (elem) => {
      this.clickOnBar(elem);
    };
    this.track.onmousedown = (elem) => {
      this.clickOnBar(elem);
    };

    this.setStep();

    if (this.options.isVertical) {
      this.wrapper.classList.add('range-slider_vertical');
    }

    const verticalBubble = this.options.isVertical && this.options.showBubble;

    if (verticalBubble) {
      this.thumb.rotateBubble();
    }
    
    if (this.options.showTicks) {
      const max: number = this.options.max;
      const count = Math.floor(max / 10);
      const arr: number[] = [];
      for (let i = this.options.min; i <= max; i += count) {
        arr.push(i);
      }

      const ticks = this.ticks.createTicks(arr, this.wrapper.offsetWidth);
      const { ticksElement } = ticks;
      const ticksValues = ticks.values;

      this.wrapper.append(ticksElement);

      for (let i = 0; i < ticksValues.length; i += 1) {
        ticksValues[i].element.addEventListener('click', this.onClick(ticksValues[i].value));
      }
    }
    this.showWarningsForMaxAndMin();
    this.showWarningForWrongDefaultAndMaxValues();
    this.showWarningForWrongDefaultAndMinValues();
    this.showWarningSecondValIsLessThanFirst();
  };

  private createWrapper = () => {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('range-slider');
    this.setAttributesValue();
    this.parent.append(this.wrapper);
  };

  private createTrack(parent: HTMLElement): void {
    this.track = document.createElement('div');
    this.track.classList.add('range-slider__track');
    parent.append(this.track);
  }

  private setAttributesValue = () => {
    if (this.options.isMultiThumb) {
      this.wrapper.setAttribute('first-value', String(this.options.defaultValue));
      this.wrapper.setAttribute('second-value', String(this.options.valueSecond));
    } else {
      this.wrapper.setAttribute('default-value', String(this.options.defaultValue));
    }
  };

  private setStep() {
    this.form.input.setAttribute('step', String(this.options.step));
    if (this.options.isMultiThumb) {
      this.form.secondInput.setAttribute('step', String(this.options.step));
    }
  }

  setInput = () => {
    this.form.setValues(this.options.isMultiThumb, this.options.defaultValue,
      this.options.valueSecond);
    const placeDefault: number = this.bar.calcPercent(
      Number(this.form.input.value),
      Number(this.form.input.min),
      Number(this.form.input.max),
    );

    const placeRight: number = this.form.secondInput
      ? this.bar.calcPercent(
        Number(this.form.secondInput.value),
        Number(this.form.secondInput.min),
        Number(this.form.secondInput.max),
      )
      : NaN;

    this.bar.setDefault(this.options.isMultiThumb, placeDefault, placeRight);
    this.thumb.placeThumb(this.options.isMultiThumb, placeDefault, placeRight);
  };

  private onInput = (isDefault: boolean) => {
    if (isDefault) {
      return () => {
        this.update(Number(this.form.input.value), true);
      };
    }
    return () => {
      this.update(Number(this.form.secondInput.value), isDefault);
    };
  };
    
  private eventInput = () => {
    this.form.input.addEventListener('input', this.onInput(true));
    if (this.options.isMultiThumb) {
      this.form.secondInput.addEventListener('input', this.onInput(false));
    }
  };
    
  private getValueByCoords = (element: MouseEvent, coords: DOMRect) => {
    let length: number = coords.width;
    const range: number = this.options.max - this.options.min;
    let currentPosition: number = element.clientX - coords.left;
    if (this.options.isVertical) {
      currentPosition = element.clientY - coords.top;
      length = coords.height;
    }
    const percent: number = (currentPosition / length) * 100;
    const coordsValue: number = Math.round(this.options.min + ((range) * percent) / 100);
    return coordsValue;
  };
  
  private clickOnBar = (elem: MouseEvent) => {
    const coords: DOMRect = this.track.getBoundingClientRect();
    const newValue = this.getValueByCoords(elem, coords);
    this.onClick(newValue)();
  };
    
  private update = (newValue: number, isDefault: boolean) => {
    if (isDefault) {
      this.options.defaultValue = newValue;
    } else {
      this.options.valueSecond = newValue;
    }
    this.setInput();
    this.observers.forEach((observer) => {
      observer.updateModel(newValue, isDefault);
    });
    this.setAttributesValue();
    this.thumb.writeBubbleValue(this.options.isMultiThumb,
      this.options.defaultValue, this.options.valueSecond);
  };
    
  private onClick = (newValue: number) => () => {
    this.update(newValue, true);
  };

  private showWarningsForMaxAndMin() {
    if (this.options.min >= this.options.max) {
      this.warning = document.createElement('p');
      this.warning.classList.add('range-slider__warning');
      this.warning.innerText = 'Your min value is bigger than max value or equal to it. Please, change your values';
      this.wrapper.append(this.warning);
      if (this.options.isVertical) {
        this.warning.classList.add('range-slider__warning_vertical');
      }
    }
  }

  private showWarningForWrongDefaultAndMaxValues() {
    if (this.options.defaultValue > this.options.max) {
      this.warning = document.createElement('p');
      this.warning.classList.add('range-slider__warning');
      this.warning.innerText = 'Your default value is bigger than max value. Please, change your values';
      this.wrapper.append(this.warning);
      if (this.options.isVertical) {
        this.warning.classList.add('range-slider__warning_vertical');
      }
    }
    if (this.options.isMultiThumb) {
      if (this.options.valueSecond > this.options.max) {
        this.warning = document.createElement('p');
        this.warning.classList.add('range-slider__warning');
        this.warning.innerText = 'Your second value is bigger than max value. Please, change your values';
        this.wrapper.append(this.warning);
        if (this.options.isVertical) {
          this.warning.classList.add('range-slider__warning_vertical');
        }
      }
    }
  }

  private showWarningForWrongDefaultAndMinValues() {
    if (this.options.defaultValue < this.options.min) {
      this.warning = document.createElement('p');
      this.warning.classList.add('range-slider__warning');
      this.warning.innerText = 'Your default value is less than min value. Please, change your values';
      this.wrapper.append(this.warning);
      if (this.options.isVertical) {
        this.warning.classList.add('range-slider__warning_vertical');
      }
    }
    if (this.options.isMultiThumb) {
      if (this.options.valueSecond < this.options.min) {
        this.warning = document.createElement('p');
        this.warning.classList.add('range-slider__warning');
        this.warning.innerText = 'Your second value is less than min value. Please, change your values';
        this.wrapper.append(this.warning);
        if (this.options.isVertical) {
          this.warning.classList.add('range-slider__warning_vertical');
        }
      }
    }
  }

  private showWarningSecondValIsLessThanFirst() {
    if (this.options.isMultiThumb && this.options.defaultValue > this.options.valueSecond) {
      this.warning = document.createElement('p');
      this.warning.classList.add('range-slider__warning');
      this.warning.innerText = 'Your second value is less than first value. Please, change your values';
      this.wrapper.append(this.warning);
      if (this.options.isVertical) {
        this.warning.classList.add('range-slider__warning_vertical');
      }
    }
  }
}

export default View;