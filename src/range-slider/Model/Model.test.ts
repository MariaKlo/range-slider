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
    model.max = 100;
    expect(model.max).toEqual(100);
  });

  test('default value is set', () => {
    const newDefaultValue = 35;
    model.setDefaultValue(newDefaultValue);
    expect(model.defaultValue).toBe(newDefaultValue);
  });

  test('second value is set', () => {
    const newValueSecond = 123;
    model.setSecondValue(newValueSecond);
    expect(model.valueSecond).toBe(newValueSecond);
  });

  test('values for ticks recieved', () => {
    expect(model.getTicks(1, false)).toEqual([]);
  });

  test('step is overwritten when it is less or equal to 0', () => {
    model.getTicks(0, true);
    expect(model.optionsForView.step).toEqual(1);
    model.getTicks(-100, true);
    expect(model.optionsForView.step).toEqual(1);
  });

  test('get array for ticks values when step does not fit', () => {
    // even if it doesn't fit the step
    model.step = 5;
    model.max = 16;
    expect(model.getTicks(5, true)).toEqual([]);
  });

  test('nearest value is calculated', () => {
    const modelCopyProto = Object.getPrototypeOf(modelCopy);
    expect(modelCopyProto.calcNearestMinValueConsideringStep(5, 2)).toBe(4);
    expect(modelCopyProto.calcNearestMinValueConsideringStep(8, 3)).toBe(9);
    expect(modelCopyProto.calcNearestMinValueConsideringStep(-1, 10)).toBe(0);
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

  test('default value set to the new normal value when it fits the step', () => {
    jest.spyOn(model, 'setDefaultValue');
    model.step = 5;
    model.limitStep(5, true);
    expect(model.setDefaultValue).toHaveBeenCalledWith(5);
  });

  test('default value set to the proper value when it does not fit the step', () => {
    jest.spyOn(model, 'setDefaultValue');
    model.step = 7;
    model.limitStep(7, true);
    expect(model.setDefaultValue).toHaveBeenCalledWith(7);
  });

  test('default value (when two thumbs) set to the proper value when it does not fit the step', () => {
    jest.spyOn(model, 'setSecondValue');
    model.step = 23;
    model.limitStep(23, false);
    expect(model.setSecondValue).toHaveBeenCalledWith(23);
  });

  test('update multi values and limit toggle', () => {
    jest.spyOn(model, 'limitToggle');
    model.step = 1;
    model.isMultiThumb = true;
    model.update(10, true);
    expect(model.limitToggle).toHaveBeenCalledWith(10, true);
  });

  test('getTicks is called when array is received', () => {
    jest.spyOn(model, 'getTicks');
    model.init();
    expect(model.getTicks).toHaveBeenCalled();
  });

  test('second value set to the new value when it fits the step', () => {
    jest.spyOn(model, 'setSecondValue');
    model.step = 1;
    model.limitStep(50, false);
    expect(model.setSecondValue).toHaveBeenCalledWith(50);
  });

  test('update values when limitedStep is called', () => {
    jest.spyOn(model, 'limitStep');
    model.isMultiThumb = false;
    model.update(10, false);
    expect(model.limitStep).toHaveBeenCalled();
  });

  test('default value is set when limitStep is called', () => {
    jest.spyOn(model, 'setDefaultValue');
    const limitData = {
      step: 10,
      newValue: 33,
      closestStepValue: 30,
      isDefault: true,
    };
    model.step = limitData.step;
    model.limitStep(limitData.newValue, limitData.isDefault);
    expect(model.setDefaultValue).not.toHaveBeenCalledWith(limitData.newValue);
    expect(model.setDefaultValue).toHaveBeenCalledWith(limitData.closestStepValue);
  });

  test('default value set to the different value when it does not fit the step', () => {
    jest.spyOn(model, 'setSecondValue');
    const limitData = {
      step: 5,
      newValue: 33,
      closestStepValue: 35,
      isDefault: false,
    };
    model.step = limitData.step;
    model.limitStep(limitData.newValue, limitData.isDefault);
    expect(model.setSecondValue).not.toHaveBeenCalledWith(limitData.newValue);
    expect(model.setSecondValue).toHaveBeenCalledWith(limitData.closestStepValue);
  });

  test('thumb is limited when left value is more then right, observers update', () => {
    const thumbValues = {
      right: 10,
      newValue: 11,
      isNewForLeft: true,
    };
    jest.spyOn(model, 'limitStep');
    jest.spyOn(model, 'updateObservers');
    model.valueSecond = thumbValues.right;
    model.limitToggle(thumbValues.newValue, thumbValues.isNewForLeft);
    expect(model.updateObservers).toHaveBeenCalled();
  });
});