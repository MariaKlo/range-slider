import barView from "./barView";

describe('test progress bar', () => {
    let progressBar: barView;
    
    beforeEach(() => {
        progressBar = new barView();
        progressBar.createProgressBar(document.body);
        progressBar.calcPercent(50, 0, 100);
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('one thumb, left progress bar', () => {
        progressBar.setDefault(false, 20);
        expect(progressBar.bar.style.left).toEqual('0px');
    });

    test('progress bar for two thumbs', () => {
        progressBar.setDefault(true, 20, 60);
        expect(progressBar.bar.style.left).toEqual('20%');
    });

    test('calculate percentage correctly', () => {
        progressBar.calcPercent(50, 0, 100);
        expect(progressBar.percentage).toEqual(50);
    });
});