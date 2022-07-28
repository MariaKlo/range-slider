/* eslint-disable @typescript-eslint/no-unused-vars */
import Observer from './Observer';

import Model from '../Model/Model';
import View from '../View/View';
import FormView from '../View/subView/formView/formView';

describe('test view', () => {
  let observer: Observer;
  let model: Model;
  let view: View;
  let form: FormView;

  beforeEach(() => {
    observer.init();
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('updateObservers work correctly with updateView', () => {
    form.createInput(true);
    const observers = {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      updateModel(_arg0: number, _arg1: boolean): void {},
    };
    view.subscribe(observers);
    jest.spyOn(view.observers[0], 'updateModel');
    view.update(30, true);
    view.observers[0].updateModel(30, true);
    expect(view.observers[0].updateModel).toHaveBeenCalled();
  });

  test('updateObservers work correctly with updateView', () => {
    const observers = {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      updateView(): void {},
    };
    model.subscribe(observers);
    jest.spyOn(model.observers[0], 'updateView');
    model.updateObservers();
    expect(model.observers[0].updateView).toHaveBeenCalled();
  });
});