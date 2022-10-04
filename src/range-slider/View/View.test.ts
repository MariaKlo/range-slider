/* eslint-disable @typescript-eslint/no-unused-vars */
import View from './View';
import formView from './subView/formView/formView';

import Options from '../component/Options';
import { Observer } from '../Observer/Observer';
import FormView from './subView/formView/formView';

describe('test view', () => {

  let view: View;

  let options: Options;

  let observer: Observer;

  let viewCopy: View;

  let formCopy: FormView;

  const data = {
    max: 100,
    min: 0,
    step: 1,
    defaultValue: 11,
    valueSecond: 23,
    isMultiThumb: true,
    showBubble: true,
    isVertical: true,
    showTicks: true,
    barColor: '#000000',
    thumbColor: 'green',
    bubbleColor: 'yellow',
  };

  beforeEach(() => {
    view = new View(document.body, data);
    view.init();
    viewCopy = new View(document.body, data);
    viewCopy.init();
    formCopy = new formView();

  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('wrapper is created', () => {
    const viewCopyProto = Object.getPrototypeOf(viewCopy);
    jest.spyOn(document, 'createElement');
    // viewCopyProto.createWrapper();
    expect(document.createElement).not.toHaveBeenCalledTimes(1);

    jest.spyOn(viewCopyProto.parent, 'append');
    // viewCopyProto.createWrapper();
    expect(viewCopyProto.parent.append).not.toHaveBeenCalledTimes(1);
  });

  test('attributes are set for single slider', () => {
    const viewCopyProto = Object.getPrototypeOf(viewCopy);
    view.options.defaultValue = -100;
    view.options.isMultiThumb = false;
    viewCopyProto.setAttributesValue();
    expect(viewCopyProto.wrapper.getAttribute('default-value')).toBe('-100');
  });

  test('attributes are set for double slider', () => {
    const viewCopyProto = Object.getPrototypeOf(viewCopy);
    data.isMultiThumb = true;
    data.defaultValue = 11;
    viewCopyProto.setAttributesValue();
    expect(viewCopyProto.wrapper.getAttribute('first-value')).toBe('11');
    expect(viewCopyProto.wrapper.getAttribute('second-value')).toBe('23');
  });

  test('one bubble is rotated when slider is vertical', () => {
    options = {
      ...data,
      isVertical: true,
      showBubble: true,
    };
    jest.spyOn(view.thumb, 'rotateBubble');
    view.init();
    expect(view.thumb.rotateBubble).toHaveBeenCalled();
  });

  test('two bubbles are rotated when slider is vertical', () => {
    options = {
      ...data,
      isMultiThumb: true,
      isVertical: true,
      showBubble: true,
    };
    jest.spyOn(view.thumb, 'rotateBubble');
    view.init();
    expect(view.thumb.rotateBubble).toHaveBeenCalled();
  });

  test('mousedown on ProgressBar should call clickOnBar function', () => {
    const viewCopyProto = Object.getPrototypeOf(viewCopy);
    jest.spyOn(viewCopyProto, 'clickOnBar');
    viewCopyProto.bar.bar.dispatchEvent(new MouseEvent('mousedown'));
    expect(viewCopyProto.clickOnBar).toHaveBeenCalled();
  });

  test('mousedown on Track should call clickOnBar function', () => {
    const viewCopyProto = Object.getPrototypeOf(viewCopy);
    jest.spyOn(viewCopyProto, 'clickOnBar');
    viewCopyProto.track.dispatchEvent(new MouseEvent('mousedown'));
    expect(viewCopyProto.clickOnBar).toHaveBeenCalled();
  });

  test('default value are changed by click', () => {
    const viewCopyProto = Object.getPrototypeOf(viewCopy);
    data.isMultiThumb = false;
    viewCopyProto.onClick(5)();
    expect(data.defaultValue).toBe(5);
  });

  test('input event calls update method with default settings', () => {
    const viewCopyProto = Object.getPrototypeOf(viewCopy);
    const formCopyProto = Object.getPrototypeOf(formCopy);
    jest.spyOn(viewCopyProto, 'update');
    formCopyProto.createInput(false);
    viewCopyProto.onInput(true)();
    expect(viewCopyProto.update).toHaveBeenCalledWith(50, true);
  });

  test('input event calls update method with non-default settings', () => {
    const viewCopyProto = Object.getPrototypeOf(viewCopy);
    const formCopyProto = Object.getPrototypeOf(formCopy);
    jest.spyOn(viewCopyProto, 'update');
    formCopyProto.createInput(true);
    viewCopyProto.onInput(false)();
    expect(viewCopyProto.update).toHaveBeenCalledWith(50, false);
  });

  test('update second event input', () => {
    const viewCopyProto = Object.getPrototypeOf(viewCopy);
    jest.spyOn(viewCopyProto, 'eventInput');
    jest.spyOn(viewCopyProto, 'onInput');
    options.isMultiThumb = true;
    document.dispatchEvent(new MouseEvent('input'));
    viewCopyProto.eventInput();
    expect(viewCopyProto.eventInput).toHaveBeenCalled();
  });

  test('updateObservers work correctly with updateView', () => {
    const viewCopyProto = Object.getPrototypeOf(viewCopy);
    const formCopyProto = Object.getPrototypeOf(formCopy);
    formCopyProto.createForm(document.body);
    formCopyProto.createInput(true);
    const observers = {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      updateModel(_arg0: number, _arg1: boolean): void {},
    };
    observer.subscribeInView(observers);
    jest.spyOn(view.observers[0], 'updateModel');
    viewCopyProto.update(30, true);
    view.observers[0].updateModel(30, true);
    expect(view.observers[0].updateModel).toHaveBeenCalled();
  });

  test('get coords for vertical slider', () => {
    const viewCopyProto = Object.getPrototypeOf(viewCopy);
    options = {
      ...data,
      min: 10,
      max: 100,
      isVertical: true,
    };
    const coords = {
      bottom: 516,
      top: 114,
      height: 402,
      width: 0,
      x: 0,
      y: 0,
      left: 0,
      right: 0,
      toJSON: () => '',
    };
    const element = new MouseEvent('click', { clientY: 265 });
    expect(viewCopyProto.getValueByCoords(element, coords)).toBe(38);
  });

  // test('show warning for max and min values', () => {
  //   const viewCopyProto = Object.getPrototypeOf(viewCopy);
  //   // jest.spyOn(document, 'append');
  //   viewCopyProto.options.max = 20;
  //   viewCopyProto.options.min = 30;
  //   viewCopyProto.options.isVertical = false;
  //   const warning = document.createElement('p');
  //   warning.classList.add('range-slider__warning');
  //   warning.innerText = 'Your min value is bigger than max value or equal to it. Please, change your values';
  //   viewCopyProto.showWarningsForMaxAndMin();
  //   expect(viewCopyProto.wrapper.append).toHaveBeenCalledWith(warning);

  //   viewCopyProto.options.max = 20;
  //   viewCopyProto.options.min = 30;
  //   viewCopyProto.options.isVertical = true;
  //   const warningVertical = document.createElement('p');
  //   warningVertical.classList.add('range-slider__warning');
  //   warningVertical.innerText = 'Your min value is bigger than max value or equal to it. Please, change your values';
  //   warningVertical.classList.add('range-slider__warning_vertical');
  //   viewCopyProto.showWarningsForMaxAndMin();
  //   expect(viewCopyProto.wrapper.append).toHaveBeenCalledWith(warningVertical);
  // });
});