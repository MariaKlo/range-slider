/* eslint-disable @typescript-eslint/no-unused-vars */
import { Observer } from './Observer';

// import Model from '../Model/Model';
import View from '../View/View';
import FormView from '../View/subView/formView/formView';

describe('test view', () => {
  let observer: Observer;
  // let model: Model;
  let view: View;

  const data =     {
    max: 1500,
    min: 100,
    step: 100,
    defaultValue: 200,
    valueSecond: 500,
    isMultiThumb: true,
    showBubble: true,
    isVertical: true,
    showTicks: true,
    ticksValues: [100, 500, 1000, 1500],
    barColor: 'purple',
    thumbColor: 'black',
    bubbleColor: 'orange',
  };

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('updateObservers work correctly with updateView', () => {
    const formCopy = new FormView();
    const formCopyProto = Object.getPrototypeOf(formCopy);
    formCopyProto.createInput(true);

    const observers = {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      updateModel(_arg0: number, _arg1: boolean): void {},
    };
    observer.subscribeInView(observers);
    jest.spyOn(view.observers[0], 'updateModel');

    const viewCopy = new View(document.body, data);
    const viewCopyProto = Object.getPrototypeOf(viewCopy);
    viewCopyProto.update(30, true);
    
    view.observers[0].updateModel(30, true);
    expect(view.observers[0].updateModel).toHaveBeenCalled();
  });

  // test('updateObservers work correctly with updateView', () => {
  //   const observers = {
  //     // eslint-disable-next-line @typescript-eslint/no-empty-function
  //     updateView(): void {},
  //   };
  //   observer.subscribeInModel(observers);
  //   jest.spyOn(model.observers[0], 'updateView');
  //   observer.updateObserversInModel();
  //   expect(model.observers[0].updateView).toHaveBeenCalled();
  // });
});