import $ from 'jquery';

import './jquery.index';

class CallPlugin {
  rangeSliderId = ['api_first', 'api_second', 'api_third', 'api_fourth'];

  api = [
    // first init
    {
      max: 100,
      min: 0,
      step: 1,
      defaultValue: 30,
      valueSecond: 70,
      isMultiThumb: false,
      showBubble: false,
      isVertical: false,
      showTicks: false,
      ticksValues: [],
      barColor: 'red',
      thumbColor: 'green',
      bubbleColor: 'yellow',
    },
    // second init
    {
      max: 500,
      min: -100,
      step: 5,
      defaultValue: 100,
      valueSecond: 350,
      isMultiThumb: true,
      showBubble: false,
      isVertical: true,
      showTicks: false,
      ticksValues: [],
      barColor: 'purple',
      thumbColor: 'orange',
      bubbleColor: 'green',
    },
    // third init
    {
      max: -500,
      min: -1000,
      step: 20,
      defaultValue: -700,
      valueSecond: -900,
      isMultiThumb: false,
      showBubble: true,
      isVertical: false,
      showTicks: true,
      ticksValues: [-1000, -700, -500],
      barColor: 'black',
      thumbColor: 'pink',
      bubbleColor: 'grey',
    },
    // fourth init
    {
      max: 1500,
      min: 100,
      step: 100,
      defaultValue: 200,
      valueSecond: 500,
      isMultiThumb: true,
      showBubble: true,
      isVertical: true,
      showTicks: true,
      ticksValues: [100, 500, 1000, 1500],
      barColor: 'purple',
      thumbColor: 'black',
      bubbleColor: 'orange',
    },
  ];
  

  init() {
    this.initialize();
  }

  // initialize slider with default values
  initialize() {
    for (let i = 0; i < this.rangeSliderId.length; i++) {
      $(`#${this.rangeSliderId[i]}`).sliderPlugin(this.api[i]);
    }
  }
    
}

export default CallPlugin;