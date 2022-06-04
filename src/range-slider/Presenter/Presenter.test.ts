import View from '../View/View';
import stepView from '../View/subView/stepView/stepView';
// import bubbleView from '../View/subView/bubbleView/bubbleView';
import barView from '../View/subView/barView/barView';
import ticksView from '../View/subView/ticksView/ticksView';
import thumbView from '../View/subView/thumbView/thumbView';
import formView from '../View/subView/formView/formView';
import Model from '../Model/Model';
import Presenter from './Presenter';
import Options from "../component/globalOptions";

describe('test Presenter', () => {
    let presenter: Presenter;
    let model: Model;
    let view: View;

    let step: stepView;
    // let bubble: bubbleView;
    let bar: barView;
    let ticks: ticksView;
    let thumb: thumbView;
    let form: formView;

    let options: Options;

    beforeEach(() => {
      model = new Model(options);
      step = new stepView();
      // bubble = new bubbleView();
      bar = new barView();
      ticks = new ticksView();
      thumb = new thumbView();
      view = new View(document.body, ticks, step, bar, thumb, form);

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
    test('presenter subscribed to Model', () => {
      jest.spyOn(presenter.model, 'subscribe');
      presenter.init();
      expect(presenter.model.subscribe).toHaveBeenCalledWith(presenter);
    });
    test('presenter subscribed to View', () => {
      jest.spyOn(presenter.view, 'subscribe');
      presenter.init();
      expect(presenter.view.subscribe).toHaveBeenCalledWith(presenter);
    });
    test('transfer data from model to view', () => {
      const data = {
        max: 100,
        min: 0,
        step: 1,
        defaultValue: 11,
        valueSecond: 23,
        isMultiThumb: true,
        showRightProgressBar: false,
        showBubble: true,
        isVertical: true,
        showTicks: true,
        ticksValues: [0, 50, 100],
      };
      presenter.model.optionsForView = data;
      presenter.init();
      expect(presenter.view.options).toEqual(data);
    });
    test('Model updates with correct arguments, default settings', () => {
      const updateArgs = {
        value: 10,
        isDefault: true,
      };
      const { value: correctValue, isDefault: correctOption } = updateArgs;
      jest.spyOn(presenter.model, 'update');
      presenter.updateModel(correctValue, correctOption);
      expect(presenter.model.update).toHaveBeenCalledWith(correctValue, correctOption);
    });
    test('Model updates with correct arguments, right thumb', () => {
      const updateArgs = {
        value: -1001,
        isDefault: false,
      };
      const { value: correctValue, isDefault: correctOption } = updateArgs;
      jest.spyOn(presenter.model, 'update');
      presenter.updateModel(correctValue, correctOption);
      expect(presenter.model.update).toHaveBeenCalledWith(correctValue, correctOption);
    });
    test('View updates with correct arguments, default (single or left) thumb', () => {
      const correctThumbValue = 42;
      presenter.model.defaultValue = correctThumbValue;
      presenter.updateView();
      expect(presenter.view.options.defaultValue).toBe(correctThumbValue);
    });
    test('View updates with correct arguments, right thumb', () => {
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