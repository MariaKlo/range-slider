import test from './callPlugin';
import './jquery.index';

class Panel {
  stateForFirstApi: (number | boolean | string)[] = [];

  stateForSecondApi: (number | boolean | string)[] = [];

  stateForThirdApi: (number | boolean | string)[] = [];

  stateForFourthApi: (number | boolean | string)[] = [];

  constructor() {
    this.init();
  }

  init() {
    this.callFirstApi();
    this.callSecondApi();
  }

  setState(options: (number | boolean | string)[]): void {
    this.stateForFirstApi = options;
    this.stateForSecondApi = options;
    this.stateForThirdApi = options;
    this.stateForFourthApi = options;
  }

  callFirstApi() {
    this.getDataFromPanel();
    this.getDataFromState();
  }

  callSecondApi() {
    this.getDataFromSecondPanel();
    this.getDataFromSecondState();
  }

  // FIRST PANEL AND API
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
        this.stateForFirstApi[3] = Number(newDefaultValue);
      }
      const newDefaultLeftValue = slider.getAttribute('first-value');
      if (newDefaultLeftValue) {
        const element = <HTMLInputElement>document.getElementById('defaultValue1');
        element.value = newDefaultLeftValue;
        this.stateForFirstApi[3] = Number(newDefaultLeftValue);
      }
      const newRightValue = slider.getAttribute('second-value');
      if (newRightValue) {
        const element = <HTMLInputElement>document.getElementById('valueSecond1');
        element.value = newRightValue;
        this.stateForFirstApi[4] = Number(newRightValue);
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
      this.stateForFirstApi[0] = Number(maxElement.value);
      this.stateForFirstApi[1] = Number(minElement.value);
      this.stateForFirstApi[2] = Number(stepElement.value);
      this.stateForFirstApi[3] = Number(defaultValueElement.value);
      this.stateForFirstApi[4] = Number(valueSecondElement.value);
      test.renderFirstSlider('api_first', this.stateForFirstApi);
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
      this.stateForFirstApi[5] = Boolean(multiElement.checked);
      this.stateForFirstApi[6] = Boolean(bubbleElement.checked);
      this.stateForFirstApi[7] = Boolean(isVerticalElement.checked);
      this.stateForFirstApi[8] = Boolean(ticksElement.checked);
      test.renderFirstSlider('api_first', this.stateForFirstApi);
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
      this.stateForFirstApi[9] = String(barColorElement.value);
      this.stateForFirstApi[10] = String(thumbColorElement.value);
      this.stateForFirstApi[11] = String(bubbleColorElement.value);
      test.renderFirstSlider('api_first', this.stateForFirstApi);
      this.spyOnSlider('api_first');
    };
    barColorElement.addEventListener('change', changeStringValue);
    thumbColorElement.addEventListener('change', changeStringValue);
    bubbleColorElement.addEventListener('change', changeStringValue);
    
    // render slider with data from panel
    test.renderFirstSlider('api_first', this.stateForFirstApi);
    this.spyOnSlider('api_first');
  }

  // SECOND PANEL AND API
  // state gets data from panel
  getDataFromSecondPanel() {
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
      getValue('max2'),
      getValue('min2'),
      getValue('step2'),
      getValue('defaultValue2'),
      getValue('valueSecond2'),
      getBooleanValue('isMultiThumb2'),
      getBooleanValue('showBubble2'),
      getBooleanValue('isVertical2'),
      getBooleanValue('showTicks2'),
      getStringValue('barColor2'),
      getStringValue('thumbColor2'),
      getStringValue('bubbleColor2'),
    ]);
  }
  
  // when slider changes default and second values, panel shows changes
  spyOnSecondSlider(item: string) {
    const slider = <HTMLDivElement>document.getElementById(item)?.firstChild;
    const setSliderValue = () => {
      const newDefaultValue = slider.getAttribute('default-value');
      if (newDefaultValue) {
        const element = <HTMLInputElement>document.getElementById('defaultValue2');
        element.value = newDefaultValue;
        this.stateForSecondApi[3] = Number(newDefaultValue);
      }
      const newDefaultLeftValue = slider.getAttribute('first-value');
      if (newDefaultLeftValue) {
        const element = <HTMLInputElement>document.getElementById('defaultValue2');
        element.value = newDefaultLeftValue;
        this.stateForSecondApi[3] = Number(newDefaultLeftValue);
      }
      const newRightValue = slider.getAttribute('second-value');
      if (newRightValue) {
        const element = <HTMLInputElement>document.getElementById('valueSecond2');
        element.value = newRightValue;
        this.stateForSecondApi[4] = Number(newRightValue);
      }
    };
    slider.addEventListener('mousemove', setSliderValue);
    slider.addEventListener('click', setSliderValue);
  }

  // slider gets data from state
  getDataFromSecondState() {
    const maxElement = <HTMLInputElement>document.getElementById('max2');
    const minElement = <HTMLInputElement>document.getElementById('min2');
    const stepElement = <HTMLInputElement>document.getElementById('step2');
    const defaultValueElement = <HTMLInputElement>document.getElementById('defaultValue2');
    const valueSecondElement = <HTMLInputElement>document.getElementById('valueSecond2');
    // change number value
    const changeNumberValue = () => {
      this.stateForSecondApi[0] = Number(maxElement.value);
      this.stateForSecondApi[1] = Number(minElement.value);
      this.stateForSecondApi[2] = Number(stepElement.value);
      this.stateForSecondApi[3] = Number(defaultValueElement.value);
      this.stateForSecondApi[4] = Number(valueSecondElement.value);
      test.renderSecondSlider('api_second', this.stateForSecondApi);
      this.spyOnSecondSlider('api_second');
    };
    maxElement.addEventListener('change', changeNumberValue);
    minElement.addEventListener('change', changeNumberValue);
    stepElement.addEventListener('change', changeNumberValue);
    defaultValueElement.addEventListener('change', changeNumberValue);
    valueSecondElement.addEventListener('change', changeNumberValue);

    // change boolean data
    const multiElement = <HTMLInputElement>document.getElementById('isMultiThumb2');
    const bubbleElement = <HTMLInputElement>document.getElementById('showBubble2');
    const isVerticalElement = <HTMLInputElement>document.getElementById('isVertical2');
    const ticksElement = <HTMLInputElement>document.getElementById('showTicks2');
    const changeBooleanValue = () => {
      this.stateForSecondApi[5] = Boolean(multiElement.checked);
      this.stateForSecondApi[6] = Boolean(bubbleElement.checked);
      this.stateForSecondApi[7] = Boolean(isVerticalElement.checked);
      this.stateForSecondApi[8] = Boolean(ticksElement.checked);
      test.renderSecondSlider('api_second', this.stateForSecondApi);
      this.spyOnSecondSlider('api_second');
    };
    multiElement.addEventListener('change', changeBooleanValue);
    bubbleElement.addEventListener('change', changeBooleanValue);
    isVerticalElement.addEventListener('change', changeBooleanValue);
    ticksElement.addEventListener('change', changeBooleanValue);

    // change string data
    const barColorElement = <HTMLInputElement>document.getElementById('barColor2');
    const thumbColorElement = <HTMLInputElement>document.getElementById('thumbColor2');
    const bubbleColorElement = <HTMLInputElement>document.getElementById('bubbleColor2');
    const changeStringValue = () => {
      this.stateForSecondApi[9] = String(barColorElement.value);
      this.stateForSecondApi[10] = String(thumbColorElement.value);
      this.stateForSecondApi[11] = String(bubbleColorElement.value);
      test.renderSecondSlider('api_second', this.stateForSecondApi);
      this.spyOnSecondSlider('api_second');
    };
    barColorElement.addEventListener('change', changeStringValue);
    thumbColorElement.addEventListener('change', changeStringValue);
    bubbleColorElement.addEventListener('change', changeStringValue);
    
    // render slider with data from panel
    test.renderSecondSlider('api_second', this.stateForSecondApi);
    this.spyOnSecondSlider('api_second');
  }
}

new Panel();
export default Panel;