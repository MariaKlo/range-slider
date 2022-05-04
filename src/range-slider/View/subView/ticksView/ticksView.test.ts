import ticksView from "./ticksView";

describe('test view', () => {
    let ticks: ticksView;

    beforeEach(() => {
        ticks = new ticksView();
    });
    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('ticks created with several elements (for every value and for ticks itself)', () => {
        const ticksValues = [1, 2, 3, 4, 5];
        jest.spyOn(document, 'createElement');
        ticks.createTicks(ticksValues, 100);
        expect(document.createElement).toHaveBeenCalledTimes(ticksValues.length + 1);
    });

    test('set ticks width considering min and max values', () => {
      const x = 450;
      expect(ticks.placeTicks(x)).toBe((0.42 * x + 777.8) / x);
    });
});