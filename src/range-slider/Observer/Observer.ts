/* eslint-disable @typescript-eslint/no-unused-vars */
class Observer {
  observers!: (number | boolean)[];

  observer!: number | boolean;

  constructor() {
    this.init();
  }

  init(): void {
    this.updateModel(5, false);
    this.updateView();
  }

  updateModel(_arg0: number, _arg1: boolean): void {}

  updateView(): void {}

  subscribe = (): void => {
    this.observers.push(this.observer);
  };
}

export default Observer;