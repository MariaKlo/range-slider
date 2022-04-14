import $ from 'jquery';
// import {view} from '../View/View';
// import { SliderFunction, SliderGlobalOptions, Options } from './globalOptions';

export default interface Options {
  max: number;
  min: number;
  step: number;
}

// interface SliderGlobalOptions {
//   /**
//    * Global options of the example plugin.
//    */
//   options: Options;
// }
  
// //   /**
// //    * Function to apply the example plugin to the selected elements of a jQuery result.
// //    */
// interface SliderFunction {
//   (options: Options): JQuery;
// }
  
//   /**
//    * Declaration of the example plugin.
//    */
// interface Slider extends SliderGlobalOptions, SliderFunction {
//   (behavior: 'enable'): JQuery;
// }
//   /**
//    * Extend the jQuery result declaration with the example plugin.
//    */
declare global {
  interface JQuery {
    /**
     * Extension of the example plugin.
     */
    Slider(options: Options): JQuery;
  }
}



// Define the plugin function on the jQuery extension point.
// Note: Function and global default options must be combined as long as the options are mandatory.
$.fn.Slider = function Slider(this: JQuery, options: Options): JQuery {
    // Merge the global options with the options given as argument.
    // view.max
    // console.log(view.max);
    options = $.extend({}, $.fn.Slider, options);

    // Check if required options are missing.
    if (!options.max || !options.min) {
      console.error('Slider plugin does not have properties max and min: ', JSON.stringify(options));
      return this;
    }

    // Do what the plugin should do. Here we create an instance of the separate service which is then used when the
    // user clicks the element that the plugin is attached to. It produces a greeting message and appends it to the output.

    // Return the jQuery object for chaining.
    return this;

  }