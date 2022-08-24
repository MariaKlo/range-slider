/* eslint-disable @typescript-eslint/no-unused-vars */
import FormView from './formView';

describe('test view', () => {
  let form: FormView;

  const formCopy = new FormView();
  const formCopyProto = Object.getPrototypeOf(formCopy);

  beforeEach(() => {
    form = new FormView();
    form.init(document.body, true, 0, 100);
    formCopyProto.createInput(false);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('max value is set', () => {
    formCopyProto.setMax(false, 50);
    expect(form.input.max).toBe('50');
    formCopyProto.createInput(true);
    formCopyProto.setMax(true, undefined);
    expect(form.input.max).toBe('100');
    expect(form.secondInput.max).toBe('100');
  });

  test('min value is set', () => {
    formCopyProto.setMin(false, 20);
    expect(form.input.min).toBe('20');
    formCopyProto.createInput(true);
    formCopyProto.setMin(true, 0);
    expect(form.input.min).toBe('0');
    expect(form.secondInput.min).toBe('0');
  });

  test('default value is set correctly', () => {
    form.setValues(false, 20);
    expect(form.input.value).toBe('20');
  });
});