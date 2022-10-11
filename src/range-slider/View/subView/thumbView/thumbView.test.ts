import ThumbView from './thumbView';

describe('test thumb', () => {
  let thumb: ThumbView;
  let thumbCopy: ThumbView;

  beforeEach(() => {
    thumb = new ThumbView();
    thumbCopy = new ThumbView();
    thumb.init(document.body, true, true, 10, 30);
    thumbCopy.init(document.body, true, true, 10, 30);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('write thumb value', () => {
    // one thumb value
    const thumbCopyProto = Object.getPrototypeOf(thumbCopy);
    thumbCopyProto.createThumb(document.body, false);
    thumbCopyProto.createBubbleElement(false, document.body);
    thumbCopyProto.writeBubbleValue(false, undefined, undefined);
    expect(thumbCopyProto.firstThumb.textContent).toBe('');

    // two thumb values
    thumbCopyProto.createThumb(document.body, true);
    thumbCopyProto.createBubbleElement(true, document.body);
    thumbCopyProto.writeBubbleValue(true, 10, 30);
    expect(thumbCopyProto.secondThumb.textContent).toBe(`Second value: ${String(30)}`);
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
    const thumbColor = 'red';
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