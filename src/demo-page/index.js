import './index.scss';
import '../range-slider/jquery.index.d.ts';
import $ from 'jquery';

$('#api_first').fn.Slider({
    max: 500,
    min: 50,
    step: 1,
});