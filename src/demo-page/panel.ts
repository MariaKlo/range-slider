/* eslint-disable @typescript-eslint/no-unused-vars */
import $ from 'jquery';

import './jquery.index';

class Panel {
  // arrays of id
  rangeSliderId = ['api_first', 'api_second', 'api_third', 'api_fourth'];

  state: object = {};

  constructor() {
    this.init();
  }

  init() {
    this.getDataFromPanel();
    this.spyOnSlider(this.rangeSliderId, 1);
    this.renderRangeSlider(this.rangeSliderId, this.state);
    this.getDataFromState();
  }

  setState = (name: string, options: object): void => {
    this.state[name] = options;
  };
  
  // get data from panel
  getDataFromPanel = () => {
    for (let i = 1; i <= this.rangeSliderId.length; i += 1) {
      // get values from panel
      const getValue = (id: string) => Number(document.getElementById(id).value);
      const getBooleanValue = (id: string) => document.getElementById(id).checked;
      const getStringValue = (id: string) => document.getElementById(id).value;
    
      this.setState(this.rangeSliderId[i - 1], {
        max: getValue(`max${i}`),
        min: getValue(`min${i}`),
        step: getValue(`step${i}`),
        defaultValue: getValue(`defaultValue${i}`),
        valueSecond: getValue(`valueSecond${i}`),
        isMultiThumb: getBooleanValue(`isMultiThumb${i}`),
        showBubble: getBooleanValue(`showBubble${i}`),
        isVertical: getBooleanValue(`isVertical${i}`),
        showTicks: getBooleanValue(`showTicks${i}`),
        ticksValues: getValue(`ticksValues${i}`),
        barColor: getStringValue(`barColor${i}`),
        thumbColor: getStringValue(`thumbColor${i}`),
        bubbleColor: getStringValue(`bubbleColor${i}`),
      });
    }
  };

  spyOnSlider = (item: string[], index: number): void => {
    const slider = document.getElementById(item).firstChild;
    const setSliderValue = () => {
      const newDefaultValue = slider.getAttribute('default-value');
      if (newDefaultValue) {
        document.getElementById(`defaultValue${index}`).value = newDefaultValue;
        this.state[this.rangeSliderId[index - 1]].defaultValue = newDefaultValue;
      }
      const newDefaultLeftValue = slider.getAttribute('first-value');
      if (newDefaultLeftValue) {
        document.getElementById(`defaultValue${index}`).value = newDefaultLeftValue;
        this.state[this.rangeSliderId[index - 1]].leftValue = newDefaultLeftValue;
      }
      const newRightValue = slider.getAttribute('second-value');
      if (newRightValue) {
        document.getElementById(`valueSecond${index}`).value = newRightValue;
        this.state[this.rangeSliderId[index - 1]].valueSecond = newRightValue;
      }
    };
    slider.addEventListener('mousemove', setSliderValue);
    slider.addEventListener('click', setSliderValue);
  };

  // render slider with info from panel
  renderRangeSlider = (id: string[], panel): void => {
    // delete duplicates of slider when panel is used
    const elem = document.getElementById(id);
    if (elem.firstElementChild) {
      elem.removeChild(elem.firstElementChild);
    }
    $(`#${id}`).sliderPlugin({
      max: panel.max,
      min: panel.min,
      step: panel.step,
      defaultValue: panel.defaultValue,
      valueSecond: panel.valueSecond,
      isMultiThumb: panel.isMultiThumb,
      showBubble: panel.showBubble,
      isVertical: panel.isVertical,
      showTicks: panel.showTicks,
      ticksValues: panel.ticksValues,
      barColor: panel.barColor,
      thumbColor: panel.thumbColor,
      bubbleColor: panel.bubbleColor,
    });
  };

  getDataFromState = () => {
    for (let i = 1; i <= this.rangeSliderId.length; i += 1) {
      const rangeSliderNumbersId = ['max', 'min', 'step', 'defaultValue', 'valueSecond'];
      const rangeSliderBooleansId = ['isMultiThumb', 'showBubble', 'isVertical', 'showTicks'];
      const rangeSliderArrId = ['ticksValues'];
      const rangeSliderStringId = ['barColor', 'thumbColor', 'bubbleColor'];
      // change number data
      rangeSliderNumbersId.forEach((item) => {
        const element = document.getElementById(item + i);
        const changeNumberValue = () => {
          this.state[this.rangeSliderId[i - 1]][item] = element.value;
          this.renderRangeSlider(this.rangeSliderId[i - 1], this.state[this.rangeSliderId[i - 1]]);
          this.spyOnSlider(this.rangeSliderId[i - 1], i);
        };
        element.addEventListener('change', changeNumberValue);
      });
      // change boolean data
      rangeSliderBooleansId.forEach((item) => {
        const element = document.getElementById(item + i);
        const changeBooleanValue = () => {
          this.state[this.rangeSliderId[i - 1]][item] = element.checked;
          this.renderRangeSlider(this.rangeSliderId[i - 1], this.state[this.rangeSliderId[i - 1]]);
          this.spyOnSlider(this.rangeSliderId[i - 1], i);
        };
        element.addEventListener('change', changeBooleanValue);
      });
      // change array data
      rangeSliderArrId.forEach((item) => {
        const element = document.getElementById(item + i);
        const changeArrValue = () => {
          const string = String(element.value).split(/[, ]+/);
          this.state[this.rangeSliderId[i - 1]][item] = string;
          this.renderRangeSlider(this.rangeSliderId[i - 1], this.state[this.rangeSliderId[i - 1]]);
          this.spyOnSlider(this.rangeSliderId[i - 1], i);
        };
        element.addEventListener('change', changeArrValue);
      });
      // change string data
      rangeSliderStringId.forEach((item) => {
        const element = document.getElementById(item + i);
        const changeStringValue = () => {
          this.state[this.rangeSliderId[i - 1]][item] = element.value;
          this.renderRangeSlider(this.rangeSliderId[i - 1], this.state[this.rangeSliderId[i - 1]]);
          this.spyOnSlider(this.rangeSliderId[i - 1], i);
        };
        element.addEventListener('change', changeStringValue);
      });
      // render slider with data from panel
      this.renderRangeSlider(this.rangeSliderId[i - 1], this.state[this.rangeSliderId[i - 1]]);
      this.spyOnSlider(this.rangeSliderId[i - 1], i);
    }
  };
}

const panel = new Panel();


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