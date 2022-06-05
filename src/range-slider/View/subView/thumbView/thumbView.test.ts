import ThumbView from './thumbView';

describe('test view', () => {
    let thumb: ThumbView;

    beforeEach(() => {
      thumb = new ThumbView();
      thumb.init(document.body, true, true, 10, 30);
      // thumb.createThumb = () => { thumb.createThumb(document.body, false); };
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
});