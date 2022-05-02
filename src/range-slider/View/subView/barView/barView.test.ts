import barView from "./barView";

describe('test progress bar', () => {
    const progressBar = new barView();
    
    beforeEach(() => {
        const progressBar = new barView();
        progressBar.createProgressBar(document.body);
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('bar for one thumb, start left', () => {
        progressBar.setDefault(false, 20);
        expect(progressBar.bar.style.left).toEqual('0px');
    });

    test('bar for one thumb, start right', () => {
        progressBar.setDefault(false, 30);
        expect(progressBar.bar.style.right).toEqual('70%');
    });

    test('bar for two thumbs, show progress bar', () => {
        progressBar.setDefault(true, 30, 70);
        expect(progressBar.bar.style.right).toEqual('40%');
    });
});