import { View } from '../View/View';

interface Options {
    max: number;
    min: number;
    valueFirst: number;
    valueSecond: number;
}

interface SliderGlobalOptions {
    /**
     * Global options of the example plugin.
     */
    options: Options;
}
  
//   /**
//    * Function to apply the example plugin to the selected elements of a jQuery result.
//    */
interface SliderFunction {
    /**
     * Apply the example plugin to the elements selected in the jQuery result.
     *
     * @param options Options to use for this application of the example plugin.
     * @returns jQuery result.
     */
    (options: Options): JQuery;
}
  
//   /**
//    * Declaration of the example plugin.
//    */
interface Slider extends SliderGlobalOptions, SliderFunction {
    view: View;
}
  
//   /**
//    * Extend the jQuery result declaration with the example plugin.
//    */
interface JQuery {
    /**
     * Extension of the example plugin.
     */
    sliderPlugin: Slider;
}

export { Options, Slider, JQuery, SliderGlobalOptions, SliderFunction };