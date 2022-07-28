/* eslint-disable @typescript-eslint/no-unused-vars */
import FormView from './formView';

describe('test view', () => {
  let form: FormView;

  beforeEach(() => {
    form = new FormView();
    form.init(document.body, true, 0, 100);
    form.createInput(false);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('max value is set', () => {
    form.setMax(false, 50);
    expect(form.input.max).toBe('50');
    form.createInput(true);
    form.setMax(true, undefined);
    expect(form.input.max).toBe('100');
    expect(form.secondInput.max).toBe('100');
  });

  test('min value is set', () => {
    form.setMin(false, 20);
    expect(form.input.min).toBe('20');
    form.createInput(true);
    form.setMin(true, 0);
    expect(form.input.min).toBe('0');
    expect(form.secondInput.min).toBe('0');
  });

  test('default value is set correctly', () => {
    form.setValues(false, 20);
    expect(form.input.value).toBe('20');
  });
});