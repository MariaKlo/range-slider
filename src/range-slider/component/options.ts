import $ from 'jquery';
import { View } from '../View/View';
import { Slider, SliderPluginFunction, SliderPluginGlobalOptions, SliderPluginOptions } from './options';

// Define the plugin function on the jQuery extension point.
// Note: Function and global default options must be combined as long as the options are mandatory.
$.fn.Slider = Object.assign<SliderPluginFunction, SliderPluginGlobalOptions>(
  function (this: JQuery, options: SliderPluginOptions): JQuery {

    // Merge the global options with the options given as argument.
    options = $.extend({}, $.fn.Slider.options, options);

    // Check if required options are missing.
    if (!options.outputSelector) {
      console.error('Example plugin options are missing required parameter "outputSelector": ', JSON.stringify(options));
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