/* eslint-disable @typescript-eslint/no-non-null-assertion */
class bubbleView {
    firstBubble!: HTMLDivElement;
    secondBubble!: HTMLDivElement;
    showBubble!: HTMLDivElement;
    showSecondBubble!: HTMLDivElement;

    init(isDouble: boolean, toggleElement: boolean, firstValue: number, secondValue: number): void {
        if (toggleElement) {
            this.createBubbleElement(isDouble, this.firstBubble, this.secondBubble);
            this.setBubbleValue(isDouble, firstValue, secondValue);
        }
    }

    createBubbleElement(isDouble: boolean, parent: HTMLElement, secondParent?: HTMLElement): void {
        this.showBubble = document.createElement('p');
        this.showBubble.className = 'range-slider__bubble';
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

    setBubble(isDouble: boolean, percent: number, percentSecond?: number): void {
        this.firstBubble.style.left = `${percent}%`;
        if (isDouble) {
            this.secondBubble.style.right = `${100 - (percentSecond || 0)}%`;
        }
    }

    rotateBubble(): void {
        const classNameVertical = 'range-slider__bubble_vertical';
        this.showBubble.classList.add(classNameVertical);
        if (this.showSecondBubble) {
            this.showSecondBubble.classList.add(classNameVertical);
        }
    }
}

export default bubbleView;