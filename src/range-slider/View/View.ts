/* eslint-disable @typescript-eslint/no-non-null-assertion */
class View {
    // vars for form
    form!: HTMLElement;
    input!: HTMLInputElement;
    secondInput!: HTMLInputElement;
    // vars for thumbs
    firstThumb!: HTMLDivElement;
    secondThumb!: HTMLDivElement;


    init(parent: HTMLElement, isDouble: boolean, min: number, max: number): void {
        this.createForm(parent);
        this.createInput(isDouble);
        this.setMax(isDouble, max);
        this.setMin(isDouble, min);
        // thumbs
        this.createThumb(parent, isDouble);
    }
    // methods creating form
    createForm(parent: HTMLElement): void {
        this.form = <HTMLElement>(document.createElement('div'));
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
            this.secondInput.min = String(min);
        }
    }

    // methods creating thumbs

    createThumb(parent: HTMLElement, isDouble: boolean): void {
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
}

export default View;