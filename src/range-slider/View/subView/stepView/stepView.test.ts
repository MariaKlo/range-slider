import StepView from './stepView';

describe('test step', () => {
  const stepCopy = new StepView();
  const stepCopyProto = Object.getPrototypeOf(stepCopy);

  beforeEach(() => {
    stepCopyProto.createStep();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('Leave the same max value if step fits in number range', () => {
    stepCopyProto.calcMaxValueConsideringStep(300, 2);
    expect(stepCopyProto.stepForm.max).toEqual('300');
  });

  test('Calc max value with step correctly if step does not fit in number range', () => {
    stepCopyProto.calcMaxValueConsideringStep(100, 3);
    expect(stepCopyProto.stepForm.max).toEqual('99');
  });
});