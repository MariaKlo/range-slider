class BarView {
  bar!: HTMLElement;

  createProgressBar(parent: HTMLElement): void {
    this.bar = document.createElement('div');
    this.bar.classList.add('range-slider__progress-bar');
    parent.append(this.bar);
  }

  calcPercent(value: number, min: number, max: number): number {
    return ((value - min) / (max - min)) * 100;
  }
    
  setDefault(isDouble: boolean, percent: number, percentSecond: number): void {
    if (isDouble) {
      this.bar.style.left = `${percent}%`;
      this.bar.style.right = `${100 - (percentSecond || 0)}%`;
    } else {
      this.bar.style.left = String(0);
      this.bar.style.right = `${100 - percent}%`;
    }
  }

  changeBarColor(color: string): void {
    this.bar.style.background = color;
  }
}

export default BarView;