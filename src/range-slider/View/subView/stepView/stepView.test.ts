import stepView from './stepView';

describe('test view', () => {
    let step: stepView;

    beforeEach(() => {
        step = new stepView();
        step.createStep();
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('Leave the same max value if step fits in number range', () => {
        step.calcMaxValueConsideringStep(300, 2);
        expect(step.stepForm.max).toEqual('300');
    });

    test('Calc max value with step correctly if step does not fit in number range', () => {
        step.calcMaxValueConsideringStep(100, 3);
        expect(step.stepForm.max).toEqual('99');
    });
});