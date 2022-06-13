import ThumbView from './thumbView';

describe('test thumb', () => {
  let thumb: ThumbView;

  beforeEach(() => {
    thumb = new ThumbView();
    thumb.init(document.body, true, true, 10, 30);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('write thumb value', () => {
    thumb.writeBubbleValue(false, 10, undefined);
    expect(thumb.firstThumb.textContent).toEqual(`First value: ${String(10)}`);
    thumb.writeBubbleValue(true, 10, 30);
    expect(thumb.secondThumb.textContent).toEqual(`Second value: ${String(30)}`);
  });

  test('place thumb on input', () => {
    thumb.placeThumb(false, 10, 0);
    expect(thumb.firstThumb.style.left).toBe(`${10}%`);
    thumb.placeThumb(true, 10, 30);
    expect(thumb.secondThumb.style.right).toBe(`${70}%`);
    thumb.placeThumb(true, 10, 0);
    expect(thumb.secondThumb.style.right).toBe(`${100}%`);
  });

  test('thumb color is changed correctly', () => {
    const thumbColor = 'purple';
    thumb.changeThumbColor(thumbColor, false);
    expect(thumb.firstThumb.style.background).toEqual(thumbColor);
    thumb.changeThumbColor(thumbColor, true);
    expect(thumb.secondThumb.style.background).toEqual(thumbColor);
  });

  test('bubble color is changed correctly', () => {
    const bubbleColor = 'purple';
    thumb.changeBubbleColor(bubbleColor, false);
    expect(thumb.showBubble.style.backgroundColor).toEqual(bubbleColor);
    thumb.changeBubbleColor(bubbleColor, true);
    expect(thumb.showSecondBubble.style.backgroundColor).toEqual(bubbleColor);
  });
});