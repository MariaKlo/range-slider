/* eslint-disable @typescript-eslint/no-unused-vars */
export default interface Options {
    max: number;
    min: number;
    step: number;
    defaultValue: number;
    valueSecond: number;
    isMultiThumb: boolean;
    // showRightProgressBar: boolean;
    showBubble: boolean;
    isVertical: boolean;
    showTicks: boolean;
    ticksValues: number[];
}

export class DefaultOptions {
    max: 100;
    min: 0;
    step: 1;
    defaultValue: 50;
    valueSecond: 70;
    isMultiThumb: false;
    // showRightProgressBar: boolean;
    showBubble: false;
    isVertical: false;
    showTicks: false;
    ticksValues: number[];
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

namespace global {
    interface JQuery {
        Slider: Slider;
    }
}