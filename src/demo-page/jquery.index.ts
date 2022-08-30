/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './index.scss';

import '../range-slider/index.scss';
import Model from '../range-slider/Model/Model';
import Presenter from '../range-slider/Presenter/Presenter';
import View from '../range-slider/View/View';
import Options from '../range-slider/component/Options';
  
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
    barColor: string;
    thumbColor: string;
    bubbleColor: string;
  }) {
    const presenter: Presenter = new Presenter(
      new View(
        this,
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
        barColor: settings.barColor,
        thumbColor: settings.thumbColor,
        bubbleColor: settings.bubbleColor,
      }),
    );
    return presenter;
  };
}(jQuery));