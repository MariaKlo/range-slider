class TicksView {
  createTicks = (ticksValues: Array<number>, width: number) => {
    const ticksElement = document.createElement('div');
    ticksElement.classList.add('range-slider__ticks');

    const values = [];
    for (let i = 0; i < ticksValues.length; i += 1) {
      const divValue: HTMLDivElement = document.createElement('div');
      divValue.classList.add('range-slider__tick');
      // add tick
      const value: number = ticksValues[i];
      divValue.textContent = String(`– ${value}`);
      ticksElement.append(divValue);
      // set length of ticks
      const min = ticksValues[0];
      const max = ticksValues[ticksValues.length - 1];
      const percent: number = Math.round(((value - min) / (max - min)) * 100);
      divValue.style.left = `${percent}%`;

      values.push({ element: divValue, value });

      divValue.style.marginLeft = `-${this.placeTicks(width)}%`;
    }
    return {
      ticksElement,
      values,
    };
  };
    
  placeTicks = (containerWidth: number): number => (0.42 * containerWidth + 777.8) / containerWidth;
}

export default TicksView;