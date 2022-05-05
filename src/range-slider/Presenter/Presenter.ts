import View from '../View/View';
import Model from '../Model/Model';

class Presenter {
  view: View;
  model: Model;

  constructor (view: View, model: Model) {
    this.view = view;
    this.model = model;
    this.init();
  }

  init() {
      this.view.init();
    //   this.model.init();
  }
}
export default Presenter;