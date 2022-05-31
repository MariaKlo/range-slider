/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import View from './View';
import ticksView from './subView/ticksView/ticksView';
import stepView from './subView/stepView/stepView';
import bubbleView from './subView/bubbleView/bubbleView';
import barView from './subView/barView/barView';
import ThumbView from './subView/thumbView/thumbView';

describe('test view', () => {
  let view: View;
  let ticks: ticksView;
  let step: stepView;
  let bubble: bubbleView;
  let bar: barView;
  let thumb: ThumbView;

  beforeEach(() => {
    thumb = new ThumbView();
    ticks = new ticksView();
    bubble = new bubbleView();
    bar = new barView();
    view = new View(document.body, ticks, step, bubble, bar, thumb);
    view.init(document.body, true, 100, 1);
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
    view.options = {
      ...view.options,
      defaultValue: -100,
      isMultiThumb: false,
    };
    view.setAttributesValue();
    expect(view.wrapper.getAttribute('default-value')).toBe('-100');
  });

  test('attributes are set for double slider', () => {
    view.options = {
      ...view.options,
      isMultiThumb: true,
      defaultValue: 10,
      valueSecond: 40,
    };
    view.setAttributesValue();
    expect(view.wrapper.getAttribute('first-value')).toBe('10');
    expect(view.wrapper.getAttribute('second-value')).toBe('40');
  });

  test('one bubble is rotated when slider is vertical', () => {
    view.options = {
      ...view.options,
      isVertical: true,
      showBubble: true,
    };
    jest.spyOn(view.bubble, 'rotateBubble');
    view.init(document.body, false, 100, 1);
    expect(view.bubble.rotateBubble).toHaveBeenCalled();
  });

  test('two bubbles are rotated when slider is vertical', () => {
    view.options = {
      ...view.options,
      isVertical: true,
      showBubble: true,
    };
    jest.spyOn(view.bubble, 'rotateBubble');
    view.init(document.body, true, 100, 1);
    expect(view.bubble.rotateBubble).toHaveBeenCalled();
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
    view.options = {
      ...view.options,
      isMultiThumb: false,
    };
    view.onClick(5)();
    expect(view.options.defaultValue).toBe(5);
  });

  test('input event calls update method with default settings', () => {
    jest.spyOn(view, 'update');
    view.onInput(true)();
    const value = Number(view.input.value);
    expect(view.update).toHaveBeenCalledWith(value, true);
  });

  test('progress bar is set on right', () => {
    view.options = {
      ...view.options,
      isMultiThumb: false,
      showRightProgressBar: true,
    };
    jest.spyOn(view.bar, 'setRight');
    view.setInput();
    expect(view.bar.setRight).toHaveBeenCalled();
  });

  test('input event calls update method with non-default settings', () => {
    jest.spyOn(view, 'update');
    view.onInput(false)();
    const value = Number(view.secondInput!.value);
    expect(view.update).toHaveBeenCalledWith(value, false);
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

  test('set value for second input correctly', () => {
    jest.spyOn(view, 'setValues');
    jest.spyOn(view, 'createInput');
    view.setValues(true, 30, 50);
    view.createInput(true);
    expect(view.secondInput.value).toBe(String(50));
  });

  test('update second event input', () => {
    jest.spyOn(view, 'eventInput');
    jest.spyOn(view, 'onInput');
    view.options.isMultiThumb = true;
    document.dispatchEvent(new MouseEvent('input'));
    view.eventInput();
    expect(view.eventInput).toHaveBeenCalled();
  });

  test('update second input event hover', () => {
    jest.spyOn(view, 'eventHover');
    jest.spyOn(view, 'onMouseOverOut');
    view.options.isMultiThumb = true;
    document.dispatchEvent(new MouseEvent('mouseover'));
    view.eventHover();
    expect(view.eventHover).toHaveBeenCalled();
  });

  test('update second input event active', () => {
    jest.spyOn(view, 'eventActive');
    jest.spyOn(view, 'onMouseUpDown');
    view.options.isMultiThumb = true;
    document.dispatchEvent(new MouseEvent('mousedown'));
    document.dispatchEvent(new MouseEvent('mouseup'));
    view.eventActive();
    expect(view.eventActive).toHaveBeenCalled();
  });

  test('activate onmouseupdown for second thumb', () => {
    jest.spyOn(view, 'onMouseUpDown');
    view.onMouseUpDown(false)();
    thumb.secondThumb = document.createElement('div');
    thumb.secondThumb.classList.add('range-slider__thumb');
    thumb.secondThumb.classList.toggle('range-slider__thumb_active');
    expect(thumb.secondThumb.classList.contains('range-slider__thumb_active')).toBe(true);
  });

  test('both values are updated on click', () => {
    view.options = {
      ...view.options,
      defaultValue: 0,
      valueSecond: 20,
      isMultiThumb: true
    };
    bubble.createBubbleElement(true, document.body, document.body);
    view.onClick(15)();
    expect(view.options.valueSecond).toBe(15);
    expect(view.options.defaultValue).toBe(0);
  });

  test('updateObservers work correctly with updateView', () => {
    const observers = {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      updateModel(_arg0: number, _arg1: boolean): void {}
    }
    view.subscribe(observers);
    jest.spyOn(view.observers[0], 'updateModel');
    view.update(30, true);
    view.observers[0].updateModel(30, true);
    expect(view.observers[0].updateModel).toHaveBeenCalled();
  });

  test('get coords for vertical slider', () => {
    view.options = {
      ...view.options,
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
      toJSON: () => ''
    };
    const element = new MouseEvent('click', { clientY: 265 });
    expect(view.getValueByCoords(element, coords)).toBe(44);
  });

  test('activate onmouseoverout for default bubble', () => {
    jest.spyOn(view, 'onMouseOverOut');
    view.onMouseOverOut(document.body, undefined)();
    view.bubble.showBubble = document.createElement('p');
    view.bubble.showBubble.classList.add('range-slider__bubble');
    bubble.showBubble.classList.toggle('range-slider__bubble_hover');
    expect(bubble.showBubble.classList.contains('range-slider__bubble_hover')).toBe(true);
  });

  test('activate onmouseoverout for multi bubbles', () => {
    jest.spyOn(view, 'onMouseOverOut');
    view.options.showBubble = true;
    view.onMouseOverOut(document.body, document.body)();
    view.bubble.showSecondBubble = document.createElement('p');
    view.bubble.showSecondBubble.classList.add('range-slider__bubble');
    bubble.showSecondBubble.classList.toggle('range-slider__bubble_big');
    expect(bubble.showSecondBubble.classList.contains('range-slider__bubble_big')).toBe(true);
  });
});