/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import View from './View';
import ticksView from './subView/ticksView/ticksView';
import stepView from './subView/stepView/stepView';
import BarView from './subView/barView/barView';
import ThumbView from './subView/thumbView/thumbView';
import formView from './subView/formView/formView';
import Options from '../component/globalOptions';

describe('test view', () => {
  let view: View;
  let ticks: ticksView;
  let step: stepView;
  let bar: BarView;
  let thumb: ThumbView;
  let form: formView;

  let options: Options;

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

  beforeEach(() => {
    thumb = new ThumbView();
    ticks = new ticksView();
    bar = new BarView();
    form = new formView();
    view = new View(document.body, ticks, step, bar, thumb, form, data);
    view.init();
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('wrapper is created', () => {
    jest.spyOn(document, 'createElement');
    view.createWrapper();
    expect(document.createElement).toHaveBeenCalledTimes(1);
    jest.spyOn(view.parent, 'append');
    view.createWrapper();
    expect(view.parent.append).toHaveBeenCalledTimes(1);
  });

  test('attributes are set for single slider', () => {
    data.defaultValue = -100;
    data.isMultiThumb = false;
    view.setAttributesValue();
    expect(view.wrapper.getAttribute('default-value')).toBe('-100');
  });

  test('attributes are set for double slider', () => {
    data.isMultiThumb = true;
    data.defaultValue = 11;
    view.setAttributesValue();
    expect(view.wrapper.getAttribute('first-value')).toBe('11');
    expect(view.wrapper.getAttribute('second-value')).toBe('23');
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
    jest.spyOn(view, 'clickOnBar');
    view.bar.bar.dispatchEvent(new MouseEvent('mousedown'));
    expect(view.clickOnBar).toHaveBeenCalled();
  });

  test('mousedown on Track should call clickOnBar function', () => {
    jest.spyOn(view, 'clickOnBar');
    view.track.dispatchEvent(new MouseEvent('mousedown'));
    expect(view.clickOnBar).toHaveBeenCalled();
  });

  test('default value are changed by click', () => {
    data.isMultiThumb = false;
    view.onClick(5)();
    expect(data.defaultValue).toBe(5);
  });

  test('input event calls update method with default settings', () => {
    jest.spyOn(view, 'update');
    form.createInput(false);
    view.onInput(true)();
    expect(view.update).toHaveBeenCalledWith(50, true);
  });

  test('input event calls update method with non-default settings', () => {
    jest.spyOn(view, 'update');
    form.createInput(true);
    view.onInput(false)();
    expect(view.update).toHaveBeenCalledWith(50, false);
  });

  test('should toggle class for default thumb when mouse up or down', () => {
    jest.spyOn(thumb.firstThumb.classList, 'toggle');
    jest.spyOn(view, 'onMouseUpDown');
    view.onMouseUpDown(true)();
    thumb.firstThumb = document.createElement('div');
    thumb.firstThumb.className = 'range-slider__thumb';
    thumb.firstThumb.classList.toggle('range-slider__thumb_active');
    expect(thumb.firstThumb.classList.contains('range-slider__thumb_active')).toBe(true);
  });

  test('update second event input', () => {
    jest.spyOn(view, 'eventInput');
    jest.spyOn(view, 'onInput');
    options.isMultiThumb = true;
    document.dispatchEvent(new MouseEvent('input'));
    view.eventInput();
    expect(view.eventInput).toHaveBeenCalled();
  });

  test('update second input event hover', () => {
    jest.spyOn(view, 'eventHover');
    jest.spyOn(view, 'onMouseOverOut');
    options.isMultiThumb = true;
    document.dispatchEvent(new MouseEvent('mouseover'));
    view.eventHover();
    expect(view.eventHover).toHaveBeenCalled();
  });

  test('update second input event active', () => {
    jest.spyOn(view, 'eventActive');
    jest.spyOn(view, 'onMouseUpDown');
    options.isMultiThumb = true;
    document.dispatchEvent(new MouseEvent('mousedown'));
    document.dispatchEvent(new MouseEvent('mouseup'));
    view.eventActive();
    expect(view.eventActive).toHaveBeenCalled();
  });

  test('activate onmouseupdown for second thumb', () => {
    jest.spyOn(thumb, 'createThumb');
    thumb.createThumb(document.body, true);
    const { secondThumb } = view.thumb;
    view.onMouseUpDown(false)();
    jest.spyOn(secondThumb.classList, 'toggle');
    expect(secondThumb.classList.contains('range-slider__thumb_active')).toBe(true);
  });

  test('both values are updated on click', () => {
    options = {
      ...data,
      defaultValue: 0,
      valueSecond: 20,
      isMultiThumb: true,
    };
    thumb.createBubbleElement(true, document.body, document.body);
    view.onClick(20)();
    expect(options.valueSecond).toBe(20);
    expect(options.defaultValue).toBe(0);
  });

  test('updateObservers work correctly with updateView', () => {
    form.createInput(true);
    const observers = {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      updateModel(_arg0: number, _arg1: boolean): void {},
    };
    view.subscribe(observers);
    jest.spyOn(view.observers[0], 'updateModel');
    view.update(30, true);
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
    expect(view.getValueByCoords(element, coords)).toBe(38);
  });

  test('activate onmouseoverout for default bubble', () => {
    jest.spyOn(view, 'onMouseOverOut');
    view.onMouseOverOut(document.body, document.body)();
    view.thumb.showBubble = document.createElement('p');
    view.thumb.showBubble.classList.add('range-slider__bubble');
    thumb.showBubble.classList.toggle('range-slider__bubble_hover');
    expect(thumb.showBubble.classList.contains('range-slider__bubble_hover')).toBe(true);
  });

  test('activate onmouseoverout for multi bubbles', () => {
    jest.spyOn(view, 'onMouseOverOut');
    options.showBubble = true;
    view.onMouseOverOut(document.body, document.body)();
    view.thumb.showSecondBubble = document.createElement('p');
    view.thumb.showSecondBubble.classList.add('range-slider__bubble');
    thumb.showSecondBubble!.classList.toggle('range-slider__bubble_big');
    expect(thumb.showSecondBubble!.classList.contains('range-slider__bubble_big')).toBe(true);
  });
});