import bubbleView from './bubbleView';

describe('test view', () => {
    let bubble: bubbleView;

    const bubbleOptions = {
        setTwoThumbs: false,
        firstValue: 10,
        secondValue: 50,
        percent: 30,
        percentSecond: 60
    };

    beforeEach(() => {
        bubble = new bubbleView();
    });
    afterEach(() => {
        document.body.innerHTML = '';
    });

    // tests for thumb
    test('value for first thumb is set correctly', () => {
        const { setTwoThumbs, firstValue } = bubbleOptions;
        bubble.createBubbleElement(setTwoThumbs, document.body);
        bubble.setBubbleValue(setTwoThumbs, firstValue);
        expect(bubble.showBubble.textContent).toBe(String(firstValue));
    });

    test('values of bubbles for two thumbs are set correctly', () => {
        bubbleOptions.setTwoThumbs = true;
        const { setTwoThumbs, firstValue, secondValue } = bubbleOptions;
        bubble.createBubbleElement(setTwoThumbs, document.body, document.body);
        bubble.setBubbleValue(setTwoThumbs, firstValue, secondValue);
        expect(bubble.showBubble.textContent).toBe(String(firstValue));
        expect(bubble.showSecondBubble.textContent).toBe(String(secondValue));
    });

    test('create bubble wrapper with double thumbs', () => {
        jest.spyOn(bubble, 'createBubbleWrapper');
        bubble.createBubbleWrapper(document.body, true);
        expect(bubble.createBubbleWrapper).toHaveBeenCalledTimes(1);
    });

    test('set two bubbles considering percent and double thumbs', () => {
        jest.spyOn(bubble, 'setBubble');
        bubble.setBubble(document.body, true, bubbleOptions.percent, bubbleOptions.percentSecond);
        expect(bubble.secondBubble.style.right).toEqual(`40%`);
    });

    test('set two bubbles considering percent and double thumbs (100% percent for 2nd bubble)', () => {
        jest.spyOn(bubble, 'setBubble');
        bubble.setBubble(document.body, true, bubbleOptions.percent, undefined);
        expect(bubble.secondBubble.style.right).toEqual(`100%`);
    });

    test('rotate second bubble to vertical position', () => {
        const classNameVertical = 'range-slider__bubble_vertical';
        bubble.showSecondBubble = document.createElement('div');
        bubble.showSecondBubble.classList.add(classNameVertical);
        bubble.rotateBubble();
        expect(bubble.showSecondBubble.classList.contains(classNameVertical)).toBe(true);
    });
});