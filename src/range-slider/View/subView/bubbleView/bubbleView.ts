/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
class bubbleView {
    firstBubble!: HTMLElement;
    secondBubble!: HTMLElement;
    showBubble!: HTMLElement;
    showSecondBubble!: HTMLElement;
    parent!: HTMLElement;
    secondParent!: HTMLElement;

    init(_parent: HTMLElement, isDouble: boolean, toggleElement: boolean, firstValue: number, secondValue: number): void {
        if (toggleElement) {
            this.createBubbleElement(isDouble, this.firstBubble, this.secondBubble);
            this.setBubbleValue(isDouble, firstValue, secondValue);
        }
    }

    createThumbWrapper(parent: HTMLElement, isDouble: boolean): void {
        this.firstBubble = document.createElement('div');
        this.firstBubble.className = 'range-slider__thumb';
        parent.append(this.firstBubble);
        if (isDouble) {
          this.firstBubble.classList.add('range-slider__thumb_first');
          this.secondBubble = document.createElement('div');
          this.secondBubble.classList.add('range-slider__thumb');
          this.secondBubble.classList.add('range-slider__thumb_second');
          parent.append(this.secondBubble);
        }
    }

    createBubbleElement(isDouble: boolean, _parent: HTMLElement, _secondParent?: HTMLElement): void {
        this.showBubble = document.createElement('p');
        this.showBubble.classList.add('range-slider__bubble');
        this.firstBubble.append(this.showBubble);
        if (isDouble) {
          this.showSecondBubble = document.createElement('p');
          this.showSecondBubble.classList.add('range-slider__bubble');
          this.secondBubble.append(this.showSecondBubble);
        } 
    }

    setBubbleValue(isDouble: boolean, value: number, secondValue?: number): void {
        this.showBubble.textContent = String(value);
        if (isDouble) {
            this.createBubbleElement(isDouble, this.parent, this.secondParent);
            this.showSecondBubble.textContent = String(secondValue);
        }
    }

    setBubble(_parent: HTMLElement, isDouble: boolean, percent: number, percentSecond?: number): void {
        this.firstBubble.style.left = `${percent}%`;
        if (isDouble) {
            this.secondBubble.style.right = `${100 - (percentSecond || 0)}%`;
        }
    }

    rotateBubble(): void {
        this.showBubble = document.createElement('div');
        const classNameVertical = 'range-slider__bubble_vertical';
        this.showBubble.classList.add(classNameVertical);
        if (this.showSecondBubble) {
            this.showSecondBubble = document.createElement('div');
            this.showSecondBubble.classList.add(classNameVertical);
        }
    }
}

export default bubbleView;