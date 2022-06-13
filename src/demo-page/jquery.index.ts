/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './index.scss';
import '../range-slider/index.scss';
// import './panel.js';
import Model from '../range-slider/Model/Model';
import View from '../range-slider/View/View';
import BarView from '../range-slider/View/subView/barView/barView';
import StepView from '../range-slider/View/subView/stepView/stepView';
import TicksView from '../range-slider/View/subView/ticksView/ticksView';
import ThumbView from '../range-slider/View/subView/thumbView/thumbView';
import Presenter from '../range-slider/Presenter/Presenter';
import FormView from '../range-slider/View/subView/formView/formView';
import Options from '../range-slider/component/globalOptions';
  
// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  interface JQuery {
    sliderPlugin(options: Options): JQuery | Presenter;
  }
}

(function ($: JQueryStatic) {
  $.fn.sliderPlugin = function (settings: {
    max: number;
    min: number;
    step: number;
    defaultValue: number;
    valueSecond: number;
    isMultiThumb: boolean;
    showBubble: boolean;
    isVertical: boolean;
    showTicks: boolean;
    ticksValues: number[];
    barColor: string;
    thumbColor: string;
    bubbleColor: string;
  }) {
    const presenter: Presenter = new Presenter(
      new View(
        this,
        new TicksView(),
        new StepView(),
        new BarView(),
        new ThumbView(),
        new FormView(),
        settings,
      ),
      new Model({
        max: settings.max,
        min: settings.min,
        step: settings.step,
        defaultValue: settings.isMultiThumb ? settings.defaultValue : settings.valueSecond,
        valueSecond: settings.valueSecond,
        isMultiThumb: settings.isMultiThumb,
        showBubble: settings.showBubble,
        isVertical: settings.isVertical,
        showTicks: settings.showTicks,
        ticksValues: settings.ticksValues,
        barColor: settings.barColor,
        thumbColor: settings.thumbColor,
        bubbleColor: settings.bubbleColor,
      }),
    );
    return presenter;
  };
}(jQuery));