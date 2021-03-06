class StepView {
  private stepForm!: HTMLInputElement;

  protected createStep(): void {
    this.stepForm = document.createElement('input');
    this.stepForm.type = 'range';
    this.stepForm.step = '1';
  }

  protected calcMaxValueConsideringStep(max: number, step: number): void {
    const valueFromMaxWithStep = max / step;
    const maxValueConsideringStep = Math.floor(valueFromMaxWithStep) * step;
    const compareStepWithMax = maxValueConsideringStep > max || maxValueConsideringStep < max;
    if (compareStepWithMax) {
      this.stepForm.max = String(maxValueConsideringStep);
    } else {
      this.stepForm.max = String(max);
    }
  }
}

export default StepView;