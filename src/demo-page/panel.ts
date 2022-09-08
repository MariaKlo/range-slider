/* eslint-disable @typescript-eslint/no-unused-vars */
// import $ from 'jquery';

// import CallPlugin from './callPlugin';
import './jquery.index';

// interface State {
//   max: number;

//   min: number;
  
//   step: number;

//   defaultValue: number;

//   valueSecond: number;

//   isMultiThumb: boolean;

//   showBubble: boolean;

//   isVertical: boolean;

//   showTicks: boolean;

//   barColor: string;

//   thumbColor: string;

//   bubbleColor: string;
// }

class Panel {
  // arrays of id
  rangeSliderId = ['api_first', 'api_second', 'api_third', 'api_fourth'];

  panelNumberValues = ['max', 'min', 'step', 'defaultValue', 'valueSecond'];

  panelBooleanValues = ['isMultiThumb', 'showBubble', 'isVertical', 'showTicks'];

  panelStringValues = ['barColor', 'thumbColor', 'bubbleColor'];

  // states = <State>{};

  // state = {
  //   [name as unknown as string]: <State>{},
  // };

  state: (number | boolean | string)[] = [];

  // initPlugin!: CallPlugin;

  // callPlugin: CallPlugin;

  constructor() {
    this.init();
    // this.callPlugin = new CallPlugin();
  }

  init() {
    // this.getDataFromPanelToApi();
    // this.updateData();
    for (let i = 0; i < this.rangeSliderId.length; i++) {
      this.spyOnSlider(this.rangeSliderId[i], i);
      this.renderAnotherSlider(this.rangeSliderId[i], this.state);
      this.setState(this.state);
    }
    this.getDataFromPanel();
    this.getDataFromState();
  }

  setState(options: (number | boolean | string)[]): void {
    this.state = options;

  }

  // state gets data from panel
  getDataFromPanel() {
    for (let i = 1; i <= this.rangeSliderId.length; i += 1) {
      // get values from panel
      const getValue = (id: string): number => {
        const elem = <HTMLInputElement>document.getElementById(id);
        return Number(elem.value);
      };
      const getBooleanValue = (id: string): boolean => {
        const elem = <HTMLInputElement>document.getElementById(id);
        return Boolean(elem.checked);
      };
      const getStringValue = (id: string): string => {
        const elem = <HTMLInputElement>document.getElementById(id);
        return String(elem.value);
      };
  
      this.setState([
        getValue('max1'),
        getValue('min1'),
        getValue('step1'),
        getValue('defaultValue1'),
        getValue('valueSecond1'),
        getBooleanValue('isMultiThumb1'),
        getBooleanValue('showBubble1'),
        getBooleanValue('isVertical1'),
        getBooleanValue('showTicks1'),
        getStringValue('barColor1'),
        getStringValue('thumbColor1'),
        getStringValue('bubbleColor1'),
      ]);
    }
  }
  
  // when slider changes default and second values, panel shows changes
  spyOnSlider(item: string, index: number) {
    const slider = <HTMLDivElement>document.getElementById(item);
    const setSliderValue = () => {
      if (slider.firstElementChild !== null) {
        const newDefaultValue = slider.getAttribute('default-value');
        if (newDefaultValue) {
          const element = <HTMLInputElement>document.getElementById(`defaultValue${index}`);
          element.value = newDefaultValue;
          this.state[3] = Number(newDefaultValue);
        }
        const newDefaultLeftValue = slider.getAttribute('first-value');
        if (newDefaultLeftValue) {
          const element = <HTMLInputElement>document.getElementById(`defaultValue${index}`);
          element.value = newDefaultLeftValue;
          this.state[3] = Number(newDefaultLeftValue);
        }
        const newRightValue = slider.getAttribute('second-value');
        if (newRightValue) {
          const element = <HTMLInputElement>document.getElementById(`valueSecond${index}`);
          element.value = newRightValue;
          this.state[4] = Number(newRightValue);
        }
      }
    };
    // setSliderValue();
    slider.addEventListener('mousemove', setSliderValue);
    slider.addEventListener('click', setSliderValue);
  }

  renderAnotherSlider(id: string, panel: (number | boolean | string)[]) {
    // render slider with info from panel
    // delete duplicates of slider when panel is used
    const elem = <HTMLDivElement>document.getElementById(id);
    if (elem.firstElementChild) {
      elem.removeChild(elem.firstElementChild);
    }
    $(`#${id}`).sliderPlugin({
      max: Number(panel[0]),
      min: Number(panel[1]),
      step: Number(panel[2]),
      defaultValue: Number(panel[3]),
      valueSecond: Number(panel[4]),
      isMultiThumb: Boolean(panel[5]),
      showBubble: Boolean(panel[6]),
      isVertical: Boolean(panel[7]),
      showTicks: Boolean(panel[8]),
      barColor: String(panel[9]),
      thumbColor: String(panel[10]),
      bubbleColor: String(panel[11]),
    });
  }

