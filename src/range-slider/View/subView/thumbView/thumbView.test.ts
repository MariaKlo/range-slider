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
    const thumbCopyProto = Object.getPrototypeOf(thumbCopy);
    thumbCopyProto.placeThumb(false, 10, 0);
    expect(thumbCopyProto.firstThumb.style.left).toBe(`${10}%`);
    thumbCopyProto.placeThumb(true, 10, 30);
    expect(thumbCopyProto.secondThumb.style.right).toBe(`${70}%`);
    thumbCopyProto.placeThumb(true, 10, 0);
    expect(thumbCopyProto.secondThumb.style.right).toBe(`${100}%`);
  });

  test('thumb color is changed correctly', () => {
    const thumbCopyProto = Object.getPrototypeOf(thumbCopy);
    const thumbColor = 'red';
    thumbCopyProto.changeThumbColor(thumbColor, false);
    expect(thumbCopyProto.firstThumb.style.background).toEqual(thumbColor);
    thumbCopyProto.changeThumbColor(thumbColor, true);
    expect(thumbCopyProto.secondThumb.style.background).toEqual(thumbColor);
  });

  test('bubble color is changed correctly', () => {
    const thumbCopyProto = Object.getPrototypeOf(thumbCopy);
    const bubbleColor = 'purple';
    thumbCopyProto.changeBubbleColor(bubbleColor, false);
    expect(thumbCopyProto.showBubble.style.backgroundColor).toEqual(bubbleColor);
    thumbCopyProto.changeBubbleColor(bubbleColor, true);
    expect(thumbCopyProto.showSecondBubble.style.backgroundColor).toEqual(bubbleColor);
  });
});