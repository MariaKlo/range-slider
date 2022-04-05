import $ from 'jquery';
import { View } from '../View/View';
import { SliderFunction, SliderGlobalOptions, Options } from './globalOptions';

// Define the plugin function on the jQuery extension point.
// Note: Function and global default options must be combined as long as the options are mandatory.
$.fn.Slider = Object.assign<SliderFunction, SliderGlobalOptions>(
  function (this: JQuery, options: Options): JQuery {

    // Merge the global options with the options given as argument.
    options = $.extend({}, $.fn.Slider.options, options);

    // Check if required options are missing.
    if (!options.max || !options.min) {
      console.error('Slider plugin does not have properties max and min: ', JSON.stringify(options));
      return this;
    }

    // Do what the plugin should do. Here we create an instance of the separate service which is then used when the
    // user clicks the element that the plugin is attached to. It produces a greeting message and appends it to the output.
    const view = new View(10, 1);
    console.log(view);
    // Return the jQuery object for chaining.
    return this;

  },
  // Define the global default options.
  {
    options: {
      outputSelector: null
    }
  }
);