/* eslint-disable @typescript-eslint/no-non-null-assertion */
class View {
    // vars for form
    form!: HTMLDivElement;
    input!: HTMLInputElement;
    secondInput!: HTMLInputElement;
    // vars for thumbs
    firstThumb!: HTMLDivElement;
    secondThumb!: HTMLDivElement;
    showThumb!: HTMLDivElement;
    showSecondThumb!: HTMLDivElement;


    init(parent: HTMLDivElement, isDouble: boolean, min: number, max: number,
        toggleElement: boolean, firstValue: number, secondValue: number): void {
        this.createForm(parent);
        this.createInput(isDouble);
        this.setMax(isDouble, max);
        this.setMin(isDouble, min);
        // thumbs
        this.createThumb(parent, isDouble);
        if (toggleElement) {
            this.createThumbElement(isDouble, this.firstThumb, this.secondThumb);
            this.setThumbValue(isDouble, firstValue, secondValue);
        }
    }
    // methods creating form
    createForm(parent: HTMLDivElement): void {
        this.form = <HTMLDivElement>(document.createElement('div'));
        this.form.classList.add('range-slider__form');
        parent.append(this.form);
    }

    createInput(isDouble: boolean): void {
        if (isDouble) {
            this.input = document.createElement('input');
            this.input.type = 'range';
            this.input.classList.add('range-slider__input');
            this.input.classList.add('range-slider__input_first');
            this.form.append(this.input);

            this.secondInput = document.createElement('input');
            this.secondInput.type = 'range';
            this.secondInput.classList.add('range-slider__input');
            this.secondInput.classList.add('range-slider__input_second');
            this.form.append(this.secondInput);

        } else {
            this.input = document.createElement('input');
            this.input.type = 'range';
            this.input.classList.add('range-slider__input');
            this.form.append(this.input);
        }
    }

    setValues(isDouble: boolean, value: number, secondValue?: number): void {
        this.input.value = String(value);

        if (isDouble && secondValue) {
            this.secondInput.value = String(secondValue);
        }
    }

    setMax(isDouble: boolean, max: number) {
        this.input.max = String(max);
        if (isDouble) {
            this.secondInput.max = String(max);
        }
    }

    setMin(isDouble: boolean, min: number) {
        this.input.min = String(min);
        if (isDouble) {
            this.secondInput.max = String(min);
        }
    }

    // methods creating thumbs

    createThumb(parent: HTMLDivElement, isDouble: boolean): void {
        this.firstThumb = document.createElement('div');
        this.firstThumb.className = 'range-slider__thumb';
        parent.append(this.firstThumb);

        if (isDouble) {
            this.firstThumb.classList.add('range-slider__thumb_first');
            this.secondThumb = document.createElement('div');
            this.secondThumb.classList.add('range-slider__thumb');
            this.secondThumb.classList.add('range-slider__thumb_right');
            parent.append(this.secondThumb);
        }
    }

    createThumbElement(isDouble: boolean, parent: HTMLDivElement, secondParent?: HTMLDivElement): void {
        this.showThumb = document.createElement('p');
        this.showThumb.className = 'range-slider__value-thumb';
        parent.append(this.showThumb);
        if (isDouble) {
          this.showSecondThumb = document.createElement('p');
          this.showSecondThumb.classList.add('range-slider__value-thumb');
          secondParent!.append(this.showSecondThumb);
        } 
    }

    setThumbValue(isDouble: boolean, value: number, secondValue?: number): void {
        if (this.showThumb) {
            this.showThumb.textContent = String(value);
            if (isDouble) {
              this.showSecondThumb!.textContent = String(secondValue);
            }
        }
    }

    setThumb(isDouble: boolean, percent: number, percentSecond?: number): void {
        this.firstThumb.style.left = `${percent}%`;
        if (isDouble) {
            this.secondThumb.style.right = `${100 - (percentSecond || 0)}%`;
        }
    }

    rotateThumb(): void {
        const classNameVertical = 'range-slider__value-thumb_vertical';
        this.showThumb.classList.add(classNameVertical);
        if (this.showSecondThumb) {
            this.showSecondThumb.classList.add(classNameVertical);
        }
    }
}

export default View;