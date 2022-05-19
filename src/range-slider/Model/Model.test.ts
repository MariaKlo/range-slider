import Model from './Model';

describe('test model', () => {
    let model: Model;

    beforeEach(() => {
        model = new Model();
    });

    test('max value set to 100 if not defined', () => {
        expect(model.max).toBe(100);
    });

    test('default value set to 50 if not defined', () => {
        expect(model.defaultValue).toBe(50);
    });

    test('default value is set', () => {
        const newDefaultValue = 35;
        model.setDefaultValue(newDefaultValue);
        expect(model.defaultValue).toBe(newDefaultValue);
    });

    test('second value set to 70 if not defined', () => {
        expect(model.valueSecond).toBe(70);
    });

    test('second value is set', () => {
        const newValueSecond = 123;
        model.setSecondValue(newValueSecond);
        expect(model.valueSecond).toBe(newValueSecond);
    });

    test('values for ticks recieved', () => {
        expect(model.getTicks(0, 1, 1, false)).toEqual([]);
        const expectArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        expect(model.getTicks(0, 100, 10, true)).toEqual(expectArray);
    });

    test('step is overwritten when it is less or equal to 0', () => {
        const expectArray = [1, 2, 3, 4, 5];
        expect(model.getTicks(1, 5, 0, true)).toEqual(expectArray);
        expect(model.getTicks(1, 5, -100, true)).toEqual(expectArray);
    });

    test('last value for ticks is equal to max value', () => {
    // even if it doesn't fit the step
    const expectArray = [0, 5, 10, 16];
        expect(model.getTicks(0, 16, 5, true)).toEqual(expectArray);
    });

    test('nearest value is calculated', () => {
        expect(model.calcNearestMaxValueConsideringStep(5, 2)).toBe(4);
        expect(model.calcNearestMaxValueConsideringStep(8, 3)).toBe(9);
        expect(model.calcNearestMaxValueConsideringStep(-1, 10)).toBe(0);
    });

    test('update is called with limit toggle and limit step', () => {
        jest.spyOn(model, 'update');
        model.update(40, true);
        jest.spyOn(model, 'limitToggle');
        model.limitToggle(40, true);
        jest.spyOn(model, 'limitStep');
        model.limitStep(40, true);
        expect(model.limitToggle).toHaveBeenCalled();
        expect(model.limitStep).toHaveBeenCalled();
    });
    // new tests below
    test('default value set to the new normal value when it fits the step', () => {
        jest.spyOn(model, 'setDefaultValue');
        model.step = 1;
        model.limitStep(5, true);
        expect(model.setDefaultValue).toHaveBeenCalledWith(5);
    });

    test('default value set to the proper value when it does not fit the step', () => {
        jest.spyOn(model, 'setDefaultValue');
        model.step = 2;
        model.limitStep(7, true);
        expect(model.setDefaultValue).toHaveBeenCalledWith(6);
    });

    test('default value (when two thumbs) set to the proper value when it does not fit the step', () => {
        jest.spyOn(model, 'setSecondValue');
        model.step = 2;
        model.limitStep(23, false);
        expect(model.setSecondValue).toHaveBeenCalledWith(22);
    });
});