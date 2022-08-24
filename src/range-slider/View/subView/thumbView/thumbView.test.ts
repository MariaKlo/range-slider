import ThumbView from './thumbView';

describe('test thumb', () => {
  let thumb: ThumbView;
  const thumbCopy = new ThumbView();
  const thumbCopyProto = Object.getPrototypeOf(thumbCopy);

  beforeEach(() => {
    thumb = new ThumbView();
    thumb.init(document.body, true, true, 10, 30);
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('write thumb value', () => {
    thumb.writeBubbleValue(false, 10, undefined);
    expect(thumbCopyProto.firstThumb.textContent).toEqual(`First value: ${String(10)}`);
    thumb.writeBubbleValue(true, 10, 30);
    expect(thumbCopyProto.secondThumb.textContent).toEqual(`Second value: ${String(30)}`);
  });

  test('place thumb on input', () => {
    thumb.placeThumb(false, 10, 0);
    expect(thumbCopyProto.firstThumb.style.left).toBe(`${10}%`);
    thumb.placeThumb(true, 10, 30);
    expect(thumbCopyProto.secondThumb.style.right).toBe(`${70}%`);
    thumb.placeThumb(true, 10, 0);
    expect(thumbCopyProto.secondThumb.style.right).toBe(`${100}%`);
  });

  test('thumb color is changed correctly', () => {
    const thumbColor = 'purple';
    thumb.changeThumbColor(thumbColor, false);
    expect(thumbCopyProto.firstThumb.style.background).toEqual(thumbColor);
    thumb.changeThumbColor(thumbColor, true);
    expect(thumbCopyProto.secondThumb.style.background).toEqual(thumbColor);
  });

  test('bubble color is changed correctly', () => {
    const bubbleColor = 'purple';
    thumb.changeBubbleColor(bubbleColor, false);
    expect(thumbCopyProto.showBubble.style.backgroundColor).toEqual(bubbleColor);
    thumb.changeBubbleColor(bubbleColor, true);
    expect(thumbCopyProto.showSecondBubble.style.backgroundColor).toEqual(bubbleColor);
  });
});