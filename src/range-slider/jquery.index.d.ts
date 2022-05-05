import Model from './Model/Model';
import View from './View/View';
import barView from './View/subView/barView/barView';
import bubbleView from './View/subView/bubbleView/bubbleView';
import stepView from './View/subView/stepView/stepView';
import ticksView from './View/subView/ticksView/ticksView';
import Presenter from './Presenter/Presenter';
import Options from './component/globalOptions';

(function slider($: JQueryStatic) {
    $.fn.rangeSlider = function init(settings: Options) {
        return new Presenter(
            new Model({
                max: settings.max,
                min: settings.min,
                step: settings.step,
                defaultValue: settings.isMultiThumb ? settings.secondValue : settings.defaultValue,
                secondValue: settings.secondValue,
                isMultiThumb: settings.isMultiThumb,
                rightProgressBar: settings.rightProgressBar,
                showBubble: settings.showBubble,
                isVertical: settings.isVertical,
                showTicks: settings.showTicks,
            }),
            new View(
                this,
                new barView(),
                new bubbleView(),
                new stepView(),
                new ticksView(),
            ),
        );
    };
}(jQuery));