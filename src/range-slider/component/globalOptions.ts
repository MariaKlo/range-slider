/* eslint-disable @typescript-eslint/no-unused-vars */
export default interface Options {
    max: number;
    min: number;
    step: number;
    defaultValue: number;
    valueSecond: number;
    isMultiThumb: boolean;
    showBubble: boolean;
    isVertical: boolean;
    showTicks: boolean;
    ticksValues: number[];
}

// export class DefaultOptions {
//     max: 100;
//     min: 0;
//     step: 1;
//     defaultValue: 50;
//     valueSecond: 70;
//     isMultiThumb: false;
//     showBubble: false;
//     isVertical: false;
//     showTicks: false;
//     ticksValues: number[];
// }