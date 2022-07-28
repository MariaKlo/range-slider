/* eslint-disable @typescript-eslint/no-unused-vars */
class Observer {

  constructor() {
    this.init();
  }

  init(): void {
    this.updateModel(5, false);
    this.updateView();
  }

  updateModel(_arg0: number, _arg1: boolean): void {}

  updateView(): void {}
}

export default Observer;