import Options from '../../../component/Options';

class StepView {
  options!: Options;

  calcMaxValueConsideringStep(step: number = this.options.step): void {
    // const valueFromMaxWithStep = max / step;
    // const maxValueConsideringStep = Math.floor(valueFromMaxWithStep) * step;
    // const compareStepWithMax = maxValueConsideringStep > max || maxValueConsideringStep < max;
    // if (compareStepWithMax) {
    //   this.options.max = maxValueConsideringStep;
    // } else {
    //   this.options.max = max;
    // }

    if (step <= 1) {
      this.options.step = 1;
    } else if (step > 1) {
      this.options.step = step;
    }
  }
}

export default StepView;