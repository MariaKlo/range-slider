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
        progressBar.setDefault(false, 20, 0);
        expect(progressBar.bar.style.left).toEqual('0px');
    });

    test('one thumb, right progress bar', () => {
        progressBar.setDefault(false, 20, 0);
        expect(progressBar.bar.style.right).toEqual('80%');
    });

    test('progress bar for two thumbs', () => {
        progressBar.setDefault(true, 20, 60);
        expect(progressBar.bar.style.left).toEqual('20%');
    });

    test('double thumbs, left progress bar', () => {
        progressBar.setDefault(true, 20, 60);
        expect(progressBar.bar.style.left).toEqual('20%');
      });

    test('double thumbs, right progress bar', () => {
        progressBar.setDefault(true, 20, 0);
        expect(progressBar.bar.style.right).toEqual('100%');
    });

    test('calculate percentage correctly', () => {
        progressBar.calcPercent(50, 0, 100);
        expect(progressBar.calcPercent).toEqual(50);
    });
});