import test from './callPlugin';
import './jquery.index';

class Panel {
  // arrays of id
  rangeSliderId = ['api_first', 'api_second', 'api_third', 'api_fourth'];

  panelNumberValues = ['max', 'min', 'step', 'defaultValue', 'valueSecond'];

  panelBooleanValues = ['isMultiThumb', 'showBubble', 'isVertical', 'showTicks'];

  panelStringValues = ['barColor', 'thumbColor', 'bubbleColor'];

  state: (number | boolean | string)[] = [];

  constructor() {
    this.init();
  }

  init() {
    this.callSecApi();
    this.getDataFromPanel();
    this.getDataFromState();
  }

  setState(options: (number | boolean | string)[]): void {
    this.state = options;
  }

  // state gets data from panel
  getDataFromPanel() {
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
  
  // when slider changes default and second values, panel shows changes
  spyOnSlider(item: string) {
    const slider = <HTMLDivElement>document.getElementById(item)?.firstChild;
    const setSliderValue = () => {
      const newDefaultValue = slider.getAttribute('default-value');
      if (newDefaultValue) {
        const element = <HTMLInputElement>document.getElementById('defaultValue1');
        element.value = newDefaultValue;
        this.state[3] = Number(newDefaultValue);
      }
      const newDefaultLeftValue = slider.getAttribute('first-value');
      if (newDefaultLeftValue) {
        const element = <HTMLInputElement>document.getElementById('defaultValue1');
        element.value = newDefaultLeftValue;
        this.state[3] = Number(newDefaultLeftValue);
      }
      const newRightValue = slider.getAttribute('second-value');
      if (newRightValue) {
        const element = <HTMLInputElement>document.getElementById('valueSecond1');
        element.value = newRightValue;
        this.state[4] = Number(newRightValue);
      }
    };
    slider.addEventListener('mousemove', setSliderValue);
    slider.addEventListener('click', setSliderValue);
  }

  // slider gets data from state
  getDataFromState() {
    const maxElement = <HTMLInputElement>document.getElementById('max1');
    const minElement = <HTMLInputElement>document.getElementById('min1');
    const stepElement = <HTMLInputElement>document.getElementById('step1');
    const defaultValueElement = <HTMLInputElement>document.getElementById('defaultValue1');
    const valueSecondElement = <HTMLInputElement>document.getElementById('valueSecond1');
    // change number value
    const changeNumberValue = () => {
      this.state[0] = Number(maxElement.value);
      this.state[1] = Number(minElement.value);
      this.state[2] = Number(stepElement.value);
      this.state[3] = Number(defaultValueElement.value);
      this.state[4] = Number(valueSecondElement.value);
      test.renderSlider('api_first', this.state);
      this.spyOnSlider('api_first');
    };
    maxElement.addEventListener('change', changeNumberValue);
    minElement.addEventListener('change', changeNumberValue);
    stepElement.addEventListener('change', changeNumberValue);
    defaultValueElement.addEventListener('change', changeNumberValue);
    valueSecondElement.addEventListener('change', changeNumberValue);

    // change boolean data
    const multiElement = <HTMLInputElement>document.getElementById('isMultiThumb1');
    const bubbleElement = <HTMLInputElement>document.getElementById('showBubble1');
    const isVerticalElement = <HTMLInputElement>document.getElementById('isVertical1');
    const ticksElement = <HTMLInputElement>document.getElementById('showTicks1');
    const changeBooleanValue = () => {
      this.state[5] = Boolean(multiElement.checked);
      this.state[6] = Boolean(bubbleElement.checked);
      this.state[7] = Boolean(isVerticalElement.checked);
      this.state[8] = Boolean(ticksElement.checked);
      test.renderSlider('api_first', this.state);
      this.spyOnSlider('api_first');
    };
    multiElement.addEventListener('change', changeBooleanValue);
    bubbleElement.addEventListener('change', changeBooleanValue);
    isVerticalElement.addEventListener('change', changeBooleanValue);
    ticksElement.addEventListener('change', changeBooleanValue);

    // change string data
    const barColorElement = <HTMLInputElement>document.getElementById('barColor1');
    const thumbColorElement = <HTMLInputElement>document.getElementById('thumbColor1');
    const bubbleColorElement = <HTMLInputElement>document.getElementById('bubbleColor1');
    const changeStringValue = () => {
      this.state[9] = String(barColorElement.value);
      this.state[10] = String(thumbColorElement.value);
      this.state[11] = String(bubbleColorElement.value);
      test.renderSlider('api_first', this.state);
      this.spyOnSlider('api_first');
    };
    barColorElement.addEventListener('change', changeStringValue);
    thumbColorElement.addEventListener('change', changeStringValue);
    bubbleColorElement.addEventListener('change', changeStringValue);
    
    // render slider with data from panel
    test.renderSlider('api_first', this.state);
    this.spyOnSlider('api_first');
  }

  callSecApi() {
    $('#api_second').sliderPlugin({
      max: 1500,
      min: 1700,
      step: 100,
      defaultValue: 1900,
      valueSecond: 1800,
      isMultiThumb: true,
      showBubble: true,
      isVertical: false,
      showTicks: true,
      barColor: 'purple',
      thumbColor: 'black',
      bubbleColor: 'orange',
    });
  }
}

new Panel();
export default Panel;