/* eslint-disable @typescript-eslint/no-unused-vars */
// import $ from 'jquery';

import CallPlugin from './callPlugin';
import './jquery.index';

class Panel {
  // arrays of id
  rangeSliderId = ['api_first', 'api_second', 'api_third', 'api_fourth'];

  panelNumberValues = ['max', 'min', 'step', 'defaultValue', 'valueSecond'];

  panelBooleanValues = ['isMultiThumb', 'showBubble', 'isVertical', 'showTicks'];

  panelStringValues = ['barColor', 'thumbColor', 'bubbleColor'];

  state = {};

  initPlugin!: CallPlugin;

  callPlugin: CallPlugin;

  constructor() {
    this.init();
    this.callPlugin = new CallPlugin();
  }

  init() {
    this.getDataFromPanelToApi();
  }

  getDataFromPanelToApi() {
    const arr = [];
    for (let i = 0; i < this.rangeSliderId.length; i++) {
      for (let j = 0; j < this.panelNumberValues.length; j++) {
        const inputValue = (<HTMLInputElement>document.getElementById(`${this.panelNumberValues[j]}${i}`)).value;
        arr.push(inputValue);
      }
    }

    for (let i = 0; i < this.rangeSliderId.length; i++) {
      for (let j = 0; j < this.panelBooleanValues.length; j++) {
        const inputChecked = (<HTMLInputElement>document.getElementById(`${this.panelBooleanValues[j]}${i}`)).checked;
        arr.push(inputChecked);
      }
    }

    for (let i = 0; i < this.rangeSliderId.length; i++) {
      for (let j = 0; j < this.panelStringValues.length; j++) {
        const inputValue = (<HTMLInputElement>document.getElementById(`${this.panelStringValues[j]}${i}`)).value;
        arr.push(inputValue);
      }
    }

    for (let i = 0; i < this.rangeSliderId.length; i++) {
      $(`#${this.rangeSliderId[i]}`).sliderPlugin({
        max: Number(arr[0]),
        min: Number(arr[1]),
        step: Number(arr[2]),
        defaultValue: Number(arr[3]),
        valueSecond: Number(arr[4]),
        isMultiThumb: Boolean(arr[5]),
        showBubble: Boolean(arr[6]),
        isVertical: Boolean(arr[7]),
        showTicks: Boolean(arr[8]),
        barColor: String(arr[9]),
        thumbColor: String(arr[10]),
        bubbleColor: String(arr[11]),
      });
    }
    
    console.log(arr);

    
  }
}

const panel = new Panel();
export default panel;

// const setState = (name: string, options: object): void => {
//   state[name] = options;
// };

// // state gets data from panel
// for (let i = 1; i <= rangeSliderId.length; i += 1) {
//   // get values from panel
//   const getValue = (id: string) => Number(document.getElementById(id).value);
//   const getBooleanValue = (id: string) => document.getElementById(id).checked;
//   const getStringValue = (id: string) => document.getElementById(id).value;

//   setState(rangeSliderId[i - 1], {
//     max: getValue(`max${i}`),
//     min: getValue(`min${i}`),
//     step: getValue(`step${i}`),
//     defaultValue: getValue(`defaultValue${i}`),
//     valueSecond: getValue(`valueSecond${i}`),
//     isMultiThumb: getBooleanValue(`isMultiThumb${i}`),
//     showBubble: getBooleanValue(`showBubble${i}`),
//     isVertical: getBooleanValue(`isVertical${i}`),
//     showTicks: getBooleanValue(`showTicks${i}`),
//     ticksValues: getValue(`ticksValues${i}`),
//     barColor: getStringValue(`barColor${i}`),
//     thumbColor: getStringValue(`thumbColor${i}`),
//     bubbleColor: getStringValue(`bubbleColor${i}`),
//   });
// }

