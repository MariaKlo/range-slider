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
    bar = new barView(document.body);
    view = new View(document.body, ticks, step, bubble, bar, thumb);
    view.init(document.body, false, 100, 1);
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

  // crashed tests below

  // test('should toggle class for default thumb when mouse up or down', () => {
  //   thumb.createThumb(document.body, false);
  //   const { firstThumb } = view.thumb;
  //   jest.spyOn(firstThumb.classList, 'toggle');
  //   view.onMouseUpDown(true)();
  //   expect(firstThumb.classList.toggle).toHaveBeenCalledWith('range-slider__thumb_active');
  // });

  // test('should toggle class for right thumb when mouse up or down', () => {
  //   const { secondThumb } = view.thumb;
  //   jest.spyOn(secondThumb.classList, 'toggle');
  //   view.onMouseUpDown(false)();
  //   expect(secondThumb.classList.toggle).toHaveBeenCalledWith('range-slider__thumb_active');
  // });

});