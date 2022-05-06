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

    let createRangeSlider = () => {
        document.body.innerHTML = '';
        view.init();
    };

    beforeEach(() => {
        ticks = new ticksView();
        step = new stepView();
        bubble = new bubbleView();
        bar = new barView();
        view = new View(document.body, ticks, step, bubble, bar);
        view.init();
        createRangeSlider = () => {
            document.body.innerHTML = '';
            view.init();
        };
    });
    afterEach(() => {
        document.body.innerHTML = '';
    });

    // tests for form

    test('default value is set correctly', () => {
        view.setValues(false, 20);
        expect(view.input.value).toBe('20');
    });

    test('set max value correctly for single slider', () => {
        view.setMax(false, 100);
        expect(view.input.max).toBe('100');
    });

    test('set min value correctly for single slider', () => {
        view.setMin(false, 0);
        expect(view.input.min).toBe('0');
    });

    test('set max value correctly for double slider', () => {
        createRangeSlider();
        view.setMax(true, 100);
        expect(view.input.max).toBe('100');
        expect(view.secondInput.max).toBe('100');
    });

    test('set min value correctly for double slider', () => {
        createRangeSlider();
        view.setMin(true, 0);
        expect(view.input.min).toBe('0');
        expect(view.secondInput.min).toBe('0');
    });
});