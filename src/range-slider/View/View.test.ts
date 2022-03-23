import {maxDefValue} from './View';
import $ from 'jquery';

test('clicks max and min values', () => {
    document.body.innerHTML = 
    '<input type="range" min="1" max="10" step="1" orient="vertical" class="range-slider">' 
    + '<div class="label_first">' + 'Current first value: 5' +
    '</div>' + 
    '<div class="label__max-def-value">' + '10' + '</div>' +
    '<div class="label__min-def-value">' + '1' + '</div>';

    $('.label__max-def-value').click();
    expect(maxDefValue).toBeCalled();
    expect($('.label_first').text()).toEqual('Current first value: 10')
})