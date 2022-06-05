import './index.scss';
import '../range-slider/index.scss'
// import '../range-slider/jquery.slider.ts';
import $ from 'jquery';
import Model from '../range-slider/Model/Model';
import View from '../range-slider/View/View';
import barView from '../range-slider/View/subView/barView/barView';
// import bubbleView from '../range-slider/View/subView/bubbleView/bubbleView';
import stepView from '../range-slider/View/subView/stepView/stepView';
import ticksView from '../range-slider/View/subView/ticksView/ticksView';
import thumbView from '../range-slider/View/subView/thumbView/thumbView';
import Presenter from '../range-slider/Presenter/Presenter';
import formView from '../range-slider/View/subView/formView/formView';
import Options from '../range-slider/component/globalOptions';

// $.fn.Slider = function Slider(this: JQuery): JQuery {
//     // const defaults: Options = {
//     //   max: 1,
//     //   min: 100,
//     //   step: 1,
//     //   defaultValue: 30,
//     //   valueSecond: 50,
//     //   isMultiThumb: false,
//     //   showRightProgressBar: false,
//     //   showBubble: true,
//     //   isVertical: false,
//     //   showTicks: false,
//     // };
    
//     // const dataAttrOptions: Options = fetchOptionsFromDataAttr(this.data());
    
//     return this.each((_, element) => {
//       $(element).data('api', new Presenter(
//         new View(
//           document.body,
//           new ticksView(),
//           new stepView(),
//           new bubbleView(),
//           new barView(document.body),
//           new thumbView(),
//         ),
//         new Model(),
//       ));
//     });
//   };
  
//   export default $.fn.Slider;

// interface Options {
//     max: number;
//     min: number;
//     step: number;
//     defaultValue: number;
//     valueSecond: number;
//     isMultiThumb: boolean;
//     // showRightProgressBar: boolean;
//     showBubble: boolean;
//     isVertical: boolean;
//     showTicks: boolean;
//     ticksValues: number[];
//   }
  
  // interface SliderGlobalOptions {
  //   /**
  //    * Global options of the example plugin.
  //    */
  //   options: Options;
  //   Slider: JQuery | void;
  // }
    
  // //   /**
  // //    * Function to apply the example plugin to the selected elements of a jQuery result.
  // //    */
  // interface SliderFunction {
  //   (options: Options): JQuery | void;
  //   Slider: JQuery | void;
  // }
    
  // //   /**
  // //    * Declaration of the example plugin.
  // //    */
  // interface Slider extends SliderGlobalOptions, SliderFunction {
  //   (behavior: 'enable'): JQuery | void;
  //   Slider: JQuery | void;
  // }
  //   /**
  //    * Extend the jQuery result declaration with the example plugin.
  //    */
  
  // eslint-disable-next-line @typescript-eslint/no-namespace
declare global {
  interface JQuery {
    sliderPlugin(options: Options): JQuery | Presenter;
  }
}

(function ($: JQueryStatic) {
  $.fn.sliderPlugin = function(settings: Options) {
      const presenter: Presenter = new Presenter(
        new View(
          document.body,
          new ticksView(),
          new stepView(),
          // new bubbleView(),
          new barView(),
          new thumbView(),
          new formView()
        ),
        new Model({
          max: settings.max,
          min: settings.min,
          step: settings.step,
          defaultValue: settings.isMultiThumb ? settings.defaultValue : settings.valueSecond,
          valueSecond: settings.valueSecond,
          isMultiThumb: settings.isMultiThumb,
          // showRightProgressBar: settings.showRightProgressBar,
          showBubble: settings.showBubble,
          isVertical: settings.isVertical,
          showTicks: settings.showTicks,
          ticksValues: settings.ticksValues
        }),
      );
    return presenter;
  }
}(jQuery));

  // (function initSlider($: JQueryStatic) {
  //   $.fn.Slider = function init(settings: Options) {
  //     return new Presenter(
  //       new View(
  //         document.body,
  //         new ticksView(),
  //         new stepView(),
  //         new bubbleView(),
  //         new barView(document.body),
  //         new thumbView(),
  //       ),
  //       new Model({
  //         max: settings.max,
  //         min: settings.min,
  //         step: settings.step,
  //         defaultValue: settings.isMultiThumb ? settings.defaultValue : settings.valueSecond,
  //         valueSecond: settings.valueSecond,
  //         isMultiThumb: settings.isMultiThumb,
  //         showRightProgressBar: settings.showRightProgressBar,
  //         showBubble: settings.showBubble,
  //         isVertical: settings.isVertical,
  //         showTicks: settings.showTicks,
  //         ticksValues: settings.ticksValues
  //       }),
  //     );
  //   };
  // }(jQuery));

$('#api_first').sliderPlugin({
  max: 100, // nothing changes, default option remains
  min: 0, // nothing changes, default option remains
  step: 1, // works in api
  defaultValue: 50, // conflicts with default option
  valueSecond: 70, // conflicts with default option
  isMultiThumb: true, // conflicts, second thumb is not removed
  // showRightProgressBar: true,
  showBubble: true, // nothing changes, default option remains
  isVertical: true, // nothing changes, default option remains
  showTicks: true, // nothing changes, default option remains
  ticksValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100], // nothing changes, default option remains
});