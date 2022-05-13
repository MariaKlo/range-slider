/* eslint-disable @typescript-eslint/no-unused-vars */
import View from './View';
import ticksView from './subView/ticksView/ticksView';
import stepView from './subView/stepView/stepView';
import bubbleView from './subView/bubbleView/bubbleView';
import barView from './subView/barView/barView';

describe('test view', () => {
    let view: View;
    let ticks: ticksView;
    let step: stepView;
    let bubble: bubbleView;
    let bar: barView;

    beforeEach(() => {
        ticks = new ticksView();
        bubble = new bubbleView();
        bar = new barView(document.body);
        view = new View(document.body, ticks, step, bubble, bar);
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
      test('thumb element is rotated when slider is vertical', () => {
        view.options = {
          ...view.options,
          isVertical: true,
          showBubble: true,
        };
        jest.spyOn(view.bubble, 'rotateBubble');
        view.init();
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
      test('left and right values are changed by click', () => {
        view.options = {
          ...view.options,
          isMultiThumb: true,
          valueSecond: 80,
          defaultValue: 0,
        };
        view.onClick(75)();
        expect(view.options.valueSecond).toBe(75);
        expect(view.options.defaultValue).toBe(0);
      });
      test('input event calls update method with default settings', () => {
        jest.spyOn(view, 'update');
        view.onInput(true)();
        const value = Number(view.input.value);
        expect(view.update).toHaveBeenCalledWith(value, true);
      });
      test('input event calls update method with settings for right thumb', () => {
        jest.spyOn(view, 'update');
        view.onInput(false)();
        const value = Number(view.secondInput.value);
        expect(view.update).toHaveBeenCalledWith(value, false);
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
      test('should toggle class for default thumb when mouse up or down', () => {
        const { firstBubble } = view.bubble;
        jest.spyOn(firstBubble.classList, 'toggle');
        view.onMouseUpDown(true)();
        expect(firstBubble.classList.toggle).toHaveBeenCalledWith('range-slider__thumb_active');
      });
      test('should toggle class for right thumb when mouse up or down', () => {
        const { secondBubble } = view.bubble;
        jest.spyOn(secondBubble.classList, 'toggle');
        view.onMouseUpDown(false)();
        expect(secondBubble.classList.toggle).toHaveBeenCalledWith('range-slider__thumb_active');
      });
});