  // slider gets data from state
  getDataFromState() {
    for (let i = 1; i <= this.rangeSliderId.length; i += 1) {
      // change number data
      this.panelNumberValues.forEach((item: string) => {
        const valuesOfState = [
          Number(this.state[0]), 
          Number(this.state[1]), 
          Number(this.state[2]), 
          Number(this.state[3]), 
          Number(this.state[4]),
        ];
        const element = <HTMLInputElement>document.getElementById(item + i);
        const changeNumberValue = () => {
          valuesOfState[i] = Number(element.value);
          this.renderAnotherSlider(this.rangeSliderId[i - 1], this.state);
          this.spyOnSlider(this.rangeSliderId[i - 1], i);
        };
        element.addEventListener('change', changeNumberValue);
      });
      // change boolean data
      this.panelBooleanValues.forEach((item) => {
        const valuesOfState = [
          Boolean(this.state[5]),
          Boolean(this.state[6]),
          Boolean(this.state[7]),
          Boolean(this.state[8]),
        ];
        const element = <HTMLInputElement>document.getElementById(item + i);
        const changeBooleanValue = () => {
          valuesOfState[i] = element.checked;
          this.renderAnotherSlider(this.rangeSliderId[i - 1], this.state);
          this.spyOnSlider(this.rangeSliderId[i - 1], i);
        };
        element.addEventListener('change', changeBooleanValue);
      });
      // change string data
      this.panelStringValues.forEach((item) => {
        const valuesOfState = [
          String(this.state[9]),
          String(this.state[10]),
          String(this.state[11]),
        ];
        const element = <HTMLInputElement>document.getElementById(item + i);
        const changeStringValue = () => {
          valuesOfState[i] = element.value;
          this.renderAnotherSlider(this.rangeSliderId[i - 1], this.state);
          this.spyOnSlider(this.rangeSliderId[i - 1], i);
        };
        element.addEventListener('change', changeStringValue);
      });
      // render slider with data from panel
      this.renderAnotherSlider(this.rangeSliderId[i - 1], this.state);
      this.spyOnSlider(this.rangeSliderId[i - 1], i);
    }
  }




  // getDataFromPanelToApi() {
  //   for (let i = 0; i < this.panelNumberValues.length; i++) {
  //     const inputValue = (<HTMLInputElement>document.getElementById(`${this.panelNumberValues[i]}1`)).value;
  //     this.state.push(inputValue);
  //   }

  //   for (let i = 0; i < this.panelBooleanValues.length; i++) {
  //     const inputChecked = (<HTMLInputElement>document.getElementById(`${this.panelBooleanValues[i]}1`)).checked;
  //     this.state.push(inputChecked);
  //   }

  //   for (let i = 0; i < this.panelStringValues.length; i++) {
  //     const inputValue = (<HTMLInputElement>document.getElementById(`${this.panelStringValues[i]}1`)).value;
  //     this.state.push(inputValue);
  //   }

  //   console.log(this.state);

  //   $('#api_first').sliderPlugin({
  //     max: Number(this.state[0]),
  //     min: Number(this.state[1]),
  //     step: Number(this.state[2]),
  //     defaultValue: Number(this.state[3]),
  //     valueSecond: Number(this.state[4]),
  //     isMultiThumb: Boolean(this.state[5]),
  //     showBubble: Boolean(this.state[6]),
  //     isVertical: Boolean(this.state[7]),
  //     showTicks: Boolean(this.state[8]),
  //     barColor: String(this.state[9]),
  //     thumbColor: String(this.state[10]),
  //     bubbleColor: String(this.state[11]),
  //   });
  // }

  // updateData() {
  //   for (let i = 0; i < this.panelNumberValues.length; i++) {
  //     const element = (<HTMLInputElement>document.getElementById(`${this.panelNumberValues[i]}1`));
  //     const changeNumberValue = () => {
  //       this.state[0] = element.value[0];
  //       this.state[1] = element.value[1];
  //       this.state[2] = element.value[2];
  //       this.state[3] = element.value[3];
  //       this.state[4] = element.value[4];

  //       $('#api_first').sliderPlugin({
  //         max: Number(this.state[0]),
  //         min: Number(this.state[1]),
  //         step: Number(this.state[2]),
  //         defaultValue: Number(this.state[3]),
  //         valueSecond: Number(this.state[4]),
  //         isMultiThumb: Boolean(this.state[5]),
  //         showBubble: Boolean(this.state[6]),
  //         isVertical: Boolean(this.state[7]),
  //         showTicks: Boolean(this.state[8]),
  //         barColor: String(this.state[9]),
  //         thumbColor: String(this.state[10]),
  //         bubbleColor: String(this.state[11]),
  //       });
  //     };
  //     element.addEventListener('change', changeNumberValue);
  //   }
  // }
  
}

const panel = new Panel();
export default panel;

// const setState = (name: string, options: string | boolean | number): void => {
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