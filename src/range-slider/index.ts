/* Future setup
import Model from './Model/Model';
import View from './View/View';
import Presenter from './Presenter/Presenter';
import Options from './component/globalOptions';

(function slider($: JQueryStatic) {
    $.fn.rangeSlider = function init(settings: {
        min?: number
        max?: number
        step?: number
        defaultValue?: number
        firstValue?: number
        secondValue?: number
        isMultiThumb?: boolean
        rightProgressBar?: boolean
        overThumbElement?: boolean
        showBubble?: boolean
        isVertical?: boolean
        showTicks?: boolean
    }) {
        return new Presenter(
            new Model({
                min: settings.min,
                max: settings.max,
                step: settings.step,
                defaultValue: settings.isRange ? settings.firstValue : settings.defaultValue,
                secondValue: settings.secondValue,
                isMultiThumb: settings.isMultiThumb,
                rightProgressBar: settings.rightProgressBar,
                overThumbElement: settings.overThumbElement,
                isVertical: settings.isVertical,
                showTicks: settings.showTicks,
            }),
            new View(
                this,
                new Slider(),
                new ProgressBar(),
                new Thumb(),
                new Scale(),
            ),
        );
    };
}(jQuery));

*/