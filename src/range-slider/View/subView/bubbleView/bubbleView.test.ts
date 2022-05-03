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

    test('value for two thumbs is set correctly', () => {
        bubbleOptions.setTwoThumbs = true;
        const { setTwoThumbs, firstValue, secondValue } = bubbleOptions;
        bubble.createBubbleElement(setTwoThumbs, document.body, document.body);
        bubble.setBubbleValue(setTwoThumbs, firstValue, secondValue);
        expect(bubble.showBubble.textContent).toBe(String(firstValue));
        expect(bubble.showSecondBubble.textContent).toBe(String(secondValue));
    });
});