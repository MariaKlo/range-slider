/* eslint-disable @typescript-eslint/no-non-null-assertion */
class bubbleView {
    firstBubble!: HTMLElement;
    secondBubble!: HTMLElement;
    showBubble!: HTMLElement;
    showSecondBubble!: HTMLElement;

    init(parent: HTMLElement, isDouble: boolean, toggleElement: boolean, firstValue: number, secondValue: number): void {
        this.createBubbleWrapper(parent, isDouble);
        if (toggleElement) {
            this.createBubbleElement(isDouble, this.firstBubble, this.secondBubble);
            this.setBubbleValue(isDouble, firstValue, secondValue);
        }
    }

    createBubbleWrapper(parent: HTMLElement, isDouble: boolean): void {
        this.firstBubble = document.createElement('div');
        this.firstBubble.className = 'range-slider__bubble';
        parent.append(this.firstBubble);
        if (isDouble) {
          this.firstBubble.classList.add('range-slider__bubble_first');
          this.secondBubble = document.createElement('div');
          this.secondBubble.classList.add('range-slider__bubble');
          this.secondBubble.classList.add('range-slider__bubble_second');
          parent.append(this.secondBubble);
        }
    }

    createBubbleElement(isDouble: boolean, parent: HTMLElement, secondParent?: HTMLElement): void {
        this.showBubble = document.createElement('p');
        this.showBubble.classList.add('range-slider__bubble');
        parent.append(this.showBubble);
        if (isDouble) {
          this.showSecondBubble = document.createElement('p');
          this.showSecondBubble.classList.add('range-slider__bubble');
          secondParent!.append(this.showSecondBubble);
        } 
    }

    setBubbleValue(isDouble: boolean, value: number, secondValue?: number): void {
        this.showBubble.textContent = String(value);
        if (isDouble) {
            this.showSecondBubble!.textContent = String(secondValue);
        }
    }

    setBubble(parent: HTMLElement, isDouble: boolean, percent: number, percentSecond?: number): void {
        this.createBubbleWrapper(parent, !isDouble);
        this.firstBubble.style.left = `${percent}%`;
        if (isDouble) {
            this.createBubbleWrapper(parent, isDouble);
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