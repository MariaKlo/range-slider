/* eslint-disable @typescript-eslint/no-unused-vars */
import { Observer } from './Observer';

describe('test view', () => {
  let observer: Observer;

  beforeEach(() => {
    observer = new Observer();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('presenter subscribed to Model', () => {
    const IObserverModel = {
      updateView(): void {},
    };
    jest.spyOn(observer, 'subscribeInModel');
    observer.subscribeInModel(IObserverModel);
    expect(observer.subscribeInModel).toHaveBeenCalled();
  });

  test('presenter subscribed to View', () => {
    const IObserverView = {
      updateModel(): void {},
    };
    jest.spyOn(observer, 'subscribeInView');
    observer.subscribeInView(IObserverView);
    expect(observer.subscribeInView).toHaveBeenCalled();
  });
});