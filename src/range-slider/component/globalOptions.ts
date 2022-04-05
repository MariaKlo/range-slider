export interface Options {
    max: number;
    min: number;
    valueFirst: number;
    valueSecond: number;
}

export interface SliderGlobalOptions {
    /**
     * Global options of the example plugin.
     */
    options: Options;
}
    
//   /**
//    * Function to apply the example plugin to the selected elements of a jQuery result.
//    */
export interface SliderFunction {
 
    (options: Options): JQuery;
}
    
//   /**
//    * Declaration of the example plugin.
//    */
export interface Slider extends SliderGlobalOptions, SliderFunction {
    (behavior: 'enable'): JQuery;
}
//   /**
//    * Extend the jQuery result declaration with the example plugin.
//    */

export interface JQuery {
    /**
     * Extension of the example plugin.
     */
    slider: Slider;
}
