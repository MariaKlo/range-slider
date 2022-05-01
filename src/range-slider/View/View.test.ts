/* eslint-disable @typescript-eslint/no-unused-vars */
import View from './View';

describe('test view', () => {
    let view: View;

    const thumbOptions = {
        setTwoThumbs: false,
        firstValue: 10,
        secondValue: 50,
        percent: 30,
        percentSecond: 60
    };

    let createRangeSlider = () => {
        document.body.innerHTML = '';
        view.init(document.body, true, -200, 100, true, 0, 70);
    };

    const createThumb = () => {
       view.createThumb(document.body, thumbOptions.setTwoThumbs);
    };

    beforeEach(() => {
        view = new View();
        view.init(document.body, false, 0, 100, false, 20, 30);
        createRangeSlider = () => {
            document.body.innerHTML = '';
            view.init(document.body, true, -200, 100, true, 0, 70);
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

    // tests for thumb
    test('value for first thumb is set correctly', () => {
        const { setTwoThumbs, firstValue } = thumbOptions;
        view.createThumbElement(setTwoThumbs, document.body);
        view.setThumbValue(setTwoThumbs, firstValue);
        expect(view.showThumb.textContent).toBe(String(firstValue));
    });

    test('value for two thumbs is set correctly', () => {
        thumbOptions.setTwoThumbs = true;
        const { setTwoThumbs, firstValue, secondValue } = thumbOptions;
        view.createThumbElement(setTwoThumbs, document.body, document.body);
        view.setThumbValue(setTwoThumbs, firstValue, secondValue);
        expect(view.showThumb.textContent).toBe(String(firstValue));
        expect(view.showSecondThumb.textContent).toBe(String(secondValue));
    });

    test('set two thumbs on input', () => {
        thumbOptions.setTwoThumbs = true;
        createThumb();
        const { setTwoThumbs, percent, percentSecond } = thumbOptions;
        view.setThumb(setTwoThumbs, percent, percentSecond);
        expect(view.firstThumb.style.left).toBe(`${percent}%`);
        expect(view.secondThumb.style.right).toBe(`${100 - percentSecond}%`);
    });
});