/* eslint-disable @typescript-eslint/no-unused-vars */
import BarView from './subView/barView/barView';
import FormView from './subView/formView/formView';
import StepView from './subView/stepView/stepView';
import TicksView from './subView/ticksView/ticksView';
import ThumbView from './subView/thumbView/thumbView';

// import Observer from '../Observer/Observer';
import Options from '../component/Options';

interface IObserverView {
  updateModel(arg0: number, arg1: boolean): void
}

class View {
  // vars for view
  private parent: HTMLElement | JQuery<HTMLElement>;

  private wrapper!: HTMLDivElement;

  private track!: HTMLDivElement;

  protected input!: HTMLInputElement;

  protected firstInput!: HTMLElement;

  protected secondInput!: HTMLInputElement;

  private ticks: TicksView;

  protected step: StepView;

  private bar: BarView;

  private thumb: ThumbView;

  private form!: FormView;

  options!: Options;

  private observers!: IObserverView[];

  constructor(parent: HTMLElement | JQuery<HTMLElement>, options: Options) {
    this.ticks = new TicksView();
    this.step = new StepView();
    this.bar = new BarView();
    this.thumb = new ThumbView();
    this.form = new FormView();

    this.parent = parent;
    this.options = options;
    this.observers = [];
  }

  subscribe = (observer: IObserverView) => {
    this.observers.push(observer);
  };

  init = () => {      
    this.createWrapper();

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

    if (this.options.isVertical) {
      this.wrapper.classList.add('range-slider_vertical');
    }

    const verticalBubble = this.options.isVertical && this.options.showBubble;

    if (verticalBubble) {
      this.thumb.rotateBubble();
    }
    
    if (this.options.showTicks) {
      const ticks = this.ticks.createTicks(this.options.ticksValues, this.wrapper.offsetWidth);
      const { ticksElement } = ticks;
      const ticksValues = ticks.values;

      this.wrapper.append(ticksElement);

      for (let i = 0; i < ticksValues.length; i += 1) {
        ticksValues[i].element.addEventListener('click', this.onClick(ticksValues[i].value));
      }
    }
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
}

export default View;