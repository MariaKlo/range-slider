/* eslint-disable @typescript-eslint/no-unused-vars */
import View from './View';
import formView from './subView/formView/formView';

import Options from '../component/Options';
import { Observer } from '../Observer/Observer';

describe('test view', () => {
  let view: View;
  let options: Options;
  let observer: Observer;

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
    ticksValues: [0, 50, 100],
    barColor: '#000000',
    thumbColor: 'green',
    bubbleColor: 'yellow',
  };

  const viewCopy = new View(document.body, data);
  const viewCopyProto = Object.getPrototypeOf(viewCopy);

  const formCopy = new formView();
  const formCopyProto = Object.getPrototypeOf(formCopy);

  beforeEach(() => {
    view = new View(document.body, data);
    view.init();
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('wrapper is created', () => {
    jest.spyOn(document, 'createElement');
    viewCopyProto.createWrapper();
    expect(document.createElement).toHaveBeenCalledTimes(1);
    jest.spyOn(viewCopyProto.parent, 'append');
    viewCopyProto.createWrapper();
    expect(viewCopyProto.parent.append).toHaveBeenCalledTimes(1);
  });

  test('attributes are set for single slider', () => {
    data.defaultValue = -100;
    data.isMultiThumb = false;
    viewCopyProto.setAttributesValue();
    expect(viewCopyProto.wrapper.getAttribute('default-value')).toBe('-100');
  });

  test('attributes are set for double slider', () => {
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
    jest.spyOn(viewCopyProto.thumb, 'rotateBubble');
    view.init();
    expect(viewCopyProto.thumb.rotateBubble).toHaveBeenCalled();
  });

  test('two bubbles are rotated when slider is vertical', () => {
    options = {
      ...data,
      isMultiThumb: true,
      isVertical: true,
      showBubble: true,
    };
    jest.spyOn(viewCopyProto.thumb, 'rotateBubble');
    view.init();
    expect(viewCopyProto.thumb.rotateBubble).toHaveBeenCalled();
  });

  test('mousedown on ProgressBar should call clickOnBar function', () => {
    jest.spyOn(viewCopyProto, 'clickOnBar');
    viewCopyProto.bar.bar.dispatchEvent(new MouseEvent('mousedown'));
    expect(viewCopyProto.clickOnBar).toHaveBeenCalled();
  });

  test('mousedown on Track should call clickOnBar function', () => {
    jest.spyOn(viewCopyProto, 'clickOnBar');
    viewCopyProto.track.dispatchEvent(new MouseEvent('mousedown'));
    expect(viewCopyProto.clickOnBar).toHaveBeenCalled();
  });

  test('default value are changed by click', () => {
    data.isMultiThumb = false;
    viewCopyProto.onClick(5)();
    expect(data.defaultValue).toBe(5);
  });

  test('input event calls update method with default settings', () => {
    jest.spyOn(viewCopyProto, 'update');
    formCopyProto.createInput(false);
    viewCopyProto.onInput(true)();
    expect(viewCopyProto.update).toHaveBeenCalledWith(50, true);
  });

  test('input event calls update method with non-default settings', () => {
    jest.spyOn(viewCopyProto, 'update');
    formCopyProto.createInput(true);
    viewCopyProto.onInput(false)();
    expect(viewCopyProto.update).toHaveBeenCalledWith(50, false);
  });

  test('update second event input', () => {
    jest.spyOn(viewCopyProto, 'eventInput');
    jest.spyOn(viewCopyProto, 'onInput');
    options.isMultiThumb = true;
    document.dispatchEvent(new MouseEvent('input'));
    viewCopyProto.eventInput();
    expect(viewCopyProto.eventInput).toHaveBeenCalled();
  });

  test('updateObservers work correctly with updateView', () => {
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
});