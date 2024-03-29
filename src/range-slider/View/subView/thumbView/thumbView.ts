class ThumbView {
  firstThumb!: HTMLElement;

  secondThumb!: HTMLElement;

  showBubble!: HTMLElement;

  showSecondBubble!: HTMLElement;

  init(parent: HTMLElement, isDouble: boolean, toggleElement: boolean, defaultValue: number,
    secondValue?: number) {
    this.createThumb(parent, isDouble);
    if (toggleElement) {
      this.createBubbleElement(isDouble, this.firstThumb);
      this.writeBubbleValue(isDouble, defaultValue, secondValue);
    } 
  }

  private createThumb(parent: HTMLElement, isDouble: boolean) {
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

  private createBubbleElement(isDouble: boolean, parent: HTMLElement): void {
    this.showBubble = document.createElement('p');
    this.showBubble.classList.add('range-slider__bubble');
    parent.append(this.showBubble);
    if (isDouble) {
      this.showSecondBubble = document.createElement('p');
      this.showSecondBubble.classList.add('range-slider__bubble');
      this.secondThumb.append(this.showSecondBubble);
    } 
  }

  writeBubbleValue(isMultiThumb: boolean, value: number, secondValue?: number): void {
    if (this.showBubble) {
      this.showBubble.textContent = `First value: ${String(value)}`;
      if (isMultiThumb) {
        this.showSecondBubble.textContent = `Second value: ${String(secondValue)}`;
      }
    }
  }

  placeThumb(isDouble: boolean, percent: number, percentSecond?: number): void {
    this.firstThumb.style.left = `${percent}%`;
    if (isDouble) {
      this.secondThumb.style.right = `${100 - (percentSecond || 0)}%`;
    }
  }

  rotateBubble(): void {
    const classNameVertical = 'range-slider__bubble_vertical';
    this.showBubble.classList.add(classNameVertical);
    if (this.showSecondBubble) {
      this.showSecondBubble.classList.add(classNameVertical);
    }
  }

  changeThumbColor(color: string, isDouble: boolean): void {
    this.firstThumb.style.background = color;
    if (isDouble) {
      this.secondThumb.style.background = color;
    }
  }

  changeBubbleColor(color: string, isDouble: boolean): void {
    const secondBubble = isDouble && this.showSecondBubble;
    if (this.showBubble) {
      this.showBubble.style.backgroundColor = color;
    }
    if (secondBubble) {
      this.showSecondBubble.style.backgroundColor = color;
    }
  }
}

export default ThumbView;