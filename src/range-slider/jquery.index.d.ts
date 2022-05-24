/* eslint-disable @typescript-eslint/no-unused-vars */
import Model from './Model/Model';
import View from './View/View';
import barView from './View/subView/barView/barView';
import bubbleView from './View/subView/bubbleView/bubbleView';
import stepView from './View/subView/stepView/stepView';
import ticksView from './View/subView/ticksView/ticksView';
import thumbView from './subView/thumbView/thumbView';
import Presenter from './Presenter/Presenter';
import Options from './component/globalOptions';
import { Slider, SliderFunction, SliderGlobalOptions, JQuery } from './component/globalOptions';

// (function Slider($: JQueryStatic) {
//     $.fn.Slider = function init(settings: Options) {
//         return new Presenter(
//             new Model({
//                 max: settings.max,
//                 min: settings.min,
//                 step: settings.step,
//                 defaultValue: settings.isMultiThumb ? settings.secondValue : settings.defaultValue,
//                 secondValue: settings.secondValue,
//                 isMultiThumb: settings.isMultiThumb,
//                 rightProgressBar: settings.rightProgressBar,
//                 showBubble: settings.showBubble,
//                 isVertical: settings.isVertical,
//                 showTicks: settings.showTicks,
//             }),
//             new View(
//                 this,
//                 new barView(),
//                 new bubbleView(),
//                 new stepView(),
//                 new ticksView(),
//             ),
//         );
//     };
// }(jQuery));

const fetchOptionsFromDataAttr = (attr: Options): Options => Object.assign(
    {}, ...Object.keys(attr).map((key) => (
      { [key]: attr[key] === '' ? true : attr[key] }
    )),
  );
  
  $.fn.Slider = function Slider(this: JQuery, options?: Options): JQuery {
    const defaults: Options = {
      max: 1,
      min: 100,
      step: 1,
      defaultValue: 30,
      valueSecond: 50,
      isMultiThumb: false,
      showRightProgressBar: false,
      showBubble: true,
      isVertical: false,
      showTicks: false,
    };
  
    const dataAttrOptions: Options = fetchOptionsFromDataAttr(this.data());
  
    return this.each((_, element) => {
      $(element).data('api', new Presenter(
          new Model({
            max: settings.max,
            min: settings.min,
            step: settings.step,
            defaultValue: settings.isMultiThumb ? settings.secondValue : settings.defaultValue,
            secondValue: settings.secondValue,
            isMultiThumb: settings.isMultiThumb,
            rightProgressBar: settings.rightProgressBar,
            showBubble: settings.showBubble,
            isVertical: settings.isVertical,
            showTicks: settings.showTicks,
        }),
        new View(
          this,
          new ticksView(),
          new stepView(),
          new bubbleView(),
          new barView(),
          new thumbView(),
        ),
      ));
    });
  };

$('#plugin').Slider({
    max: 500,
    min: 50,
    step: 1,
});

export default $.fn.Slider;