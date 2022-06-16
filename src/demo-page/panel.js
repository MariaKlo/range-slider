import $ from 'jquery';
// // import './jquery.callPlugin';
import './jquery.index';

const optionsForFirstSlider = {
  max: 100,
  min: 0,
  step: 5,
  defaultValue: 60,
  valueSecond: 70,
  isMultiThumb: false,
  showBubble: true,
  isVertical: false,
  showTicks: true,
  ticksValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  barColor: 'linear-gradient(180deg, #cf6f7f 0%, #ea6666 100%)',
  thumbColor: 'red',
  bubbleColor: '#bf8d19',
};

$('#api_first').sliderPlugin(optionsForFirstSlider);

const panelGetsDataFromFirstApi = () => {
  // numbers
  const max = document.getElementById('max1');
  max.value = optionsForFirstSlider.max;
  const min = document.getElementById('min1');
  min.value = optionsForFirstSlider.min;
  const step = document.getElementById('step1');
  step.value = optionsForFirstSlider.step;

  const firstInput = document.querySelector('.range-slider__input');
  const defaultValue = document.getElementById('defaultValue1');
  defaultValue.value = optionsForFirstSlider.defaultValue;
  firstInput.addEventListener('change', (event) => {
    defaultValue.value = event.target.value;
  });

  if (optionsForFirstSlider.isMultiThumb === true) {
    const secondInput = document.querySelector('.range-slider__input_second');
    const valueSecond = document.getElementById('valueSecond1');
    valueSecond.value = optionsForFirstSlider.valueSecond;
    secondInput.addEventListener('change', (event) => {
      valueSecond.value = event.target.value;
    });
  }
  // booleans
  const isDouble = document.getElementById('isMultiThumb1');
  isDouble.checked = optionsForFirstSlider.isMultiThumb;
  const bubble = document.getElementById('showBubble1');
  bubble.checked = optionsForFirstSlider.showBubble;
  const isVertical = document.getElementById('isVertical1');
  isVertical.checked = optionsForFirstSlider.isVertical;
  const showTicks = document.getElementById('showTicks1');
  showTicks.checked = optionsForFirstSlider.showTicks;
  // strings
  const barColor = document.getElementById('barColor1');
  barColor.value = optionsForFirstSlider.barColor;
  const thumbColor = document.getElementById('thumbColor1');
  thumbColor.value = optionsForFirstSlider.thumbColor;
  const bubbleColor = document.getElementById('bubbleColor1');
  bubbleColor.value = optionsForFirstSlider.bubbleColor;
  // array of ticks
  const arr = document.getElementById('ticksValues1');
  arr.value = optionsForFirstSlider.ticksValues;
};

panelGetsDataFromFirstApi();

const firstApiGetsDataFromPanel = () => {
  // numbers
  const firstInput = document.querySelector('.range-slider__input');
  const secondInput = document.querySelector('.range-slider__input_second');
  const max = document.getElementById('max1');
  firstInput.addEventListener('mousemove', () => {
    firstInput.setAttribute('max', max.value);
  });
  firstInput.addEventListener('click', () => {
    firstInput.setAttribute('max', max.value);
  });
  if (optionsForFirstSlider.isMultiThumb === true) {
    secondInput.addEventListener('mousemove', () => {
      secondInput.setAttribute('max', max.value);
    });
    secondInput.addEventListener('click', () => {
      secondInput.setAttribute('max', max.value);
    });
  }

  const min = document.getElementById('min1');
  firstInput.addEventListener('mousemove', () => {
    firstInput.setAttribute('min', min.value);
  });
  firstInput.addEventListener('click', () => {
    firstInput.setAttribute('min', min.value);
  });
  if (optionsForFirstSlider.isMultiThumb === true) {
    secondInput.addEventListener('mousemove', () => {
      secondInput.setAttribute('min', min.value);
    });
    secondInput.addEventListener('click', () => {
      secondInput.setAttribute('min', min.value);
    });
  }

  const step = document.getElementById('step1');
  firstInput.addEventListener('mousemove', () => {
    firstInput.setAttribute('step', step.value);
  });
  firstInput.addEventListener('click', () => {
    firstInput.setAttribute('step', step.value);
  });
  if (optionsForFirstSlider.isMultiThumb === true) {
    secondInput.addEventListener('mousemove', () => {
      secondInput.setAttribute('step', step.value);
    });
    secondInput.addEventListener('click', () => {
      secondInput.setAttribute('step', step.value);
    });
  }

  // function changeDefaultValue() {
  //   defaultValue.addEventListener('change', (event) => {
  //     firstInput.value = event.target.value;
  //   });
  // }
  // firstInput.addEventListener('mousemove', () => {
  //   firstInput.setAttribute('default-value', changeDefaultValue);
  // });
  // firstInput.addEventListener('click', () => {
  //   firstInput.setAttribute('default-value', changeDefaultValue);
  // });

  // booleans


  // strings
  const barColor = document.getElementById('barColor1');
  const progressBar = document.querySelector('.range-slider__progress-bar');
  barColor.addEventListener('click', () => {
    progressBar.setAttribute('style', barColor.value);
  });
  const thumbColor = document.getElementById('thumbColor1');
  const thumb = document.querySelector('.range-slider__thumb');
  thumbColor.addEventListener('click', () => {
    thumb.setAttribute('style', thumbColor.value);
  });
  const bubbleColor = document.getElementById('bubbleColor1');
  const bubble = document.querySelector('.range-slider__bubble');
  bubbleColor.addEventListener('mousemove', () => {
    bubble.setAttribute('style', bubbleColor.value);
  });
};

