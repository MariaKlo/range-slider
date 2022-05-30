import './index.scss';
import '../range-slider/jquery.slider.ts';
import $ from 'jquery';
import Model from '../range-slider/Model/Model';
import View from '../range-slider/View/View';
import barView from '../range-slider/View/subView/barView/barView';
import bubbleView from '../range-slider/View/subView/bubbleView/bubbleView';
import stepView from '../range-slider/View/subView/stepView/stepView';
import ticksView from '../range-slider/View/subView/ticksView/ticksView';
import thumbView from '../range-slider/View/subView/thumbView/thumbView';
import Presenter from '../range-slider/Presenter/Presenter';


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
  // declare global {
  //   interface JQuery {
  //     Slider(options: Options): JQuery | void;
  //   }
  // }
  (function ($): void | JQuery<HTMLElement> {
    $.fn.Slider = function(settings: Options): JQuery<HTMLElement> | Presenter {
          const presenter: Presenter | JQuery<HTMLElement> = new Presenter(
              new View(
                document.body,
                new ticksView(),
                new stepView(),
                new bubbleView(),
                new barView(document.body),
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
        return presenter;
      }
    }(jQuery));

$('#api_first').Slider({
    max: 500,
    min: 50,
    step: 1,
    defaultValue: 90,
    valueSecond: 170,
    isMultiThumb: true,
    showRightProgressBar: false,
    showBubble: true,
    isVertical: false,
    showTicks: false,
    ticksValues: []
});