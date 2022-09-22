import Model from './Model';

describe('test model', () => {
  let model: Model;

  let modelCopy: Model;

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
    model = new Model(data);
    modelCopy = new Model(data);
  });

  test('max value set to 100 if not defined', () => {
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    expect(modelCopyProto.max).toBe(100);
  });

  test('default value is set', () => {
    const newDefaultValue = 35;
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    modelCopyProto.setDefaultValue(newDefaultValue);
    expect(modelCopyProto.defaultValue).toBe(newDefaultValue);
  });

  test('second value is set', () => {
    const newValueSecond = 123;
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    modelCopyProto.setSecondValue(newValueSecond);
    expect(modelCopyProto.valueSecond).toBe(newValueSecond);
  });

  test('values for ticks recieved', () => {
    expect(model.getTicks(1, false)).toEqual([]);
    const expectArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    expect(model.getTicks(10, true)).toEqual(expectArray);
  });

  test('step is overwritten when it is less or equal to 0', () => {
    const expectArray = [1, 2, 3, 4, 5];
    expect(model.getTicks(0, true)).toEqual(expectArray);
    expect(model.getTicks(-100, true)).toEqual(expectArray);
  });

  test('last value for ticks is equal to max value', () => {
    // even if it doesn't fit the step
    const expectArray = [0, 5, 10, 16];
    expect(model.getTicks(5, true)).toEqual(expectArray);
  });

  test('nearest value is calculated', () => {
    expect(Object.getPrototypeOf(modelCopy).calcNearestMinValueConsideringStep(5, 2)).toBe(4);
    expect(Object.getPrototypeOf(modelCopy).calcNearestMinValueConsideringStep(8, 3)).toBe(9);
    expect(Object.getPrototypeOf(modelCopy).calcNearestMinValueConsideringStep(-1, 10)).toBe(0);
  });

  test('update is called with limit toggle and limit step', () => {
    jest.spyOn(model, 'update');
    model.update(40, true);
    jest.spyOn(Object.getPrototypeOf(modelCopy), 'limitToggle');
    Object.getPrototypeOf(modelCopy).limitToggle(40, true);
    jest.spyOn(Object.getPrototypeOf(modelCopy), 'limitStep');
    Object.getPrototypeOf(modelCopy).limitStep(40, true);
    expect(Object.getPrototypeOf(modelCopy).limitToggle).toHaveBeenCalled();
    expect(Object.getPrototypeOf(modelCopy).limitStep).toHaveBeenCalled();
  });

  test('default value set to the new normal value when it fits the step', () => {
    jest.spyOn(Object.getPrototypeOf(modelCopy), 'setDefaultValue');
    Object.getPrototypeOf(modelCopy).step = 1;
    Object.getPrototypeOf(modelCopy).limitStep(5, true);
    expect(Object.getPrototypeOf(modelCopy).setDefaultValue).toHaveBeenCalledWith(5);
  });

  test('default value set to the proper value when it does not fit the step', () => {
    jest.spyOn(Object.getPrototypeOf(modelCopy), 'setDefaultValue');
    Object.getPrototypeOf(modelCopy).step = 2;
    Object.getPrototypeOf(modelCopy).limitStep(7, true);
    expect(Object.getPrototypeOf(modelCopy).setDefaultValue).toHaveBeenCalledWith(6);
  });

  test('default value (when two thumbs) set to the proper value when it does not fit the step', () => {
    jest.spyOn(Object.getPrototypeOf(modelCopy), 'setSecondValue');
    Object.getPrototypeOf(modelCopy).step = 2;
    Object.getPrototypeOf(modelCopy).limitStep(23, false);
    expect(Object.getPrototypeOf(modelCopy).setSecondValue).toHaveBeenCalledWith(22);
  });

  test('update multi values and limit toggle', () => {
    jest.spyOn(Object.getPrototypeOf(modelCopy), 'limitToggle');
    Object.getPrototypeOf(modelCopy).isMultiThumb = true;
    Object.getPrototypeOf(modelCopy).update(10, true);
    expect(Object.getPrototypeOf(modelCopy).limitToggle).toHaveBeenCalledWith(10, true);
  });

  test('when there are more than 11 possible ticks, reduce them to 10-11 ticks', () => {
    const expectedArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    expect(model.getTicks(1, true)).toEqual(expectedArray);
  });

  test('updateObservers work correctly with updateView', () => {
    const observers = {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      updateView(): void {},
    };
    Object.getPrototypeOf(modelCopy).subscribe(observers);
    jest.spyOn(model.observers[0], 'updateView');
    Object.getPrototypeOf(modelCopy).updateObservers();
    expect(model.observers[0].updateView).toHaveBeenCalled();
  });

  test('getTicks is called when array is received', () => {
    jest.spyOn(model, 'getTicks');
    model.init();
    expect(model.getTicks).toHaveBeenCalled();
  });

  test('second value set to the new value when it fits the step', () => {
    jest.spyOn(Object.getPrototypeOf(modelCopy), 'setSecondValue');
    Object.getPrototypeOf(modelCopy).step = 1;
    Object.getPrototypeOf(modelCopy).limitStep(50, false);
    expect(Object.getPrototypeOf(modelCopy).setSecondValue).toHaveBeenCalledWith(50);
  });

  test('update values when limitedStep is called', () => {
    jest.spyOn(Object.getPrototypeOf(modelCopy), 'limitStep');
    Object.getPrototypeOf(modelCopy).isMultiThumb = false;
    model.update(10, false);
    expect(Object.getPrototypeOf(modelCopy).limitStep).toHaveBeenCalledWith(10, false);
  });
});