/* eslint-disable @typescript-eslint/no-non-null-assertion */
class formView {
    formDiv!: HTMLElement;
    input!: HTMLInputElement;
    secondInput!: HTMLInputElement;

  init(parent: HTMLElement, isDouble: boolean, min: number, max: number): void {
    this.createForm(parent);
    this.createInput(isDouble);
    this.setMin(isDouble, min);
    this.setMax(isDouble, max);
  }

    createForm(parent: HTMLElement): void {
      this.formDiv = <HTMLElement>(document.createElement('div'));
      this.formDiv.classList.add('range-slider__form');
      parent.append(this.formDiv);
    }
  
    createInput(isDouble: boolean): void {
    if (isDouble) {
      this.input = document.createElement('input');
      this.input.type = 'range';
      this.input.classList.add('range-slider__input');
      this.input.classList.add('range-slider__input_first');
      this.formDiv.append(this.input);

      this.secondInput = document.createElement('input');
      this.secondInput.type = 'range';
      this.secondInput.classList.add('range-slider__input');
      this.secondInput.classList.add('range-slider__input_second');
      this.formDiv.append(this.secondInput);
    } else {
      this.input = document.createElement('input');
      this.input.type = 'range';
      this.input.classList.add('range-slider__input');
      this.formDiv.append(this.input);
      }
    }
  
    setValues(isDouble: boolean, value: number, secondValue?: number): void {
      this.input.value = String(value);
      if (isDouble && this.secondInput) {
        this.secondInput!.value = String(secondValue);
      }
    }

    setMax(isDouble: boolean, max = 100): void {
      this.input.max = String(max);
      if (isDouble) {
        this.secondInput!.max = String(max);
      }
    }

    setMin(isDouble: boolean, min: number) {
      this.input.min = String(min);
      if (isDouble) {
        this.secondInput!.min = String(min);
      }
    }
}

export default formView;