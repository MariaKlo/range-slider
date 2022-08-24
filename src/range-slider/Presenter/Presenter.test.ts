import Presenter from './Presenter';

import View from '../View/View';
import Model from '../Model/Model';

describe('test Presenter', () => {
  let presenter: Presenter;
  let model: Model;
  let view: View;

  const data = {
    max: 100,
    min: 0,
    step: 1,
    defaultValue: 11,
    valueSecond: 23,
    isMultiThumb: true,
    showBubble: true,
    isVertical: true,
    showTicks: true,
    ticksValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    barColor: '#000000',
    thumbColor: 'green',
    bubbleColor: 'yellow',
  };

  beforeEach(() => {
    model = new Model(data);
    view = new View(document.body, data);

    presenter = new Presenter(view, model);
  });

  test('Model is initialized', () => {
    jest.spyOn(presenter.model, 'init');
    presenter.init();
    expect(presenter.model.init).toHaveBeenCalled();
  });

  test('View is initialized', () => {
    jest.spyOn(presenter.view, 'init');
    presenter.init();
    expect(presenter.view.init).toHaveBeenCalled();
  });

  // test('presenter subscribed to Model', () => {
  //   jest.spyOn(presenter.model, 'subscribe');
  //   presenter.init();
  //   expect(presenter.model.subscribe).toHaveBeenCalledWith(presenter);
  // });

  // test('presenter subscribed to View', () => {
  //   jest.spyOn(presenter.view, 'subscribe');
  //   presenter.init();
  //   expect(presenter.view.subscribe).toHaveBeenCalledWith(presenter);
  // });

  test('transfer data from model to view', () => {
    presenter.view.options = data;
    presenter.init();
    presenter.view.init();
    expect(presenter.view.options).toEqual(data);
  });

  test('Model updates with correct arguments, default settings', () => {
    jest.spyOn(presenter.model, 'update');
    presenter.updateModel(10, true);
    expect(presenter.model.update).toHaveBeenCalledWith(10, true);
  });

  test('Model updates with correct arguments, second thumb', () => {
    jest.spyOn(presenter.model, 'update');
    presenter.updateModel(1, false);
    expect(presenter.model.update).toHaveBeenCalledWith(1, false);
  });

  test('View updates with correct arguments, default thumb', () => {
    const correctThumbValue = 42;
    presenter.model.defaultValue = correctThumbValue;
    presenter.updateView();
    expect(presenter.view.options.defaultValue).toBe(correctThumbValue);
  });

  test('View updates with correct arguments, second thumb', () => {
    const correctThumbValue = 0;
    presenter.model.valueSecond = correctThumbValue;
    presenter.updateView();
    expect(presenter.view.options.valueSecond).toBe(correctThumbValue);
  });

  test('setInput function called after View update', () => {
    jest.spyOn(presenter.view, 'setInput');
    presenter.updateView();
    expect(presenter.view.setInput).toHaveBeenCalled();
  });
});