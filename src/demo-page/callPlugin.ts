import $ from 'jquery';

import './jquery.index';

class CallPlugin {
  public renderSlider(id: string, panel: (number | boolean | string)[]) {
    // render slider with info from panel
    // delete duplicates of slider when panel is used
    const elem = <HTMLDivElement>document.getElementById(id);
    if (elem.firstElementChild) {
      elem.removeChild(elem.firstElementChild);
    }
    $('#api_first').sliderPlugin({
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
}
const test = new CallPlugin();
export default test;