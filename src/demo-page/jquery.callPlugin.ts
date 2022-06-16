// import $ from 'jquery';
// import './jquery.index';

// const getValue = (id: string) => Number(document.getElementById(id).value);
// const getBooleanValue = (id: string) => document.getElementById(id).checked;
// const getStringValue = (id: string) => document.getElementById(id).value;
// const getArrOfTicks = (id: string) => document.getElementById(id).value;
// const rangeSliderNumbersId = ['max', 'min', 'step', 'defaultValue', 'valueSecond'];
// const rangeSliderBooleansId = ['isMultiThumb', 'showBubble', 'isVertical', 'showTicks'];
// const rangeSliderStringId = ['barColor', 'thumbColor', 'bubbleColor'];
// const arrOfTicks = ['ticksValues'];
// // const rangeSliderId = ['api_first', 'api_second', 'api_third'];

// function apiGetsValuesFromPanel(): void {
//   $('#api_first').sliderPlugin({
//     max: getValue(rangeSliderNumbersId[0]),
//     min: getValue(rangeSliderNumbersId[1]),
//     step: getValue(rangeSliderNumbersId[2]),
//     defaultValue: getValue(rangeSliderNumbersId[3]),
//     valueSecond: getValue(rangeSliderNumbersId[4]),
//     isMultiThumb: getBooleanValue(rangeSliderBooleansId[0]),
//     showBubble: getBooleanValue(rangeSliderBooleansId[1]),
//     isVertical: getBooleanValue(rangeSliderBooleansId[2]),
//     showTicks: getBooleanValue(rangeSliderBooleansId[3]),
//     ticksValues: getArrOfTicks(arrOfTicks[0]),
//     barColor: getStringValue(rangeSliderStringId[0]),
//     thumbColor: getStringValue(rangeSliderStringId[1]),
//     bubbleColor: getStringValue(rangeSliderStringId[2]),
//   });
// }

// apiGetsValuesFromPanel();

// $('#api_first').sliderPlugin({
//   max: 100,
//   min: 0,
//   step: 5,
//   defaultValue: 60,
//   valueSecond: 70,
//   isMultiThumb: false,
//   showBubble: true,
//   isVertical: false,
//   showTicks: true,
//   ticksValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
//   barColor: 'linear-gradient(180deg, #cf6f7f 0%, #ea6666 100%)',
//   thumbColor: '',
//   bubbleColor: '',
// });
  
// $('#api_second').sliderPlugin({
//   max: 50,
//   min: 0,
//   step: 1,
//   defaultValue: 10,
//   valueSecond: 30,
//   isMultiThumb: true,
//   showBubble: false,
//   isVertical: false,
//   showTicks: false,
//   ticksValues: [0, 10, 20, 30, 40, 50],
//   barColor: 'linear-gradient(180deg, #cf6f7f 0%, #ea6666 100%)',
//   thumbColor: '',
//   bubbleColor: '',
// });
  
// $('#api_third').sliderPlugin({
//   max: 100,
//   min: 0,
//   step: 10,
//   defaultValue: 40,
//   valueSecond: 90,
//   isMultiThumb: true,
//   showBubble: false,
//   isVertical: true,
//   showTicks: false,
//   ticksValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
//   barColor: 'linear-gradient(180deg, #cf6f7f 0%, #ea6666 100%)',
//   thumbColor: '',
//   bubbleColor: '',
// });