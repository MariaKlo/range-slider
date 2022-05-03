/* eslint-disable @typescript-eslint/no-unused-vars */
import View from './View';

describe('test view', () => {
    let view: View;

    let createRangeSlider = () => {
        document.body.innerHTML = '';
        view.init(document.body, true, -200, 100);
    };

    beforeEach(() => {
        view = new View();
        view.init(document.body, false, 0, 100);
        createRangeSlider = () => {
            document.body.innerHTML = '';
            view.init(document.body, true, -200, 100);
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