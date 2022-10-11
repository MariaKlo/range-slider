/* eslint-disable @typescript-eslint/no-unused-vars */
import FormView from './formView';

describe('test view', () => {
  let form: FormView;

  let formCopy: FormView;

  beforeEach(() => {
    form = new FormView();
    formCopy = new FormView();
    form.init(document.body, true, 0, 100);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('max value is set', () => {
    const formCopyProto = Object.getPrototypeOf(formCopy);
    formCopyProto.createForm(document.body);
    formCopyProto.createInput(false);
    formCopyProto.setMax(false, 50);
    expect(formCopyProto.input.max).toBe('50');
    
    formCopyProto.createInput(true);
    formCopyProto.setMax(true, undefined);
    expect(formCopyProto.input.max).toBe('100');
    expect(formCopyProto.secondInput.max).toBe('100');
  });

  test('min value is set', () => {
    const formCopyProto = Object.getPrototypeOf(formCopy);
    formCopyProto.createForm(document.body);
    formCopyProto.createInput(false);
    formCopyProto.setMin(false, 20);
    expect(formCopyProto.input.min).toBe('20');

    formCopyProto.createInput(true);
    formCopyProto.setMin(true, 0);
    expect(formCopyProto.input.min).toBe('0');
    expect(formCopyProto.secondInput.min).toBe('0');
  });

  test('default value is set correctly', () => {
    // const formCopyProto = Object.getPrototypeOf(formCopy);
    form.setValues(false, 20);
    expect(form.input.value).toBe('20');
  });
});