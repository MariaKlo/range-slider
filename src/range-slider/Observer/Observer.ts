/* eslint-disable @typescript-eslint/no-unused-vars */
interface IObserverView {
  updateModel(arg0: number, arg1: boolean): void
}

interface IObserverModel {
  updateView(): void
}

class Observer implements IObserverView, IObserverModel {
  private observersInView!: IObserverView[];

  private observersInModel!: IObserverModel[];

  constructor() {
    this.observersInView = [];
    this.observersInModel = [];
  }

  updateModel(_arg0: number, _arg1: boolean): void {}

  updateView(): void {}

  subscribeInView = (observer: IObserverView): void => {
    this.observersInView.push(observer);
  };

  subscribeInModel = (observer: IObserverModel): void => {
    this.observersInModel.push(observer);
  };

  updateObserversInModel() {
    this.observersInModel.forEach((observer: IObserverModel) => {
      observer.updateView();
    });
  }
}

export { Observer, IObserverModel, IObserverView };