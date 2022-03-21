import './View';

test('check the values', () => {
    expect((<HTMLInputElement>$rangeSlider).max).toBe(50);
})