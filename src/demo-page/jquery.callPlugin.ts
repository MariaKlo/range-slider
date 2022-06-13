import $ from 'jquery';
import './jquery.index';

$('#api_first').sliderPlugin({
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
  thumbColor: '',
  bubbleColor: '',
});
  
$('#api_second').sliderPlugin({
  max: 50,
  min: 0,
  step: 1,
  defaultValue: 10,
  valueSecond: 30,
  isMultiThumb: true,
  showBubble: false,
  isVertical: false,
  showTicks: false,
  ticksValues: [0, 10, 20, 30, 40, 50],
  barColor: 'linear-gradient(180deg, #cf6f7f 0%, #ea6666 100%)',
  thumbColor: '',
  bubbleColor: '',
});
  
$('#api_third').sliderPlugin({
  max: 100,
  min: 0,
  step: 10,
  defaultValue: 40,
  valueSecond: 90,
  isMultiThumb: true,
  showBubble: false,
  isVertical: true,
  showTicks: false,
  ticksValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  barColor: 'linear-gradient(180deg, #cf6f7f 0%, #ea6666 100%)',
  thumbColor: '',
  bubbleColor: '',
});