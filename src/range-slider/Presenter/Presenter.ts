import Model from '../Model/Model';
import View from '../View/View';

class Presenter {
  view: View;

  model: Model;

  constructor(view: View, model: Model) {
    this.view = view;
    this.model = model;
    this.init();
  }

  init() {
    this.view.init();
    this.model.init();
    this.view.options = this.model.optionsForView;
  }

  updateModel(newValue: number, option: boolean) {
    this.model.update(newValue, option);
  }

  updateView() {
    this.view.options.defaultValue = this.model.defaultValue;
    this.view.options.valueSecond = this.model.valueSecond;
    this.view.setInput();
  }
}

export default Presenter;