firstApiGetsDataFromPanel();






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









// const rangeSliderId = ['api_first', 'api_second', 'api_third'];
// const rangeSliderNumbersId = ['max', 'min', 'step', 'defaultValue', 'valueSecond'];
// const rangeSliderBooleansId = ['isMultiThumb', 'showBubble', 'isVertical', 'showTicks'];
// const rangeSliderArrOfTicksId = ['ticksValues'];
// const rangeSliderStringsId = ['barColor', 'thumbColor', 'bubbleColor'];

// const getNumberValue = (id) => Number(document.getElementById(id).value);
// const getBooleanValue = (id) => document.getElementById(id).checked;
// const getStringValue = (id) => document.getElementById(id).value;
// const getArrOfTicks = (id) => document.getElementById(id).value.toArray();

// const ids = {};
// const getId = (name, options) => {
//   ids[name] = options;
// };

// get ids from panel
// for (let i = 0; i < rangeSliderId.length; i++) {
//   getId(rangeSliderId[i - 1], {
//     max: getNumberValue(`max${i}`),
//     min: getNumberValue(`min${i}`),
//     step: getNumberValue(`step${i}`),
//     defaultValue: getNumberValue(`defaultValue${i}`),
//     valueSecond: getNumberValue(`valueSecond${i}`),
//     isMultiThumb: getBooleanValue(`isMultithumb${i}`),
//     showBubble: getBooleanValue(`showBubble${i}`),
//     isVertical: getBooleanValue(`isVertical${i}`),
//     showTicks: getBooleanValue(`showTicks${i}`),
//     ticksValues: getArrOfTicks(`ticksValues${i}`),
//     barColor: getStringValue(`barColor${i}`),
//     thumbColor: getStringValue(`barColor${i}`),
//     bubbleColor: getStringValue(`barColor${i}`),
//   });
// }

// spy on slider's values
// const spyOnSlider = (item, index) => {
//   const slider = document.getElementById(item).firstChild;
//   const setValue = () => {
//     const newDefaultValue = slider.getAttribute('default-value');
//     if (newDefaultValue) {
//       document.getElementById(`defaultValue${index}`).value = newDefaultValue;
//       ids[rangeSliderId[index - 1]].defaultValue = newDefaultValue;
//     }
//     const newFirstValue = slider.getAttribute('first-value');
//     if (newFirstValue) {
//       document.getElementById(`defaultValue${index}`).value = newFirstValue;
//       ids[rangeSliderId[index - 1]].defaultValue = newFirstValue;
//     }
//     const newSecondValue = slider.getAttribute('second-value');
//     if (newSecondValue) {
//       document.getElementById(`valueSecond${index}`).value = newSecondValue;
//       ids[rangeSliderId[index - 1]].valueSecond = newSecondValue;
//     }
//   };
//   slider.addEventListener('mousemove', setValue);
//   slider.addEventListener('click', setValue);
// };

// for (let i = 0; i < rangeSliderId.length; i++) {
//   spyOnSlider(rangeSliderId[i - 1], i);
// } 

// // render api calls of plugin
// const renderApiRangeSlider = (id, panel) => {
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

// for (let i = 0; i < rangeSliderId.length; i++) {
//   renderApiRangeSlider(rangeSliderId[i - 1], ids[rangeSliderId[i - 1]]);
// }

// change number data
// for (let i = 0; i < rangeSliderId.length; i++) {
//   rangeSliderNumbersId.forEach((item) => {
//     const elem = document.getElementById(item + i);
//     const changeNumberValue = () => {
//       ids[rangeSliderId[i - 1][item]] = elem.value;
//       renderApiRangeSlider(rangeSliderId[i - 1], ids[rangeSliderId[i - 1]]);
//       spyOnSlider(rangeSliderId[i - 1], i);
//     };
//     elem.addEventListener('change', changeNumberValue);
//   });
//   // change boolean data
//   rangeSliderBooleansId.forEach((item) => {
//     const elem = document.getElementById(item + i);
//     const changeBooleanValue = () => {
//       ids[rangeSliderId[i - 1][item]] = elem.checked;
//       renderApiRangeSlider(rangeSliderId[i - 1], ids[rangeSliderId[i - 1]]);
//       spyOnSlider(rangeSliderId[i - 1], i);
//     };
//     elem.addEventListener('change', changeBooleanValue);
//   });
//   // change string data
//   rangeSliderStringsId.forEach((item) => {
//     const elem = document.getElementById(item + i);
//     const changeStringValue = () => {
//       ids[rangeSliderId[i - 1][item]] = elem.value;
//       renderApiRangeSlider(rangeSliderId[i - 1], ids[rangeSliderId[i - 1]]);
//       spyOnSlider(rangeSliderId[i - 1], i);
//     };
//     elem.addEventListener('change', changeStringValue);
//   });
//   // change array of ticks
//   rangeSliderArrOfTicksId.forEach((item) => {
//     const elem = document.getElementById(item + i);
//     const changeArrOfTicksValue = () => {
//       ids[rangeSliderId[i - 1][item]] = elem.value;
//       renderApiRangeSlider(rangeSliderId[i - 1], ids[rangeSliderId[i - 1]]);
//       spyOnSlider(rangeSliderId[i - 1], i);
//     };
//     elem.addEventListener('change', changeArrOfTicksValue);
//   });
//   renderApiRangeSlider(rangeSliderId[i - 1], ids[rangeSliderId[i - 1]]);
//   spyOnSlider(rangeSliderId[i - 1], i);
// }





