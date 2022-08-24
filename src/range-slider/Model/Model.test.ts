import Model from './Model';

describe('test model', () => {
  let model: Model;

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

  const modelCopy = new Model(data);
  const modelCopyProto = Object.getPrototypeOf(modelCopy);

  beforeEach(() => {
    model = new Model(data);
  });

  test('max value set to 100 if not defined', () => {
    expect(modelCopyProto.max).toBe(100);
  });

  test('default value is set', () => {
    const newDefaultValue = 35;
    modelCopyProto.setDefaultValue(newDefaultValue);
    expect(model.defaultValue).toBe(newDefaultValue);
  });

  test('second value is set', () => {
    const newValueSecond = 123;
    modelCopyProto.setSecondValue(newValueSecond);
    expect(model.valueSecond).toBe(newValueSecond);
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
    expect(modelCopyProto.calcNearestMinValueConsideringStep(5, 2)).toBe(4);
    expect(modelCopyProto.calcNearestMinValueConsideringStep(8, 3)).toBe(9);
    expect(modelCopyProto.calcNearestMinValueConsideringStep(-1, 10)).toBe(0);
  });

  test('update is called with limit toggle and limit step', () => {
    jest.spyOn(model, 'update');
    model.update(40, true);
    jest.spyOn(modelCopyProto, 'limitToggle');
    modelCopyProto.limitToggle(40, true);
    jest.spyOn(modelCopyProto, 'limitStep');
    modelCopyProto.limitStep(40, true);
    expect(modelCopyProto.limitToggle).toHaveBeenCalled();
    expect(modelCopyProto.limitStep).toHaveBeenCalled();
  });

  test('default value set to the new normal value when it fits the step', () => {
    jest.spyOn(modelCopyProto, 'setDefaultValue');
    modelCopyProto.step = 1;
    modelCopyProto.limitStep(5, true);
    expect(modelCopyProto.setDefaultValue).toHaveBeenCalledWith(5);
  });

  test('default value set to the proper value when it does not fit the step', () => {
    jest.spyOn(modelCopyProto, 'setDefaultValue');
    modelCopyProto.step = 2;
    modelCopyProto.limitStep(7, true);
    expect(modelCopyProto.setDefaultValue).toHaveBeenCalledWith(6);
  });

  test('default value (when two thumbs) set to the proper value when it does not fit the step', () => {
    jest.spyOn(modelCopyProto, 'setSecondValue');
    modelCopyProto.step = 2;
    modelCopyProto.limitStep(23, false);
    expect(modelCopyProto.setSecondValue).toHaveBeenCalledWith(22);
  });

  test('update multi values and limit toggle', () => {
    jest.spyOn(modelCopyProto, 'limitToggle');
    modelCopyProto.isMultiThumb = true;
    modelCopyProto.update(10, true);
    expect(modelCopyProto.limitToggle).toHaveBeenCalledWith(10, true);
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
    modelCopyProto.subscribe(observers);
    jest.spyOn(model.observers[0], 'updateView');
    modelCopyProto.updateObservers();
    expect(model.observers[0].updateView).toHaveBeenCalled();
  });

  test('getTicks is called when array is received', () => {
    jest.spyOn(model, 'getTicks');
    model.init();
    expect(model.getTicks).toHaveBeenCalled();
  });

  test('second value set to the new value when it fits the step', () => {
    jest.spyOn(modelCopyProto, 'setSecondValue');
    modelCopyProto.step = 1;
    modelCopyProto.limitStep(50, false);
    expect(modelCopyProto.setSecondValue).toHaveBeenCalledWith(50);
  });

  test('update values when limitedStep is called', () => {
    jest.spyOn(modelCopyProto, 'limitStep');
    modelCopyProto.isMultiThumb = false;
    model.update(10, false);
    expect(modelCopyProto.limitStep).toHaveBeenCalledWith(10, false);
  });
});