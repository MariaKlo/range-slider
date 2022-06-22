import $ from 'jquery';
import './jquery.index';

// arrays of id
const rangeSliderId = ['api_first', 'api_second', 'api_third', 'api_fourth'];

// set state to keep data
const state = {};
const setState = (name, options) => {
  state[name] = options;
};

// state gets data from panel
for (let i = 1; i <= rangeSliderId.length; i += 1) {
  // get values from panel
  const getValue = (id) => Number(document.getElementById(id).value);
  const getBooleanValue = (id) => document.getElementById(id).checked;
  const getStringValue = (id) => document.getElementById(id).value;

  setState(rangeSliderId[i - 1], {
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

// set attributes for api (default value or first and second values)
// set values for slider (default value, first value, second value)
const spyOnSlider = (item, index) => {
  const slider = document.getElementById(item).firstChild;
  const setSliderValue = () => {
    const newDefaultValue = slider.getAttribute('default-value');
    if (newDefaultValue) {
      document.getElementById(`defaultValue${index}`).value = newDefaultValue;
      state[rangeSliderId[index - 1]].defaultValue = newDefaultValue;
    }
    const newDefaultLeftValue = slider.getAttribute('first-value');
    if (newDefaultLeftValue) {
      document.getElementById(`defaultValue${index}`).value = newDefaultLeftValue;
      state[rangeSliderId[index - 1]].leftValue = newDefaultLeftValue;
    }
    const newRightValue = slider.getAttribute('second-value');
    if (newRightValue) {
      document.getElementById(`valueSecond${index}`).value = newRightValue;
      state[rangeSliderId[index - 1]].valueSecond = newRightValue;
    }
  };
  slider.addEventListener('mousemove', setSliderValue);
  slider.addEventListener('click', setSliderValue);
};
// render slider with info from panel
const renderRangeSlider = (id, panel) => {
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

// slider gets data from state
for (let i = 1; i <= rangeSliderId.length; i += 1) {
  const rangeSliderNumbersId = ['max', 'min', 'step', 'defaultValue', 'valueSecond'];
  const rangeSliderBooleansId = ['isMultiThumb', 'showBubble', 'isVertical', 'showTicks'];
  const rangeSliderArrId = ['ticksValues'];
  const rangeSliderStringId = ['barColor', 'thumbColor', 'bubbleColor'];
  // change number data
  rangeSliderNumbersId.forEach((item) => {
    const element = document.getElementById(item + i);
    const changeNumberValue = () => {
      state[rangeSliderId[i - 1]][item] = element.value;
      renderRangeSlider(rangeSliderId[i - 1], state[rangeSliderId[i - 1]]);
      spyOnSlider(rangeSliderId[i - 1], i);
    };
    element.addEventListener('change', changeNumberValue);
  });
  // change boolean data
  rangeSliderBooleansId.forEach((item) => {
    const element = document.getElementById(item + i);
    const changeBooleanValue = () => {
      state[rangeSliderId[i - 1]][item] = element.checked;
      renderRangeSlider(rangeSliderId[i - 1], state[rangeSliderId[i - 1]]);
      spyOnSlider(rangeSliderId[i - 1], i);
    };
    element.addEventListener('change', changeBooleanValue);
  });
  // change array data
  rangeSliderArrId.forEach((item) => {
    const element = document.getElementById(item + i);
    const changeArrValue = () => {
      const string = String(element.value).split(/[, ]+/);
      state[rangeSliderId[i - 1]][item] = string;
      renderRangeSlider(rangeSliderId[i - 1], state[rangeSliderId[i - 1]]);
      spyOnSlider(rangeSliderId[i - 1], i);
    };
    element.addEventListener('change', changeArrValue);
  });
  // change string data
  rangeSliderStringId.forEach((item) => {
    const element = document.getElementById(item + i);
    const changeStringValue = () => {
      state[rangeSliderId[i - 1]][item] = element.value;
      renderRangeSlider(rangeSliderId[i - 1], state[rangeSliderId[i - 1]]);
      spyOnSlider(rangeSliderId[i - 1], i);
    };
    element.addEventListener('change', changeStringValue);
  });
  // render slider with data from panel
  renderRangeSlider(rangeSliderId[i - 1], state[rangeSliderId[i - 1]]);
  spyOnSlider(rangeSliderId[i - 1], i);
}