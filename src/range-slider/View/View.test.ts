import View from './View';

describe('test view', () => {
  let view: View;

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
    view = new View(document.body, data);
    view.init();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('mouse event click on bar was called', () => {
    const event = view.bar.bar.dispatchEvent(new MouseEvent('mousedown'));
    expect(event).toBe(true);
  });

  test('mouse event click on track was called', () => {
    const event = view.track.dispatchEvent(new MouseEvent('mousedown'));
    expect(event).toBe(true);
  });

  test('set attribute default value for one input', () => {
    view.options.isMultiThumb = false;
    view.options.defaultValue = 10;
    view.wrapper = document.createElement('div');
    view.wrapper.setAttribute('default-value', String(view.options.defaultValue));
    const attr = view.wrapper.getAttribute('default-value');
    expect(attr).toBe('10');
  });

  test('set correct step when step is less or equal zero', () => {
    view.options.isMultiThumb = false;
    view.options.step = -11;
    const attr = view.form.input.getAttribute('step');
    expect(attr).toBe('1');
  });

  test('set correct step when step is less or equal zero (multi thumb)', () => {
    view.options.isMultiThumb = true;
    view.options.step = -11;
    view.form.createForm(document.body);
    view.form.createInput(true);
    view.form.secondInput.setAttribute('step', '1');
    const attr = view.form.secondInput.getAttribute('step');
    expect(attr).toBe('1');
  });

  test('set correct step when step is bigger than max value', () => {
    view.options.step = 100;
    view.options.max = 50;
    const attr = view.form.input.getAttribute('step');
    expect(attr).toBe('1');
  });

  test('default value is updated when input value is changed', () => {
    view.options.isMultiThumb = false;
    view.options.defaultValue = 10;
    view.form.input.dispatchEvent(new InputEvent('input'));
    expect(view.form.input.value).toBe(`${view.options.defaultValue}`);
  });

  test('second value is updated when input value is changed', () => {
    view.form.createForm(document.body);
    view.form.createInput(true);
    jest.spyOn(view, 'update');
    view.onInput(false)();
    const value = Number(view.form.secondInput.value);
    expect(view.update).toHaveBeenCalledWith(value, false);
  });

  test('one bubble is rotated when slider is vertical', () => {
    jest.spyOn(view.thumb, 'rotateBubble');
    view.init();
    expect(view.thumb.rotateBubble).toHaveBeenCalled();
  });

  test('two bubbles are rotated when slider is vertical', () => {
    jest.spyOn(view.thumb, 'rotateBubble');
    view.init();
    expect(view.thumb.rotateBubble).toHaveBeenCalled();
  });

  test('show warnings when min is bigger than max value', () => {
    view.options.max = 10;
    view.options.min = 20;
    jest.spyOn(view, 'showWarnings');
    view.showWarnings();
    expect(view.showWarnings).toHaveBeenCalled();
  });

  test('show warnings when default value is less than min value', () => {
    view.options.defaultValue = 10;
    view.options.min = 20;
    jest.spyOn(view, 'showWarnings');
    view.showWarnings();
    expect(view.showWarnings).toHaveBeenCalled();
  });

  test('show warnings when second value is less than min value (multithumb)', () => {
    view.options.isMultiThumb = true;
    view.options.defaultValue = 10;
    view.options.valueSecond = 15;
    view.options.min = 20;
    jest.spyOn(view, 'showWarnings');
    view.showWarnings();
    expect(view.showWarnings).toHaveBeenCalled();
  });

  test('show warnings when default value is less than min value', () => {
    view.options.defaultValue = 30;
    view.options.max = 20;
    jest.spyOn(view, 'showWarnings');
    view.showWarnings();
    expect(view.showWarnings).toHaveBeenCalled();
  });

  test('show warnings when second value is less than min value (multithumb)', () => {
    view.options.isMultiThumb = true;
    view.options.defaultValue = 25;
    view.options.valueSecond = 35;
    view.options.max = 20;
    jest.spyOn(view, 'showWarnings');
    view.showWarnings();
    expect(view.showWarnings).toHaveBeenCalled();
  });

  test('show warnings when second value is less than first value', () => {
    view.options.isMultiThumb = true;
    view.options.defaultValue = 30;
    view.options.valueSecond = 15;
    jest.spyOn(view, 'showWarnings');
    view.showWarnings();
    expect(view.showWarnings).toHaveBeenCalled();
  });
});