/* eslint-disable @typescript-eslint/no-unused-vars */
import Model from './Model/Model';
import View from './View/View';
import barView from './View/subView/barView/barView';
import bubbleView from './View/subView/bubbleView/bubbleView';
import stepView from './View/subView/stepView/stepView';
import ticksView from './View/subView/ticksView/ticksView';
import thumbView from './View/subView/thumbView/thumbView';
import Presenter from './Presenter/Presenter';
// import $ from 'jquery';
// import Options from './component/globalOptions';
// import { Slider, SliderFunction, SliderGlobalOptions, global } from './component/globalOptions';

interface Options {
  max: number;
  min: number;
  step: number;
  defaultValue: number;
  valueSecond: number;
  isMultiThumb: boolean;
  showRightProgressBar: boolean;
  showBubble: boolean;
  isVertical: boolean;
  showTicks: boolean;
  ticksValues: number[];
}

interface SliderGlobalOptions {
  /**
   * Global options of the example plugin.
   */
  options: Options;
  Slider: JQuery | void;
}
  
//   /**
//    * Function to apply the example plugin to the selected elements of a jQuery result.
//    */
interface SliderFunction {
  (options: Options): JQuery | void;
  Slider: JQuery | void;
}
  
//   /**
//    * Declaration of the example plugin.
//    */
interface Slider extends SliderGlobalOptions, SliderFunction {
  (behavior: 'enable'): JQuery | void;
  Slider: JQuery | void;
}
//   /**
//    * Extend the jQuery result declaration with the example plugin.
//    */

// eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  interface JQuery {
    Slider(options: Options): JQuery | void;
  }
}
// (function Slider($: JQueryStatic): void | JQuery<HTMLElement> {
export default function Slider(settings: Options): JQuery | void | Presenter {
       return new Presenter(
            new View(
              document.body,
              new ticksView(),
              new stepView(),
              new bubbleView(),
              new barView(),
              new thumbView(),
            ),
            new Model({
                max: settings.max,
                min: settings.min,
                step: settings.step,
                defaultValue: settings.isMultiThumb ? settings.defaultValue : settings.valueSecond,
                valueSecond: settings.valueSecond,
                isMultiThumb: settings.isMultiThumb,
                showRightProgressBar: settings.showRightProgressBar,
                showBubble: settings.showBubble,
                isVertical: settings.isVertical,
                showTicks: settings.showTicks,
                ticksValues: settings.ticksValues
              }),
        );
    }
// }(jQuery));

// const fetchOptionsFromDataAttr = (attr: Options): Options => Object.assign(
//     {}, ...Object.keys(attr).map((key) => (
//       { [key]: attr[key] === '' ? true : attr[key] }
//     )),
//   );
  
// $.fn.Slider = function Slider(this: JQuery): JQuery {
//   // const defaults: Options = {
//   //   max: 1,
//   //   min: 100,
//   //   step: 1,
//   //   defaultValue: 30,
//   //   valueSecond: 50,
//   //   isMultiThumb: false,
//   //   showRightProgressBar: false,
//   //   showBubble: true,
//   //   isVertical: false,
//   //   showTicks: false,
//   // };
  
//   // const dataAttrOptions: Options = fetchOptionsFromDataAttr(this.data());
  
//   return this.each((_, element) => {
//     $(element).data('api', new Presenter(
//       new View(
//         document.body,
//         new ticksView(),
//         new stepView(),
//         new bubbleView(),
//         new barView(document.body),
//         new thumbView(),
//       ),
//       new Model(),
//     ));
//   });
// };

// export default $.fn.Slider;