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
    modelCopyProto.max = 100;
    expect(modelCopyProto.max).toEqual(100);
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
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    expect(modelCopyProto.getTicks(1, false)).toEqual([]);
  });

  test('step is overwritten when it is less or equal to 0', () => {
    model.getTicks(0, true);
    expect(model.optionsForView.step).toEqual(1);
    model.getTicks(-100, true);
    expect(model.optionsForView.step).toEqual(1);
  });

  test('get array for ticks values when step does not fit', () => {
    // even if it doesn't fit the step
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    modelCopyProto.step = 5;
    modelCopyProto.max = 16;
    expect(modelCopyProto.getTicks(5, true)).toEqual([]);
  });

  test('nearest value is calculated', () => {
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    expect(modelCopyProto.calcNearestMinValueConsideringStep(5, 2)).toBe(4);
    expect(modelCopyProto.calcNearestMinValueConsideringStep(8, 3)).toBe(9);
    expect(modelCopyProto.calcNearestMinValueConsideringStep(-1, 10)).toBe(0);
  });

  test('update is called with limit toggle and limit step', () => {
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    jest.spyOn(modelCopyProto, 'update');
    modelCopyProto.update(40, true);
    jest.spyOn(modelCopyProto, 'limitToggle');
    modelCopyProto.limitToggle(40, true);
    jest.spyOn(modelCopyProto, 'limitStep');
    modelCopyProto.limitStep(40, true);
    expect(modelCopyProto.limitToggle).toHaveBeenCalled();
    expect(modelCopyProto.limitStep).toHaveBeenCalled();
  });

  test('default value set to the new normal value when it fits the step', () => {
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    jest.spyOn(modelCopyProto, 'setDefaultValue');
    modelCopyProto.step = 5;
    modelCopyProto.limitStep(5, true);
    expect(modelCopyProto.setDefaultValue).toHaveBeenCalledWith(5);
  });

  test('default value set to the proper value when it does not fit the step', () => {
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    jest.spyOn(modelCopyProto, 'setDefaultValue');
    modelCopyProto.step = 7;
    modelCopyProto.limitStep(7, true);
    expect(modelCopyProto.setDefaultValue).toHaveBeenCalledWith(5);
  });

  test('default value (when two thumbs) set to the proper value when it does not fit the step', () => {
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    jest.spyOn(modelCopyProto, 'setSecondValue');
    modelCopyProto.step = 23;
    modelCopyProto.limitStep(23, false);
    expect(modelCopyProto.setSecondValue).toHaveBeenCalledWith(23);
  });

  test('update multi values and limit toggle', () => {
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    jest.spyOn(modelCopyProto, 'limitToggle');
    modelCopyProto.step = 1;
    modelCopyProto.isMultiThumb = true;
    modelCopyProto.update(10, true);
    expect(modelCopyProto.limitToggle).toHaveBeenCalledWith(10, true);
  });

  // test('updateObservers work correctly with updateView', () => {
  //   const modelCopyProto = Object.getPrototypeOf(modelCopy);
  //   const observers = {
  //     // eslint-disable-next-line @typescript-eslint/no-empty-function
  //     updateView(): void {},
  //   };
  //   modelCopyProto.observer.subscribeInModel(observers);
  //   jest.spyOn(modelCopyProto.observers[0], 'updateView');
  //   modelCopyProto.updateObservers();
  //   expect(modelCopyProto.observers[0].updateView).toHaveBeenCalled();
  // });

  test('getTicks is called when array is received', () => {
    jest.spyOn(model, 'getTicks');
    model.init();
    expect(model.getTicks).toHaveBeenCalled();
  });

  test('second value set to the new value when it fits the step', () => {
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    jest.spyOn(modelCopyProto, 'setSecondValue');
    modelCopyProto.step = 1;
    modelCopyProto.limitStep(50, false);
    expect(modelCopyProto.setSecondValue).toHaveBeenCalledWith(50);
  });

  test('update values when limitedStep is called', () => {
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    jest.spyOn(modelCopyProto, 'limitStep');
    modelCopyProto.isMultiThumb = false;
    model.update(10, false);
    expect(modelCopyProto.limitStep).toHaveBeenCalled();
  });

  test('limit step was called when step does not fit and values are updated', () => {
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    jest.spyOn(modelCopyProto, 'limitStep');
    jest.spyOn(modelCopyProto, 'calcNearestMinValueConsideringStep');
    modelCopyProto.step = 3;
    model.optionsForView.step = 3;
    modelCopyProto.limitStep(10, true);
    expect(modelCopyProto.limitStep).toHaveBeenCalledWith(modelCopyProto.calcNearestMinValueConsideringStep(10, 3));
  });
});