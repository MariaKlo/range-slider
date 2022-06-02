/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ticksView from "./subView/ticksView/ticksView";
import stepView from "./subView/stepView/stepView";
import bubbleView from "./subView/bubbleView/bubbleView";
import barView from "./subView/barView/barView";
import thumbView from './subView/thumbView/thumbView';
import Options from "../component/globalOptions";

interface IObserverView {
  updateModel(arg0: number, arg1: boolean): void
}

class View {
  // vars for form
  parent: HTMLElement;
  formDiv!: HTMLElement;
  wrapper!: HTMLDivElement;
  track!: HTMLDivElement;
  input!: HTMLInputElement;
  secondInput!: HTMLInputElement;
  isMultiThumb!: boolean;
  max!: number;
  min!: number;
  // vars for thumbs
  firstThumb!: HTMLDivElement;
  secondThumb!: HTMLDivElement;
  thumbOut!: HTMLDivElement;
  thumbOutSecond!: HTMLDivElement;
  firstValue!: number;
  secondValue!: number;
  // imported classes
  ticks: ticksView;
  step: stepView;
  bubble: bubbleView;
  bar: barView;
  thumb: thumbView;
  options!: Options;
  observers!: IObserverView[];

  constructor(parent: HTMLElement, ticks: ticksView, step: stepView, bubble: bubbleView, bar: barView,
    thumb: thumbView) {
    this.parent = parent;
    this.ticks = ticks;
    this.step = step;
    this.bubble = bubble;
    this.bar = bar;
    this.thumb = thumb;

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

    this.observers = [];
  }

    subscribe = (observer: IObserverView) => {
      this.observers.push(observer);
    };

    init = (parent: HTMLElement, isMultiThumb: boolean, max: number, min: number) => {      
      this.createWrapper();
      this.createForm(parent);
      this.createInput(isMultiThumb);
      this.setMin(isMultiThumb, min);
      this.setMax(isMultiThumb, max);

      this.createTrack(this.wrapper);
      this.bar.createProgressBar(this.track);
      this.bubble.createThumbWrapper(this.track, this.isMultiThumb);
      this.bubble.init(
        this.parent,
        this.options.isMultiThumb,
        this.options.showBubble,
        this.options.defaultValue,
        this.options.valueSecond,
      );
  
      this.setInput();
      this.eventInput();
      this.bar.bar.onmousedown = (elem) => {
        this.clickOnBar(elem);
      };
      this.track.onmousedown = (elem) => {
        this.clickOnBar(elem);
      };
      this.eventHover();
      this.eventActive();
  
      if (this.options.isVertical) {
        this.wrapper.classList.add('range-slider_vertical');
      }
      if (this.options.isVertical && this.options.showBubble) {
        this.bubble.rotateBubble();
      }
      const ticks = this.ticks.createTicks(this.options.ticksValues, this.wrapper.offsetWidth);
      const { ticksElement } = ticks;
      this.wrapper.append(ticksElement);

      const ticksValues = ticks.values;
      for (let i = 0; i < ticksValues.length; i += 1) {
        ticksValues[i].element.addEventListener('click', this.onClick(ticksValues[i].value));
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

    createTrack(parent: HTMLDivElement): void {
      this.track = document.createElement('div');
      this.track.classList.add('range-slider__track');
      parent.append(this.track);
    }

    onInput = (isDefault: boolean) => {
      if (isDefault) {
        return () => {
          this.update(Number(this.input.value), true);
        };
      }
      this.createInput(true);
      return () => {
        this.update(Number(this.secondInput!.value), isDefault);
      };
    };
    
    eventInput = () => {
      this.input.addEventListener('input', this.onInput(true));
      if (this.options.isMultiThumb) {
        this.createInput(true);
        this.secondInput!.addEventListener('input', this.onInput(false));
      }
    };
    
    getValueByCoords = (element: MouseEvent, coords: DOMRect) => {
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
  
    clickOnBar = (elem: MouseEvent) => {
      const coords: DOMRect = this.track.getBoundingClientRect();
      const newValue = this.getValueByCoords(elem, coords);
      this.onClick(newValue)();
    };
    
    update = (newValue: number, isDefault: boolean) => {
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
      this.bubble.setBubbleValue(this.options.isMultiThumb,
        this.options.defaultValue, this.options.valueSecond);
    };
    
    onClick = (newValue: number) => () => {
      const halfOfBar: number = (this.options.valueSecond + this.options.defaultValue) / 2;
      const isRightBar: boolean = this.options.isMultiThumb && newValue > halfOfBar;
      if (isRightBar) {
        this.update(newValue, false);
      } else {
        this.update(newValue, true);
      }
    };
    
    onMouseOverOut = (bubbleOut: HTMLElement | undefined) => () => {
      if (this.options.showBubble && bubbleOut) {
        bubbleOut.classList.toggle('range-slider__bubble_big');
      }
    };
    
    eventHover = () => {
      this.input.addEventListener('mouseover',
        this.onMouseOverOut(this.firstThumb));
      this.input.addEventListener('mouseout',
        this.onMouseOverOut(this.firstThumb));
      if (this.options.isMultiThumb) {
        this.createInput(true);
        this.secondInput!.addEventListener('mouseover',
          this.onMouseOverOut(this.secondThumb));
        this.secondInput!.addEventListener('mouseout',
          this.onMouseOverOut(this.secondThumb));
      }
    };
    
    onMouseUpDown = (isDefault: boolean) => {
      if (isDefault) {
        return () => {
          this.thumb.firstThumb.classList.toggle('range-slider__thumb_active');
        };
      }
      return () => {
        this.thumb.secondThumb.classList.toggle('range-slider__thumb_active');
      };
    };
    
    eventActive = () => {
      this.input.addEventListener('mousedown', this.onMouseUpDown(true));
      this.input.addEventListener('mouseup', this.onMouseUpDown(true));
      if (this.options.isMultiThumb) {
        this.createInput(true);
        this.secondInput!.addEventListener('mousedown', this.onMouseUpDown(false));
        this.secondInput!.addEventListener('mouseup', this.onMouseUpDown(false));
      }
    };

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createForm(_parent: HTMLElement): void {
      this.formDiv = <HTMLElement>(document.createElement('div'));
      this.formDiv.classList.add('range-slider__form');
      this.wrapper.append(this.formDiv);
    }

    createInput(isDouble: boolean): void {
      if (isDouble) {
        this.input = document.createElement('input');
        this.input.type = 'range';
        this.input.classList.add('range-slider__input');
        this.input.classList.add('range-slider__input_first');
        this.formDiv.append(this.input);

        this.secondInput = document.createElement('input');
        this.secondInput.type = 'range';
        this.secondInput.classList.add('range-slider__input');
        this.secondInput.classList.add('range-slider__input_second');
        this.formDiv.append(this.secondInput);

      } else {
        this.input = document.createElement('input');
        this.input.type = 'range';
        this.input.classList.add('range-slider__input');
        this.formDiv.append(this.input);
      }
    }

    setValues(isDouble: boolean, value: number, secondValue?: number): void {
      this.input.value = String(value);
      if (isDouble && secondValue !== undefined) {
        this.createInput(true);
        this.secondInput.value = String(secondValue);
      }
    }

    setMax(isDouble: boolean, max: number) {
      this.input.max = String(max);
      if (isDouble) {
        this.secondInput!.max = String(max);
      }
    }

    setMin(isDouble: boolean, min: number) {
      this.input.min = String(min);
      if (isDouble) {
        this.secondInput!.min = String(min);
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