// set attributes for api (default value or first and second values)
// set values for slider (default value, first value, second value)
// const spyOnSlider = (item: string, index: number): void => {
//   const slider = document.getElementById(item).firstChild;
//   const setSliderValue = () => {
//     const newDefaultValue = slider.getAttribute('default-value');
//     if (newDefaultValue) {
//       document.getElementById(`defaultValue${index}`).value = newDefaultValue;
//       state[rangeSliderId[index - 1]].defaultValue = newDefaultValue;
//     }
//     const newDefaultLeftValue = slider.getAttribute('first-value');
//     if (newDefaultLeftValue) {
//       document.getElementById(`defaultValue${index}`).value = newDefaultLeftValue;
//       state[rangeSliderId[index - 1]].leftValue = newDefaultLeftValue;
//     }
//     const newRightValue = slider.getAttribute('second-value');
//     if (newRightValue) {
//       document.getElementById(`valueSecond${index}`).value = newRightValue;
//       state[rangeSliderId[index - 1]].valueSecond = newRightValue;
//     }
//   };
//   slider.addEventListener('mousemove', setSliderValue);
//   slider.addEventListener('click', setSliderValue);
// };
// // render slider with info from panel
// const renderRangeSlider = (id: string, panel): void => {
//   // delete duplicates of slider when panel is used
//   const elem = document.getElementById(id);
//   if (elem.firstElementChild) {
//     elem.removeChild(elem.firstElementChild);
//   }
//   $(`#${id}`).sliderPlugin({
//     max: panel.max,
//     min: panel.min,
//     step: panel.step,
//     defaultValue: panel.defaultValue,
//     valueSecond: panel.valueSecond,
//     isMultiThumb: panel.isMultiThumb,
//     showBubble: panel.showBubble,
//     isVertical: panel.isVertical,
//     showTicks: panel.showTicks,
//     ticksValues: panel.ticksValues,
//     barColor: panel.barColor,
//     thumbColor: panel.thumbColor,
//     bubbleColor: panel.bubbleColor,
//   });
// };

// slider gets data from state
// for (let i = 1; i <= rangeSliderId.length; i += 1) {
//   const rangeSliderNumbersId = ['max', 'min', 'step', 'defaultValue', 'valueSecond'];
//   const rangeSliderBooleansId = ['isMultiThumb', 'showBubble', 'isVertical', 'showTicks'];
//   const rangeSliderArrId = ['ticksValues'];
//   const rangeSliderStringId = ['barColor', 'thumbColor', 'bubbleColor'];
//   // change number data
//   rangeSliderNumbersId.forEach((item) => {
//     const element = document.getElementById(item + i);
//     const changeNumberValue = () => {
//       state[rangeSliderId[i - 1]][item] = element.value;
//       renderRangeSlider(rangeSliderId[i - 1], state[rangeSliderId[i - 1]]);
//       spyOnSlider(rangeSliderId[i - 1], i);
//     };
//     element.addEventListener('change', changeNumberValue);
//   });
//   // change boolean data
//   rangeSliderBooleansId.forEach((item) => {
//     const element = document.getElementById(item + i);
//     const changeBooleanValue = () => {
//       state[rangeSliderId[i - 1]][item] = element.checked;
//       renderRangeSlider(rangeSliderId[i - 1], state[rangeSliderId[i - 1]]);
//       spyOnSlider(rangeSliderId[i - 1], i);
//     };
//     element.addEventListener('change', changeBooleanValue);
//   });
//   // change array data
//   rangeSliderArrId.forEach((item) => {
//     const element = document.getElementById(item + i);
//     const changeArrValue = () => {
//       const string = String(element.value).split(/[, ]+/);
//       state[rangeSliderId[i - 1]][item] = string;
//       renderRangeSlider(rangeSliderId[i - 1], state[rangeSliderId[i - 1]]);
//       spyOnSlider(rangeSliderId[i - 1], i);
//     };
//     element.addEventListener('change', changeArrValue);
//   });
//   // change string data
//   rangeSliderStringId.forEach((item) => {
//     const element = document.getElementById(item + i);
//     const changeStringValue = () => {
//       state[rangeSliderId[i - 1]][item] = element.value;
//       renderRangeSlider(rangeSliderId[i - 1], state[rangeSliderId[i - 1]]);
//       spyOnSlider(rangeSliderId[i - 1], i);
//     };
//     element.addEventListener('change', changeStringValue);
//   });
//   // render slider with data from panel
//   renderRangeSlider(rangeSliderId[i - 1], state[rangeSliderId[i - 1]]);
//   spyOnSlider(rangeSliderId[i - 1], i);
// }