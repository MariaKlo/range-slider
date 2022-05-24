/* eslint-disable @typescript-eslint/no-non-null-assertion */
class ThumbView {
    firstThumb!: HTMLDivElement;
    secondThumb!: HTMLDivElement;
    thumbOut!: HTMLDivElement;
    thumbOutSecond!: HTMLDivElement;

    init(parent: HTMLElement, isDouble: boolean, toggleElement: boolean, defaultValue: number,
        secondValue?: number) {
        this.createThumb(parent, isDouble);
        if (toggleElement) {
            this.writeThumbValue(isDouble, defaultValue, secondValue);
        } 
    }

    createThumb(parent: HTMLElement, isDouble: boolean): void {
        this.firstThumb = document.createElement('div');
        this.firstThumb.className = 'range-slider__thumb';
        parent.append(this.firstThumb);

        if (isDouble) {
            this.firstThumb.classList.add('range-slider__thumb_first');
            this.secondThumb = document.createElement('div');
            this.secondThumb.classList.add('range-slider__thumb');
            this.secondThumb.classList.add('range-slider__thumb_second');
            parent.append(this.secondThumb);
        }
    }

    writeThumbValue(isMultiThumb: boolean, value: number, secondValue?: number): void {
      if (this.firstThumb) {
        this.firstThumb.textContent = `First value: ${String(value)}`;
        if (isMultiThumb) {
          this.secondThumb!.textContent = `Second value: ${String(secondValue)}`
        }
      }
    }

    placeThumb(isDouble: boolean, percent: number, percentSecond?: number): void {
      this.firstThumb.style.left = `${percent}%`;
      if (isDouble) {
        this.secondThumb.style.right = `${100 - (percentSecond || 0)}%`;
      }
    }
}

export default ThumbView;