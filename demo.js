/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/demo-page/callPlugin.ts":
/*!*************************************!*\
  !*** ./src/demo-page/callPlugin.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jquery_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jquery.index */ "./src/demo-page/jquery.index.ts");


class CallPlugin {
    renderFirstSlider(id, panel) {
        const elem = document.getElementById(id);
        if (elem.firstElementChild) {
            elem.removeChild(elem.firstElementChild);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#api_first').sliderPlugin({
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
    renderSecondSlider(id, panel) {
        const elem = document.getElementById(id);
        if (elem.firstElementChild) {
            elem.removeChild(elem.firstElementChild);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#api_second').sliderPlugin({
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
    renderThirdSlider(id, panel) {
        const elem = document.getElementById(id);
        if (elem.firstElementChild) {
            elem.removeChild(elem.firstElementChild);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#api_third').sliderPlugin({
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
    renderFourthSlider(id, panel) {
        const elem = document.getElementById(id);
        if (elem.firstElementChild) {
            elem.removeChild(elem.firstElementChild);
        }
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#api_fourth').sliderPlugin({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (test);


/***/ }),

/***/ "./src/demo-page/panel.ts":
/*!********************************!*\
  !*** ./src/demo-page/panel.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _callPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callPlugin */ "./src/demo-page/callPlugin.ts");
/* harmony import */ var _jquery_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jquery.index */ "./src/demo-page/jquery.index.ts");


class Panel {
    constructor() {
        Object.defineProperty(this, "stateForFirstApi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "stateForSecondApi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "stateForThirdApi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "stateForFourthApi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        this.init();
    }
    init() {
        this.callFirstApi();
        this.callSecondApi();
        this.callThirdApi();
        this.callFourthApi();
    }
    setState(options) {
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
    callThirdApi() {
        this.getDataFromThirdPanel();
        this.getDataFromThirdState();
    }
    callFourthApi() {
        this.getDataFromFourthPanel();
        this.getDataFromFourthState();
    }
    getDataFromPanel() {
        const getValue = (id) => {
            const elem = document.getElementById(id);
            return Number(elem.value);
        };
        const getBooleanValue = (id) => {
            const elem = document.getElementById(id);
            return Boolean(elem.checked);
        };
        const getStringValue = (id) => {
            const elem = document.getElementById(id);
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
    spyOnSlider(item) {
        var _a;
        const slider = (_a = document.getElementById(item)) === null || _a === void 0 ? void 0 : _a.firstChild;
        const setSliderValue = () => {
            const newDefaultValue = slider.getAttribute('default-value');
            if (newDefaultValue) {
                const element = document.getElementById('defaultValue1');
                element.value = newDefaultValue;
                this.stateForFirstApi[3] = Number(newDefaultValue);
            }
            const newDefaultLeftValue = slider.getAttribute('first-value');
            if (newDefaultLeftValue) {
                const element = document.getElementById('defaultValue1');
                element.value = newDefaultLeftValue;
                this.stateForFirstApi[3] = Number(newDefaultLeftValue);
            }
            const newRightValue = slider.getAttribute('second-value');
            if (newRightValue) {
                const element = document.getElementById('valueSecond1');
                element.value = newRightValue;
                this.stateForFirstApi[4] = Number(newRightValue);
            }
        };
        slider.addEventListener('mousemove', setSliderValue);
        slider.addEventListener('click', setSliderValue);
    }
    getDataFromState() {
        const maxElement = document.getElementById('max1');
        const minElement = document.getElementById('min1');
        const stepElement = document.getElementById('step1');
        const defaultValueElement = document.getElementById('defaultValue1');
        const valueSecondElement = document.getElementById('valueSecond1');
        const changeNumberValue = () => {
            this.stateForFirstApi[0] = Number(maxElement.value);
            this.stateForFirstApi[1] = Number(minElement.value);
            this.stateForFirstApi[2] = Number(stepElement.value);
            this.stateForFirstApi[3] = Number(defaultValueElement.value);
            this.stateForFirstApi[4] = Number(valueSecondElement.value);
            _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderFirstSlider('api_first', this.stateForFirstApi);
            this.spyOnSlider('api_first');
        };
        maxElement.addEventListener('change', changeNumberValue);
        minElement.addEventListener('change', changeNumberValue);
        stepElement.addEventListener('change', changeNumberValue);
        defaultValueElement.addEventListener('change', changeNumberValue);
        valueSecondElement.addEventListener('change', changeNumberValue);
        const multiElement = document.getElementById('isMultiThumb1');
        const bubbleElement = document.getElementById('showBubble1');
        const isVerticalElement = document.getElementById('isVertical1');
        const ticksElement = document.getElementById('showTicks1');
        const changeBooleanValue = () => {
            this.stateForFirstApi[5] = Boolean(multiElement.checked);
            this.stateForFirstApi[6] = Boolean(bubbleElement.checked);
            this.stateForFirstApi[7] = Boolean(isVerticalElement.checked);
            this.stateForFirstApi[8] = Boolean(ticksElement.checked);
            _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderFirstSlider('api_first', this.stateForFirstApi);
            this.spyOnSlider('api_first');
        };
        multiElement.addEventListener('change', changeBooleanValue);
        bubbleElement.addEventListener('change', changeBooleanValue);
        isVerticalElement.addEventListener('change', changeBooleanValue);
        ticksElement.addEventListener('change', changeBooleanValue);
        const barColorElement = document.getElementById('barColor1');
        const thumbColorElement = document.getElementById('thumbColor1');
        const bubbleColorElement = document.getElementById('bubbleColor1');
        const changeStringValue = () => {
            this.stateForFirstApi[9] = String(barColorElement.value);
            this.stateForFirstApi[10] = String(thumbColorElement.value);
            this.stateForFirstApi[11] = String(bubbleColorElement.value);
            _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderFirstSlider('api_first', this.stateForFirstApi);
            this.spyOnSlider('api_first');
        };
        barColorElement.addEventListener('change', changeStringValue);
        thumbColorElement.addEventListener('change', changeStringValue);
        bubbleColorElement.addEventListener('change', changeStringValue);
        _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderFirstSlider('api_first', this.stateForFirstApi);
        this.spyOnSlider('api_first');
    }
    getDataFromSecondPanel() {
        const getValue = (id) => {
            const elem = document.getElementById(id);
            return Number(elem.value);
        };
        const getBooleanValue = (id) => {
            const elem = document.getElementById(id);
            return Boolean(elem.checked);
        };
        const getStringValue = (id) => {
            const elem = document.getElementById(id);
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
    spyOnSecondSlider(item) {
        var _a;
        const slider = (_a = document.getElementById(item)) === null || _a === void 0 ? void 0 : _a.firstChild;
        const setSliderValue = () => {
            const newDefaultValue = slider.getAttribute('default-value');
            if (newDefaultValue) {
                const element = document.getElementById('defaultValue2');
                element.value = newDefaultValue;
                this.stateForSecondApi[3] = Number(newDefaultValue);
            }
            const newDefaultLeftValue = slider.getAttribute('first-value');
            if (newDefaultLeftValue) {
                const element = document.getElementById('defaultValue2');
                element.value = newDefaultLeftValue;
                this.stateForSecondApi[3] = Number(newDefaultLeftValue);
            }
            const newRightValue = slider.getAttribute('second-value');
            if (newRightValue) {
                const element = document.getElementById('valueSecond2');
                element.value = newRightValue;
                this.stateForSecondApi[4] = Number(newRightValue);
            }
        };
        slider.addEventListener('mousemove', setSliderValue);
        slider.addEventListener('click', setSliderValue);
    }
    getDataFromSecondState() {
        const maxElement = document.getElementById('max2');
        const minElement = document.getElementById('min2');
        const stepElement = document.getElementById('step2');
        const defaultValueElement = document.getElementById('defaultValue2');
        const valueSecondElement = document.getElementById('valueSecond2');
        const changeNumberValue = () => {
            this.stateForSecondApi[0] = Number(maxElement.value);
            this.stateForSecondApi[1] = Number(minElement.value);
            this.stateForSecondApi[2] = Number(stepElement.value);
            this.stateForSecondApi[3] = Number(defaultValueElement.value);
            this.stateForSecondApi[4] = Number(valueSecondElement.value);
            _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderSecondSlider('api_second', this.stateForSecondApi);
            this.spyOnSecondSlider('api_second');
        };
        maxElement.addEventListener('change', changeNumberValue);
        minElement.addEventListener('change', changeNumberValue);
        stepElement.addEventListener('change', changeNumberValue);
        defaultValueElement.addEventListener('change', changeNumberValue);
        valueSecondElement.addEventListener('change', changeNumberValue);
        const multiElement = document.getElementById('isMultiThumb2');
        const bubbleElement = document.getElementById('showBubble2');
        const isVerticalElement = document.getElementById('isVertical2');
        const ticksElement = document.getElementById('showTicks2');
        const changeBooleanValue = () => {
            this.stateForSecondApi[5] = Boolean(multiElement.checked);
            this.stateForSecondApi[6] = Boolean(bubbleElement.checked);
            this.stateForSecondApi[7] = Boolean(isVerticalElement.checked);
            this.stateForSecondApi[8] = Boolean(ticksElement.checked);
            _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderSecondSlider('api_second', this.stateForSecondApi);
            this.spyOnSecondSlider('api_second');
        };
        multiElement.addEventListener('change', changeBooleanValue);
        bubbleElement.addEventListener('change', changeBooleanValue);
        isVerticalElement.addEventListener('change', changeBooleanValue);
        ticksElement.addEventListener('change', changeBooleanValue);
        const barColorElement = document.getElementById('barColor2');
        const thumbColorElement = document.getElementById('thumbColor2');
        const bubbleColorElement = document.getElementById('bubbleColor2');
        const changeStringValue = () => {
            this.stateForSecondApi[9] = String(barColorElement.value);
            this.stateForSecondApi[10] = String(thumbColorElement.value);
            this.stateForSecondApi[11] = String(bubbleColorElement.value);
            _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderSecondSlider('api_second', this.stateForSecondApi);
            this.spyOnSecondSlider('api_second');
        };
        barColorElement.addEventListener('change', changeStringValue);
        thumbColorElement.addEventListener('change', changeStringValue);
        bubbleColorElement.addEventListener('change', changeStringValue);
        _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderSecondSlider('api_second', this.stateForSecondApi);
        this.spyOnSecondSlider('api_second');
    }
    getDataFromThirdPanel() {
        const getValue = (id) => {
            const elem = document.getElementById(id);
            return Number(elem.value);
        };
        const getBooleanValue = (id) => {
            const elem = document.getElementById(id);
            return Boolean(elem.checked);
        };
        const getStringValue = (id) => {
            const elem = document.getElementById(id);
            return String(elem.value);
        };
        this.setState([
            getValue('max3'),
            getValue('min3'),
            getValue('step3'),
            getValue('defaultValue3'),
            getValue('valueSecond3'),
            getBooleanValue('isMultiThumb3'),
            getBooleanValue('showBubble3'),
            getBooleanValue('isVertical3'),
            getBooleanValue('showTicks3'),
            getStringValue('barColor3'),
            getStringValue('thumbColor3'),
            getStringValue('bubbleColor3'),
        ]);
    }
    spyOnThirdSlider(item) {
        var _a;
        const slider = (_a = document.getElementById(item)) === null || _a === void 0 ? void 0 : _a.firstChild;
        const setSliderValue = () => {
            const newDefaultValue = slider.getAttribute('default-value');
            if (newDefaultValue) {
                const element = document.getElementById('defaultValue3');
                element.value = newDefaultValue;
                this.stateForThirdApi[3] = Number(newDefaultValue);
            }
            const newDefaultLeftValue = slider.getAttribute('first-value');
            if (newDefaultLeftValue) {
                const element = document.getElementById('defaultValue3');
                element.value = newDefaultLeftValue;
                this.stateForThirdApi[3] = Number(newDefaultLeftValue);
            }
            const newRightValue = slider.getAttribute('second-value');
            if (newRightValue) {
                const element = document.getElementById('valueSecond3');
                element.value = newRightValue;
                this.stateForThirdApi[4] = Number(newRightValue);
            }
        };
        slider.addEventListener('mousemove', setSliderValue);
        slider.addEventListener('click', setSliderValue);
    }
    getDataFromThirdState() {
        const maxElement = document.getElementById('max3');
        const minElement = document.getElementById('min3');
        const stepElement = document.getElementById('step3');
        const defaultValueElement = document.getElementById('defaultValue3');
        const valueSecondElement = document.getElementById('valueSecond3');
        const changeNumberValue = () => {
            this.stateForThirdApi[0] = Number(maxElement.value);
            this.stateForThirdApi[1] = Number(minElement.value);
            this.stateForThirdApi[2] = Number(stepElement.value);
            this.stateForThirdApi[3] = Number(defaultValueElement.value);
            this.stateForThirdApi[4] = Number(valueSecondElement.value);
            _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderThirdSlider('api_third', this.stateForThirdApi);
            this.spyOnThirdSlider('api_third');
        };
        maxElement.addEventListener('change', changeNumberValue);
        minElement.addEventListener('change', changeNumberValue);
        stepElement.addEventListener('change', changeNumberValue);
        defaultValueElement.addEventListener('change', changeNumberValue);
        valueSecondElement.addEventListener('change', changeNumberValue);
        const multiElement = document.getElementById('isMultiThumb3');
        const bubbleElement = document.getElementById('showBubble3');
        const isVerticalElement = document.getElementById('isVertical3');
        const ticksElement = document.getElementById('showTicks3');
        const changeBooleanValue = () => {
            this.stateForThirdApi[5] = Boolean(multiElement.checked);
            this.stateForThirdApi[6] = Boolean(bubbleElement.checked);
            this.stateForThirdApi[7] = Boolean(isVerticalElement.checked);
            this.stateForThirdApi[8] = Boolean(ticksElement.checked);
            _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderThirdSlider('api_third', this.stateForThirdApi);
            this.spyOnThirdSlider('api_third');
        };
        multiElement.addEventListener('change', changeBooleanValue);
        bubbleElement.addEventListener('change', changeBooleanValue);
        isVerticalElement.addEventListener('change', changeBooleanValue);
        ticksElement.addEventListener('change', changeBooleanValue);
        const barColorElement = document.getElementById('barColor3');
        const thumbColorElement = document.getElementById('thumbColor3');
        const bubbleColorElement = document.getElementById('bubbleColor3');
        const changeStringValue = () => {
            this.stateForThirdApi[9] = String(barColorElement.value);
            this.stateForThirdApi[10] = String(thumbColorElement.value);
            this.stateForThirdApi[11] = String(bubbleColorElement.value);
            _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderThirdSlider('api_third', this.stateForThirdApi);
            this.spyOnThirdSlider('api_third');
        };
        barColorElement.addEventListener('change', changeStringValue);
        thumbColorElement.addEventListener('change', changeStringValue);
        bubbleColorElement.addEventListener('change', changeStringValue);
        _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderThirdSlider('api_third', this.stateForThirdApi);
        this.spyOnThirdSlider('api_third');
    }
    getDataFromFourthPanel() {
        const getValue = (id) => {
            const elem = document.getElementById(id);
            return Number(elem.value);
        };
        const getBooleanValue = (id) => {
            const elem = document.getElementById(id);
            return Boolean(elem.checked);
        };
        const getStringValue = (id) => {
            const elem = document.getElementById(id);
            return String(elem.value);
        };
        this.setState([
            getValue('max4'),
            getValue('min4'),
            getValue('step4'),
            getValue('defaultValue4'),
            getValue('valueSecond4'),
            getBooleanValue('isMultiThumb4'),
            getBooleanValue('showBubble4'),
            getBooleanValue('isVertical4'),
            getBooleanValue('showTicks4'),
            getStringValue('barColor4'),
            getStringValue('thumbColor4'),
            getStringValue('bubbleColor4'),
        ]);
    }
    spyOnFourthSlider(item) {
        var _a;
        const slider = (_a = document.getElementById(item)) === null || _a === void 0 ? void 0 : _a.firstChild;
        const setSliderValue = () => {
            const newDefaultValue = slider.getAttribute('default-value');
            if (newDefaultValue) {
                const element = document.getElementById('defaultValue4');
                element.value = newDefaultValue;
                this.stateForFourthApi[3] = Number(newDefaultValue);
            }
            const newDefaultLeftValue = slider.getAttribute('first-value');
            if (newDefaultLeftValue) {
                const element = document.getElementById('defaultValue4');
                element.value = newDefaultLeftValue;
                this.stateForFourthApi[3] = Number(newDefaultLeftValue);
            }
            const newRightValue = slider.getAttribute('second-value');
            if (newRightValue) {
                const element = document.getElementById('valueSecond4');
                element.value = newRightValue;
                this.stateForFourthApi[4] = Number(newRightValue);
            }
        };
        slider.addEventListener('mousemove', setSliderValue);
        slider.addEventListener('click', setSliderValue);
    }
    getDataFromFourthState() {
        const maxElement = document.getElementById('max4');
        const minElement = document.getElementById('min4');
        const stepElement = document.getElementById('step4');
        const defaultValueElement = document.getElementById('defaultValue4');
        const valueSecondElement = document.getElementById('valueSecond4');
        const changeNumberValue = () => {
            this.stateForFourthApi[0] = Number(maxElement.value);
            this.stateForFourthApi[1] = Number(minElement.value);
            this.stateForFourthApi[2] = Number(stepElement.value);
            this.stateForFourthApi[3] = Number(defaultValueElement.value);
            this.stateForFourthApi[4] = Number(valueSecondElement.value);
            _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderFourthSlider('api_fourth', this.stateForFourthApi);
            this.spyOnFourthSlider('api_fourth');
        };
        maxElement.addEventListener('change', changeNumberValue);
        minElement.addEventListener('change', changeNumberValue);
        stepElement.addEventListener('change', changeNumberValue);
        defaultValueElement.addEventListener('change', changeNumberValue);
        valueSecondElement.addEventListener('change', changeNumberValue);
        const multiElement = document.getElementById('isMultiThumb4');
        const bubbleElement = document.getElementById('showBubble4');
        const isVerticalElement = document.getElementById('isVertical4');
        const ticksElement = document.getElementById('showTicks4');
        const changeBooleanValue = () => {
            this.stateForFourthApi[5] = Boolean(multiElement.checked);
            this.stateForFourthApi[6] = Boolean(bubbleElement.checked);
            this.stateForFourthApi[7] = Boolean(isVerticalElement.checked);
            this.stateForFourthApi[8] = Boolean(ticksElement.checked);
            _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderFourthSlider('api_fourth', this.stateForFourthApi);
            this.spyOnFourthSlider('api_fourth');
        };
        multiElement.addEventListener('change', changeBooleanValue);
        bubbleElement.addEventListener('change', changeBooleanValue);
        isVerticalElement.addEventListener('change', changeBooleanValue);
        ticksElement.addEventListener('change', changeBooleanValue);
        const barColorElement = document.getElementById('barColor4');
        const thumbColorElement = document.getElementById('thumbColor4');
        const bubbleColorElement = document.getElementById('bubbleColor4');
        const changeStringValue = () => {
            this.stateForFourthApi[9] = String(barColorElement.value);
            this.stateForFourthApi[10] = String(thumbColorElement.value);
            this.stateForFourthApi[11] = String(bubbleColorElement.value);
            _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderFourthSlider('api_fourth', this.stateForFourthApi);
            this.spyOnFourthSlider('api_fourth');
        };
        barColorElement.addEventListener('change', changeStringValue);
        thumbColorElement.addEventListener('change', changeStringValue);
        bubbleColorElement.addEventListener('change', changeStringValue);
        _callPlugin__WEBPACK_IMPORTED_MODULE_0__["default"].renderFourthSlider('api_fourth', this.stateForFourthApi);
        this.spyOnFourthSlider('api_fourth');
    }
}
new Panel();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Panel);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"demo": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkslider_plugin"] = self["webpackChunkslider_plugin"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-4f68d2","src_demo-page_jquery_index_ts"], () => (__webpack_require__("./src/demo-page/panel.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xpZGVyLXBsdWdpbi8uL3NyYy9kZW1vLXBhZ2UvY2FsbFBsdWdpbi50cyIsIndlYnBhY2s6Ly9zbGlkZXItcGx1Z2luLy4vc3JjL2RlbW8tcGFnZS9wYW5lbC50cyIsIndlYnBhY2s6Ly9zbGlkZXItcGx1Z2luL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NsaWRlci1wbHVnaW4vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zbGlkZXItcGx1Z2luL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NsaWRlci1wbHVnaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NsaWRlci1wbHVnaW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zbGlkZXItcGx1Z2luL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2xpZGVyLXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zbGlkZXItcGx1Z2luL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc2xpZGVyLXBsdWdpbi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc2xpZGVyLXBsdWdpbi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmltcG9ydCAnLi9qcXVlcnkuaW5kZXgnO1xyXG5cclxuY2xhc3MgQ2FsbFBsdWdpbiB7XHJcbiAgcHVibGljIHJlbmRlckZpcnN0U2xpZGVyKGlkOiBzdHJpbmcsIHBhbmVsOiAobnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZylbXSkge1xyXG4gICAgLy8gcmVuZGVyIHNsaWRlciB3aXRoIGluZm8gZnJvbSBwYW5lbFxyXG4gICAgLy8gZGVsZXRlIGR1cGxpY2F0ZXMgb2Ygc2xpZGVyIHdoZW4gcGFuZWwgaXMgdXNlZFxyXG4gICAgY29uc3QgZWxlbSA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoZWxlbS5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICBlbGVtLnJlbW92ZUNoaWxkKGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgJCgnI2FwaV9maXJzdCcpLnNsaWRlclBsdWdpbih7XHJcbiAgICAgIG1heDogTnVtYmVyKHBhbmVsWzBdKSxcclxuICAgICAgbWluOiBOdW1iZXIocGFuZWxbMV0pLFxyXG4gICAgICBzdGVwOiBOdW1iZXIocGFuZWxbMl0pLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IE51bWJlcihwYW5lbFszXSksXHJcbiAgICAgIHZhbHVlU2Vjb25kOiBOdW1iZXIocGFuZWxbNF0pLFxyXG4gICAgICBpc011bHRpVGh1bWI6IEJvb2xlYW4ocGFuZWxbNV0pLFxyXG4gICAgICBzaG93QnViYmxlOiBCb29sZWFuKHBhbmVsWzZdKSxcclxuICAgICAgaXNWZXJ0aWNhbDogQm9vbGVhbihwYW5lbFs3XSksXHJcbiAgICAgIHNob3dUaWNrczogQm9vbGVhbihwYW5lbFs4XSksXHJcbiAgICAgIGJhckNvbG9yOiBTdHJpbmcocGFuZWxbOV0pLFxyXG4gICAgICB0aHVtYkNvbG9yOiBTdHJpbmcocGFuZWxbMTBdKSxcclxuICAgICAgYnViYmxlQ29sb3I6IFN0cmluZyhwYW5lbFsxMV0pLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyU2Vjb25kU2xpZGVyKGlkOiBzdHJpbmcsIHBhbmVsOiAobnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZylbXSkge1xyXG4gICAgLy8gcmVuZGVyIHNsaWRlciB3aXRoIGluZm8gZnJvbSBwYW5lbFxyXG4gICAgLy8gZGVsZXRlIGR1cGxpY2F0ZXMgb2Ygc2xpZGVyIHdoZW4gcGFuZWwgaXMgdXNlZFxyXG4gICAgY29uc3QgZWxlbSA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoZWxlbS5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICBlbGVtLnJlbW92ZUNoaWxkKGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgJCgnI2FwaV9zZWNvbmQnKS5zbGlkZXJQbHVnaW4oe1xyXG4gICAgICBtYXg6IE51bWJlcihwYW5lbFswXSksXHJcbiAgICAgIG1pbjogTnVtYmVyKHBhbmVsWzFdKSxcclxuICAgICAgc3RlcDogTnVtYmVyKHBhbmVsWzJdKSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBOdW1iZXIocGFuZWxbM10pLFxyXG4gICAgICB2YWx1ZVNlY29uZDogTnVtYmVyKHBhbmVsWzRdKSxcclxuICAgICAgaXNNdWx0aVRodW1iOiBCb29sZWFuKHBhbmVsWzVdKSxcclxuICAgICAgc2hvd0J1YmJsZTogQm9vbGVhbihwYW5lbFs2XSksXHJcbiAgICAgIGlzVmVydGljYWw6IEJvb2xlYW4ocGFuZWxbN10pLFxyXG4gICAgICBzaG93VGlja3M6IEJvb2xlYW4ocGFuZWxbOF0pLFxyXG4gICAgICBiYXJDb2xvcjogU3RyaW5nKHBhbmVsWzldKSxcclxuICAgICAgdGh1bWJDb2xvcjogU3RyaW5nKHBhbmVsWzEwXSksXHJcbiAgICAgIGJ1YmJsZUNvbG9yOiBTdHJpbmcocGFuZWxbMTFdKSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlclRoaXJkU2xpZGVyKGlkOiBzdHJpbmcsIHBhbmVsOiAobnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZylbXSkge1xyXG4gICAgLy8gcmVuZGVyIHNsaWRlciB3aXRoIGluZm8gZnJvbSBwYW5lbFxyXG4gICAgLy8gZGVsZXRlIGR1cGxpY2F0ZXMgb2Ygc2xpZGVyIHdoZW4gcGFuZWwgaXMgdXNlZFxyXG4gICAgY29uc3QgZWxlbSA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoZWxlbS5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICBlbGVtLnJlbW92ZUNoaWxkKGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgJCgnI2FwaV90aGlyZCcpLnNsaWRlclBsdWdpbih7XHJcbiAgICAgIG1heDogTnVtYmVyKHBhbmVsWzBdKSxcclxuICAgICAgbWluOiBOdW1iZXIocGFuZWxbMV0pLFxyXG4gICAgICBzdGVwOiBOdW1iZXIocGFuZWxbMl0pLFxyXG4gICAgICBkZWZhdWx0VmFsdWU6IE51bWJlcihwYW5lbFszXSksXHJcbiAgICAgIHZhbHVlU2Vjb25kOiBOdW1iZXIocGFuZWxbNF0pLFxyXG4gICAgICBpc011bHRpVGh1bWI6IEJvb2xlYW4ocGFuZWxbNV0pLFxyXG4gICAgICBzaG93QnViYmxlOiBCb29sZWFuKHBhbmVsWzZdKSxcclxuICAgICAgaXNWZXJ0aWNhbDogQm9vbGVhbihwYW5lbFs3XSksXHJcbiAgICAgIHNob3dUaWNrczogQm9vbGVhbihwYW5lbFs4XSksXHJcbiAgICAgIGJhckNvbG9yOiBTdHJpbmcocGFuZWxbOV0pLFxyXG4gICAgICB0aHVtYkNvbG9yOiBTdHJpbmcocGFuZWxbMTBdKSxcclxuICAgICAgYnViYmxlQ29sb3I6IFN0cmluZyhwYW5lbFsxMV0pLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyRm91cnRoU2xpZGVyKGlkOiBzdHJpbmcsIHBhbmVsOiAobnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZylbXSkge1xyXG4gICAgLy8gcmVuZGVyIHNsaWRlciB3aXRoIGluZm8gZnJvbSBwYW5lbFxyXG4gICAgLy8gZGVsZXRlIGR1cGxpY2F0ZXMgb2Ygc2xpZGVyIHdoZW4gcGFuZWwgaXMgdXNlZFxyXG4gICAgY29uc3QgZWxlbSA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoZWxlbS5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICBlbGVtLnJlbW92ZUNoaWxkKGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgJCgnI2FwaV9mb3VydGgnKS5zbGlkZXJQbHVnaW4oe1xyXG4gICAgICBtYXg6IE51bWJlcihwYW5lbFswXSksXHJcbiAgICAgIG1pbjogTnVtYmVyKHBhbmVsWzFdKSxcclxuICAgICAgc3RlcDogTnVtYmVyKHBhbmVsWzJdKSxcclxuICAgICAgZGVmYXVsdFZhbHVlOiBOdW1iZXIocGFuZWxbM10pLFxyXG4gICAgICB2YWx1ZVNlY29uZDogTnVtYmVyKHBhbmVsWzRdKSxcclxuICAgICAgaXNNdWx0aVRodW1iOiBCb29sZWFuKHBhbmVsWzVdKSxcclxuICAgICAgc2hvd0J1YmJsZTogQm9vbGVhbihwYW5lbFs2XSksXHJcbiAgICAgIGlzVmVydGljYWw6IEJvb2xlYW4ocGFuZWxbN10pLFxyXG4gICAgICBzaG93VGlja3M6IEJvb2xlYW4ocGFuZWxbOF0pLFxyXG4gICAgICBiYXJDb2xvcjogU3RyaW5nKHBhbmVsWzldKSxcclxuICAgICAgdGh1bWJDb2xvcjogU3RyaW5nKHBhbmVsWzEwXSksXHJcbiAgICAgIGJ1YmJsZUNvbG9yOiBTdHJpbmcocGFuZWxbMTFdKSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5jb25zdCB0ZXN0ID0gbmV3IENhbGxQbHVnaW4oKTtcclxuZXhwb3J0IGRlZmF1bHQgdGVzdDsiLCJpbXBvcnQgdGVzdCBmcm9tICcuL2NhbGxQbHVnaW4nO1xuaW1wb3J0ICcuL2pxdWVyeS5pbmRleCc7XG5cbmNsYXNzIFBhbmVsIHtcbiAgc3RhdGVGb3JGaXJzdEFwaTogKG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcpW10gPSBbXTtcblxuICBzdGF0ZUZvclNlY29uZEFwaTogKG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcpW10gPSBbXTtcblxuICBzdGF0ZUZvclRoaXJkQXBpOiAobnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZylbXSA9IFtdO1xuXG4gIHN0YXRlRm9yRm91cnRoQXBpOiAobnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZylbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNhbGxGaXJzdEFwaSgpO1xuICAgIHRoaXMuY2FsbFNlY29uZEFwaSgpO1xuICAgIHRoaXMuY2FsbFRoaXJkQXBpKCk7XG4gICAgdGhpcy5jYWxsRm91cnRoQXBpKCk7XG4gIH1cblxuICBzZXRTdGF0ZShvcHRpb25zOiAobnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZylbXSk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGVGb3JGaXJzdEFwaSA9IG9wdGlvbnM7XG4gICAgdGhpcy5zdGF0ZUZvclNlY29uZEFwaSA9IG9wdGlvbnM7XG4gICAgdGhpcy5zdGF0ZUZvclRoaXJkQXBpID0gb3B0aW9ucztcbiAgICB0aGlzLnN0YXRlRm9yRm91cnRoQXBpID0gb3B0aW9ucztcbiAgfVxuXG4gIGNhbGxGaXJzdEFwaSgpIHtcbiAgICB0aGlzLmdldERhdGFGcm9tUGFuZWwoKTtcbiAgICB0aGlzLmdldERhdGFGcm9tU3RhdGUoKTtcbiAgfVxuXG4gIGNhbGxTZWNvbmRBcGkoKSB7XG4gICAgdGhpcy5nZXREYXRhRnJvbVNlY29uZFBhbmVsKCk7XG4gICAgdGhpcy5nZXREYXRhRnJvbVNlY29uZFN0YXRlKCk7XG4gIH1cblxuICBjYWxsVGhpcmRBcGkoKSB7XG4gICAgdGhpcy5nZXREYXRhRnJvbVRoaXJkUGFuZWwoKTtcbiAgICB0aGlzLmdldERhdGFGcm9tVGhpcmRTdGF0ZSgpO1xuICB9XG5cbiAgY2FsbEZvdXJ0aEFwaSgpIHtcbiAgICB0aGlzLmdldERhdGFGcm9tRm91cnRoUGFuZWwoKTtcbiAgICB0aGlzLmdldERhdGFGcm9tRm91cnRoU3RhdGUoKTtcbiAgfVxuXG4gIC8vIEZJUlNUIFBBTkVMIEFORCBBUElcbiAgLy8gc3RhdGUgZ2V0cyBkYXRhIGZyb20gcGFuZWxcbiAgZ2V0RGF0YUZyb21QYW5lbCgpIHtcbiAgICAvLyBnZXQgdmFsdWVzIGZyb20gcGFuZWxcbiAgICBjb25zdCBnZXRWYWx1ZSA9IChpZDogc3RyaW5nKTogbnVtYmVyID0+IHtcbiAgICAgIGNvbnN0IGVsZW0gPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICByZXR1cm4gTnVtYmVyKGVsZW0udmFsdWUpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Qm9vbGVhblZhbHVlID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICAgIGNvbnN0IGVsZW0gPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICByZXR1cm4gQm9vbGVhbihlbGVtLmNoZWNrZWQpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0U3RyaW5nVmFsdWUgPSAoaWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBjb25zdCBlbGVtID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgcmV0dXJuIFN0cmluZyhlbGVtLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRTdGF0ZShbXG4gICAgICBnZXRWYWx1ZSgnbWF4MScpLFxuICAgICAgZ2V0VmFsdWUoJ21pbjEnKSxcbiAgICAgIGdldFZhbHVlKCdzdGVwMScpLFxuICAgICAgZ2V0VmFsdWUoJ2RlZmF1bHRWYWx1ZTEnKSxcbiAgICAgIGdldFZhbHVlKCd2YWx1ZVNlY29uZDEnKSxcbiAgICAgIGdldEJvb2xlYW5WYWx1ZSgnaXNNdWx0aVRodW1iMScpLFxuICAgICAgZ2V0Qm9vbGVhblZhbHVlKCdzaG93QnViYmxlMScpLFxuICAgICAgZ2V0Qm9vbGVhblZhbHVlKCdpc1ZlcnRpY2FsMScpLFxuICAgICAgZ2V0Qm9vbGVhblZhbHVlKCdzaG93VGlja3MxJyksXG4gICAgICBnZXRTdHJpbmdWYWx1ZSgnYmFyQ29sb3IxJyksXG4gICAgICBnZXRTdHJpbmdWYWx1ZSgndGh1bWJDb2xvcjEnKSxcbiAgICAgIGdldFN0cmluZ1ZhbHVlKCdidWJibGVDb2xvcjEnKSxcbiAgICBdKTtcbiAgfVxuICBcbiAgLy8gd2hlbiBzbGlkZXIgY2hhbmdlcyBkZWZhdWx0IGFuZCBzZWNvbmQgdmFsdWVzLCBwYW5lbCBzaG93cyBjaGFuZ2VzXG4gIHNweU9uU2xpZGVyKGl0ZW06IHN0cmluZykge1xuICAgIGNvbnN0IHNsaWRlciA9IDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtKT8uZmlyc3RDaGlsZDtcbiAgICBjb25zdCBzZXRTbGlkZXJWYWx1ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0RlZmF1bHRWYWx1ZSA9IHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2RlZmF1bHQtdmFsdWUnKTtcbiAgICAgIGlmIChuZXdEZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWZhdWx0VmFsdWUxJyk7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSBuZXdEZWZhdWx0VmFsdWU7XG4gICAgICAgIHRoaXMuc3RhdGVGb3JGaXJzdEFwaVszXSA9IE51bWJlcihuZXdEZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV3RGVmYXVsdExlZnRWYWx1ZSA9IHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2ZpcnN0LXZhbHVlJyk7XG4gICAgICBpZiAobmV3RGVmYXVsdExlZnRWYWx1ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmF1bHRWYWx1ZTEnKTtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IG5ld0RlZmF1bHRMZWZ0VmFsdWU7XG4gICAgICAgIHRoaXMuc3RhdGVGb3JGaXJzdEFwaVszXSA9IE51bWJlcihuZXdEZWZhdWx0TGVmdFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5ld1JpZ2h0VmFsdWUgPSBzbGlkZXIuZ2V0QXR0cmlidXRlKCdzZWNvbmQtdmFsdWUnKTtcbiAgICAgIGlmIChuZXdSaWdodFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmFsdWVTZWNvbmQxJyk7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSBuZXdSaWdodFZhbHVlO1xuICAgICAgICB0aGlzLnN0YXRlRm9yRmlyc3RBcGlbNF0gPSBOdW1iZXIobmV3UmlnaHRWYWx1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc2V0U2xpZGVyVmFsdWUpO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldFNsaWRlclZhbHVlKTtcbiAgfVxuXG4gIC8vIHNsaWRlciBnZXRzIGRhdGEgZnJvbSBzdGF0ZVxuICBnZXREYXRhRnJvbVN0YXRlKCkge1xuICAgIGNvbnN0IG1heEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4MScpO1xuICAgIGNvbnN0IG1pbkVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluMScpO1xuICAgIGNvbnN0IHN0ZXBFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0ZXAxJyk7XG4gICAgY29uc3QgZGVmYXVsdFZhbHVlRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWZhdWx0VmFsdWUxJyk7XG4gICAgY29uc3QgdmFsdWVTZWNvbmRFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhbHVlU2Vjb25kMScpO1xuICAgIC8vIGNoYW5nZSBudW1iZXIgdmFsdWVcbiAgICBjb25zdCBjaGFuZ2VOdW1iZXJWYWx1ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGVGb3JGaXJzdEFwaVswXSA9IE51bWJlcihtYXhFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JGaXJzdEFwaVsxXSA9IE51bWJlcihtaW5FbGVtZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JGaXJzdEFwaVsyXSA9IE51bWJlcihzdGVwRWxlbWVudC52YWx1ZSk7XG4gICAgICB0aGlzLnN0YXRlRm9yRmlyc3RBcGlbM10gPSBOdW1iZXIoZGVmYXVsdFZhbHVlRWxlbWVudC52YWx1ZSk7XG4gICAgICB0aGlzLnN0YXRlRm9yRmlyc3RBcGlbNF0gPSBOdW1iZXIodmFsdWVTZWNvbmRFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRlc3QucmVuZGVyRmlyc3RTbGlkZXIoJ2FwaV9maXJzdCcsIHRoaXMuc3RhdGVGb3JGaXJzdEFwaSk7XG4gICAgICB0aGlzLnNweU9uU2xpZGVyKCdhcGlfZmlyc3QnKTtcbiAgICB9O1xuICAgIG1heEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlTnVtYmVyVmFsdWUpO1xuICAgIG1pbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlTnVtYmVyVmFsdWUpO1xuICAgIHN0ZXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZU51bWJlclZhbHVlKTtcbiAgICBkZWZhdWx0VmFsdWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZU51bWJlclZhbHVlKTtcbiAgICB2YWx1ZVNlY29uZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlTnVtYmVyVmFsdWUpO1xuXG4gICAgLy8gY2hhbmdlIGJvb2xlYW4gZGF0YVxuICAgIGNvbnN0IG11bHRpRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc011bHRpVGh1bWIxJyk7XG4gICAgY29uc3QgYnViYmxlRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93QnViYmxlMScpO1xuICAgIGNvbnN0IGlzVmVydGljYWxFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzVmVydGljYWwxJyk7XG4gICAgY29uc3QgdGlja3NFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dUaWNrczEnKTtcbiAgICBjb25zdCBjaGFuZ2VCb29sZWFuVmFsdWUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlRm9yRmlyc3RBcGlbNV0gPSBCb29sZWFuKG11bHRpRWxlbWVudC5jaGVja2VkKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JGaXJzdEFwaVs2XSA9IEJvb2xlYW4oYnViYmxlRWxlbWVudC5jaGVja2VkKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JGaXJzdEFwaVs3XSA9IEJvb2xlYW4oaXNWZXJ0aWNhbEVsZW1lbnQuY2hlY2tlZCk7XG4gICAgICB0aGlzLnN0YXRlRm9yRmlyc3RBcGlbOF0gPSBCb29sZWFuKHRpY2tzRWxlbWVudC5jaGVja2VkKTtcbiAgICAgIHRlc3QucmVuZGVyRmlyc3RTbGlkZXIoJ2FwaV9maXJzdCcsIHRoaXMuc3RhdGVGb3JGaXJzdEFwaSk7XG4gICAgICB0aGlzLnNweU9uU2xpZGVyKCdhcGlfZmlyc3QnKTtcbiAgICB9O1xuICAgIG11bHRpRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VCb29sZWFuVmFsdWUpO1xuICAgIGJ1YmJsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlQm9vbGVhblZhbHVlKTtcbiAgICBpc1ZlcnRpY2FsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VCb29sZWFuVmFsdWUpO1xuICAgIHRpY2tzRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VCb29sZWFuVmFsdWUpO1xuXG4gICAgLy8gY2hhbmdlIHN0cmluZyBkYXRhXG4gICAgY29uc3QgYmFyQ29sb3JFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhckNvbG9yMScpO1xuICAgIGNvbnN0IHRodW1iQ29sb3JFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RodW1iQ29sb3IxJyk7XG4gICAgY29uc3QgYnViYmxlQ29sb3JFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZUNvbG9yMScpO1xuICAgIGNvbnN0IGNoYW5nZVN0cmluZ1ZhbHVlID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZUZvckZpcnN0QXBpWzldID0gU3RyaW5nKGJhckNvbG9yRWxlbWVudC52YWx1ZSk7XG4gICAgICB0aGlzLnN0YXRlRm9yRmlyc3RBcGlbMTBdID0gU3RyaW5nKHRodW1iQ29sb3JFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JGaXJzdEFwaVsxMV0gPSBTdHJpbmcoYnViYmxlQ29sb3JFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRlc3QucmVuZGVyRmlyc3RTbGlkZXIoJ2FwaV9maXJzdCcsIHRoaXMuc3RhdGVGb3JGaXJzdEFwaSk7XG4gICAgICB0aGlzLnNweU9uU2xpZGVyKCdhcGlfZmlyc3QnKTtcbiAgICB9O1xuICAgIGJhckNvbG9yRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VTdHJpbmdWYWx1ZSk7XG4gICAgdGh1bWJDb2xvckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlU3RyaW5nVmFsdWUpO1xuICAgIGJ1YmJsZUNvbG9yRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VTdHJpbmdWYWx1ZSk7XG4gICAgXG4gICAgLy8gcmVuZGVyIHNsaWRlciB3aXRoIGRhdGEgZnJvbSBwYW5lbFxuICAgIHRlc3QucmVuZGVyRmlyc3RTbGlkZXIoJ2FwaV9maXJzdCcsIHRoaXMuc3RhdGVGb3JGaXJzdEFwaSk7XG4gICAgdGhpcy5zcHlPblNsaWRlcignYXBpX2ZpcnN0Jyk7XG4gIH1cblxuICAvLyBTRUNPTkQgUEFORUwgQU5EIEFQSVxuICAvLyBzdGF0ZSBnZXRzIGRhdGEgZnJvbSBwYW5lbFxuICBnZXREYXRhRnJvbVNlY29uZFBhbmVsKCkge1xuICAgIC8vIGdldCB2YWx1ZXMgZnJvbSBwYW5lbFxuICAgIGNvbnN0IGdldFZhbHVlID0gKGlkOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICAgICAgY29uc3QgZWxlbSA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgIHJldHVybiBOdW1iZXIoZWxlbS52YWx1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRCb29sZWFuVmFsdWUgPSAoaWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgICAgY29uc3QgZWxlbSA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgIHJldHVybiBCb29sZWFuKGVsZW0uY2hlY2tlZCk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRTdHJpbmdWYWx1ZSA9IChpZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGNvbnN0IGVsZW0gPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICByZXR1cm4gU3RyaW5nKGVsZW0udmFsdWUpO1xuICAgIH07XG5cbiAgICB0aGlzLnNldFN0YXRlKFtcbiAgICAgIGdldFZhbHVlKCdtYXgyJyksXG4gICAgICBnZXRWYWx1ZSgnbWluMicpLFxuICAgICAgZ2V0VmFsdWUoJ3N0ZXAyJyksXG4gICAgICBnZXRWYWx1ZSgnZGVmYXVsdFZhbHVlMicpLFxuICAgICAgZ2V0VmFsdWUoJ3ZhbHVlU2Vjb25kMicpLFxuICAgICAgZ2V0Qm9vbGVhblZhbHVlKCdpc011bHRpVGh1bWIyJyksXG4gICAgICBnZXRCb29sZWFuVmFsdWUoJ3Nob3dCdWJibGUyJyksXG4gICAgICBnZXRCb29sZWFuVmFsdWUoJ2lzVmVydGljYWwyJyksXG4gICAgICBnZXRCb29sZWFuVmFsdWUoJ3Nob3dUaWNrczInKSxcbiAgICAgIGdldFN0cmluZ1ZhbHVlKCdiYXJDb2xvcjInKSxcbiAgICAgIGdldFN0cmluZ1ZhbHVlKCd0aHVtYkNvbG9yMicpLFxuICAgICAgZ2V0U3RyaW5nVmFsdWUoJ2J1YmJsZUNvbG9yMicpLFxuICAgIF0pO1xuICB9XG4gIFxuICAvLyB3aGVuIHNsaWRlciBjaGFuZ2VzIGRlZmF1bHQgYW5kIHNlY29uZCB2YWx1ZXMsIHBhbmVsIHNob3dzIGNoYW5nZXNcbiAgc3B5T25TZWNvbmRTbGlkZXIoaXRlbTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2xpZGVyID0gPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pPy5maXJzdENoaWxkO1xuICAgIGNvbnN0IHNldFNsaWRlclZhbHVlID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3RGVmYXVsdFZhbHVlID0gc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGVmYXVsdC12YWx1ZScpO1xuICAgICAgaWYgKG5ld0RlZmF1bHRWYWx1ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmF1bHRWYWx1ZTInKTtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IG5ld0RlZmF1bHRWYWx1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZUZvclNlY29uZEFwaVszXSA9IE51bWJlcihuZXdEZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV3RGVmYXVsdExlZnRWYWx1ZSA9IHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2ZpcnN0LXZhbHVlJyk7XG4gICAgICBpZiAobmV3RGVmYXVsdExlZnRWYWx1ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmF1bHRWYWx1ZTInKTtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IG5ld0RlZmF1bHRMZWZ0VmFsdWU7XG4gICAgICAgIHRoaXMuc3RhdGVGb3JTZWNvbmRBcGlbM10gPSBOdW1iZXIobmV3RGVmYXVsdExlZnRWYWx1ZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXdSaWdodFZhbHVlID0gc2xpZGVyLmdldEF0dHJpYnV0ZSgnc2Vjb25kLXZhbHVlJyk7XG4gICAgICBpZiAobmV3UmlnaHRWYWx1ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhbHVlU2Vjb25kMicpO1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gbmV3UmlnaHRWYWx1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZUZvclNlY29uZEFwaVs0XSA9IE51bWJlcihuZXdSaWdodFZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzZXRTbGlkZXJWYWx1ZSk7XG4gICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0U2xpZGVyVmFsdWUpO1xuICB9XG5cbiAgLy8gc2xpZGVyIGdldHMgZGF0YSBmcm9tIHN0YXRlXG4gIGdldERhdGFGcm9tU2Vjb25kU3RhdGUoKSB7XG4gICAgY29uc3QgbWF4RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXgyJyk7XG4gICAgY29uc3QgbWluRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW4yJyk7XG4gICAgY29uc3Qgc3RlcEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RlcDInKTtcbiAgICBjb25zdCBkZWZhdWx0VmFsdWVFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmF1bHRWYWx1ZTInKTtcbiAgICBjb25zdCB2YWx1ZVNlY29uZEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmFsdWVTZWNvbmQyJyk7XG4gICAgLy8gY2hhbmdlIG51bWJlciB2YWx1ZVxuICAgIGNvbnN0IGNoYW5nZU51bWJlclZhbHVlID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZUZvclNlY29uZEFwaVswXSA9IE51bWJlcihtYXhFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JTZWNvbmRBcGlbMV0gPSBOdW1iZXIobWluRWxlbWVudC52YWx1ZSk7XG4gICAgICB0aGlzLnN0YXRlRm9yU2Vjb25kQXBpWzJdID0gTnVtYmVyKHN0ZXBFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JTZWNvbmRBcGlbM10gPSBOdW1iZXIoZGVmYXVsdFZhbHVlRWxlbWVudC52YWx1ZSk7XG4gICAgICB0aGlzLnN0YXRlRm9yU2Vjb25kQXBpWzRdID0gTnVtYmVyKHZhbHVlU2Vjb25kRWxlbWVudC52YWx1ZSk7XG4gICAgICB0ZXN0LnJlbmRlclNlY29uZFNsaWRlcignYXBpX3NlY29uZCcsIHRoaXMuc3RhdGVGb3JTZWNvbmRBcGkpO1xuICAgICAgdGhpcy5zcHlPblNlY29uZFNsaWRlcignYXBpX3NlY29uZCcpO1xuICAgIH07XG4gICAgbWF4RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VOdW1iZXJWYWx1ZSk7XG4gICAgbWluRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VOdW1iZXJWYWx1ZSk7XG4gICAgc3RlcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlTnVtYmVyVmFsdWUpO1xuICAgIGRlZmF1bHRWYWx1ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlTnVtYmVyVmFsdWUpO1xuICAgIHZhbHVlU2Vjb25kRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VOdW1iZXJWYWx1ZSk7XG5cbiAgICAvLyBjaGFuZ2UgYm9vbGVhbiBkYXRhXG4gICAgY29uc3QgbXVsdGlFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzTXVsdGlUaHVtYjInKTtcbiAgICBjb25zdCBidWJibGVFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dCdWJibGUyJyk7XG4gICAgY29uc3QgaXNWZXJ0aWNhbEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNWZXJ0aWNhbDInKTtcbiAgICBjb25zdCB0aWNrc0VsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd1RpY2tzMicpO1xuICAgIGNvbnN0IGNoYW5nZUJvb2xlYW5WYWx1ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGVGb3JTZWNvbmRBcGlbNV0gPSBCb29sZWFuKG11bHRpRWxlbWVudC5jaGVja2VkKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JTZWNvbmRBcGlbNl0gPSBCb29sZWFuKGJ1YmJsZUVsZW1lbnQuY2hlY2tlZCk7XG4gICAgICB0aGlzLnN0YXRlRm9yU2Vjb25kQXBpWzddID0gQm9vbGVhbihpc1ZlcnRpY2FsRWxlbWVudC5jaGVja2VkKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JTZWNvbmRBcGlbOF0gPSBCb29sZWFuKHRpY2tzRWxlbWVudC5jaGVja2VkKTtcbiAgICAgIHRlc3QucmVuZGVyU2Vjb25kU2xpZGVyKCdhcGlfc2Vjb25kJywgdGhpcy5zdGF0ZUZvclNlY29uZEFwaSk7XG4gICAgICB0aGlzLnNweU9uU2Vjb25kU2xpZGVyKCdhcGlfc2Vjb25kJyk7XG4gICAgfTtcbiAgICBtdWx0aUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlQm9vbGVhblZhbHVlKTtcbiAgICBidWJibGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUJvb2xlYW5WYWx1ZSk7XG4gICAgaXNWZXJ0aWNhbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlQm9vbGVhblZhbHVlKTtcbiAgICB0aWNrc0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlQm9vbGVhblZhbHVlKTtcblxuICAgIC8vIGNoYW5nZSBzdHJpbmcgZGF0YVxuICAgIGNvbnN0IGJhckNvbG9yRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXJDb2xvcjInKTtcbiAgICBjb25zdCB0aHVtYkNvbG9yRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aHVtYkNvbG9yMicpO1xuICAgIGNvbnN0IGJ1YmJsZUNvbG9yRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGVDb2xvcjInKTtcbiAgICBjb25zdCBjaGFuZ2VTdHJpbmdWYWx1ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGVGb3JTZWNvbmRBcGlbOV0gPSBTdHJpbmcoYmFyQ29sb3JFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JTZWNvbmRBcGlbMTBdID0gU3RyaW5nKHRodW1iQ29sb3JFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JTZWNvbmRBcGlbMTFdID0gU3RyaW5nKGJ1YmJsZUNvbG9yRWxlbWVudC52YWx1ZSk7XG4gICAgICB0ZXN0LnJlbmRlclNlY29uZFNsaWRlcignYXBpX3NlY29uZCcsIHRoaXMuc3RhdGVGb3JTZWNvbmRBcGkpO1xuICAgICAgdGhpcy5zcHlPblNlY29uZFNsaWRlcignYXBpX3NlY29uZCcpO1xuICAgIH07XG4gICAgYmFyQ29sb3JFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVN0cmluZ1ZhbHVlKTtcbiAgICB0aHVtYkNvbG9yRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VTdHJpbmdWYWx1ZSk7XG4gICAgYnViYmxlQ29sb3JFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVN0cmluZ1ZhbHVlKTtcbiAgICBcbiAgICAvLyByZW5kZXIgc2xpZGVyIHdpdGggZGF0YSBmcm9tIHBhbmVsXG4gICAgdGVzdC5yZW5kZXJTZWNvbmRTbGlkZXIoJ2FwaV9zZWNvbmQnLCB0aGlzLnN0YXRlRm9yU2Vjb25kQXBpKTtcbiAgICB0aGlzLnNweU9uU2Vjb25kU2xpZGVyKCdhcGlfc2Vjb25kJyk7XG4gIH1cblxuICAvLyBUSElSRCBQQU5FTCBBTkQgQVBJXG4gIC8vIHN0YXRlIGdldHMgZGF0YSBmcm9tIHBhbmVsXG4gIGdldERhdGFGcm9tVGhpcmRQYW5lbCgpIHtcbiAgICAvLyBnZXQgdmFsdWVzIGZyb20gcGFuZWxcbiAgICBjb25zdCBnZXRWYWx1ZSA9IChpZDogc3RyaW5nKTogbnVtYmVyID0+IHtcbiAgICAgIGNvbnN0IGVsZW0gPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICByZXR1cm4gTnVtYmVyKGVsZW0udmFsdWUpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0Qm9vbGVhblZhbHVlID0gKGlkOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICAgIGNvbnN0IGVsZW0gPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICByZXR1cm4gQm9vbGVhbihlbGVtLmNoZWNrZWQpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0U3RyaW5nVmFsdWUgPSAoaWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBjb25zdCBlbGVtID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgcmV0dXJuIFN0cmluZyhlbGVtLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRTdGF0ZShbXG4gICAgICBnZXRWYWx1ZSgnbWF4MycpLFxuICAgICAgZ2V0VmFsdWUoJ21pbjMnKSxcbiAgICAgIGdldFZhbHVlKCdzdGVwMycpLFxuICAgICAgZ2V0VmFsdWUoJ2RlZmF1bHRWYWx1ZTMnKSxcbiAgICAgIGdldFZhbHVlKCd2YWx1ZVNlY29uZDMnKSxcbiAgICAgIGdldEJvb2xlYW5WYWx1ZSgnaXNNdWx0aVRodW1iMycpLFxuICAgICAgZ2V0Qm9vbGVhblZhbHVlKCdzaG93QnViYmxlMycpLFxuICAgICAgZ2V0Qm9vbGVhblZhbHVlKCdpc1ZlcnRpY2FsMycpLFxuICAgICAgZ2V0Qm9vbGVhblZhbHVlKCdzaG93VGlja3MzJyksXG4gICAgICBnZXRTdHJpbmdWYWx1ZSgnYmFyQ29sb3IzJyksXG4gICAgICBnZXRTdHJpbmdWYWx1ZSgndGh1bWJDb2xvcjMnKSxcbiAgICAgIGdldFN0cmluZ1ZhbHVlKCdidWJibGVDb2xvcjMnKSxcbiAgICBdKTtcbiAgfVxuICBcbiAgLy8gd2hlbiBzbGlkZXIgY2hhbmdlcyBkZWZhdWx0IGFuZCBzZWNvbmQgdmFsdWVzLCBwYW5lbCBzaG93cyBjaGFuZ2VzXG4gIHNweU9uVGhpcmRTbGlkZXIoaXRlbTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2xpZGVyID0gPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pPy5maXJzdENoaWxkO1xuICAgIGNvbnN0IHNldFNsaWRlclZhbHVlID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3RGVmYXVsdFZhbHVlID0gc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGVmYXVsdC12YWx1ZScpO1xuICAgICAgaWYgKG5ld0RlZmF1bHRWYWx1ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmF1bHRWYWx1ZTMnKTtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IG5ld0RlZmF1bHRWYWx1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZUZvclRoaXJkQXBpWzNdID0gTnVtYmVyKG5ld0RlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXdEZWZhdWx0TGVmdFZhbHVlID0gc2xpZGVyLmdldEF0dHJpYnV0ZSgnZmlyc3QtdmFsdWUnKTtcbiAgICAgIGlmIChuZXdEZWZhdWx0TGVmdFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVmYXVsdFZhbHVlMycpO1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gbmV3RGVmYXVsdExlZnRWYWx1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZUZvclRoaXJkQXBpWzNdID0gTnVtYmVyKG5ld0RlZmF1bHRMZWZ0VmFsdWUpO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV3UmlnaHRWYWx1ZSA9IHNsaWRlci5nZXRBdHRyaWJ1dGUoJ3NlY29uZC12YWx1ZScpO1xuICAgICAgaWYgKG5ld1JpZ2h0VmFsdWUpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWx1ZVNlY29uZDMnKTtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IG5ld1JpZ2h0VmFsdWU7XG4gICAgICAgIHRoaXMuc3RhdGVGb3JUaGlyZEFwaVs0XSA9IE51bWJlcihuZXdSaWdodFZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzZXRTbGlkZXJWYWx1ZSk7XG4gICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0U2xpZGVyVmFsdWUpO1xuICB9XG5cbiAgLy8gc2xpZGVyIGdldHMgZGF0YSBmcm9tIHN0YXRlXG4gIGdldERhdGFGcm9tVGhpcmRTdGF0ZSgpIHtcbiAgICBjb25zdCBtYXhFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heDMnKTtcbiAgICBjb25zdCBtaW5FbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbjMnKTtcbiAgICBjb25zdCBzdGVwRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGVwMycpO1xuICAgIGNvbnN0IGRlZmF1bHRWYWx1ZUVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVmYXVsdFZhbHVlMycpO1xuICAgIGNvbnN0IHZhbHVlU2Vjb25kRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWx1ZVNlY29uZDMnKTtcbiAgICAvLyBjaGFuZ2UgbnVtYmVyIHZhbHVlXG4gICAgY29uc3QgY2hhbmdlTnVtYmVyVmFsdWUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlRm9yVGhpcmRBcGlbMF0gPSBOdW1iZXIobWF4RWxlbWVudC52YWx1ZSk7XG4gICAgICB0aGlzLnN0YXRlRm9yVGhpcmRBcGlbMV0gPSBOdW1iZXIobWluRWxlbWVudC52YWx1ZSk7XG4gICAgICB0aGlzLnN0YXRlRm9yVGhpcmRBcGlbMl0gPSBOdW1iZXIoc3RlcEVsZW1lbnQudmFsdWUpO1xuICAgICAgdGhpcy5zdGF0ZUZvclRoaXJkQXBpWzNdID0gTnVtYmVyKGRlZmF1bHRWYWx1ZUVsZW1lbnQudmFsdWUpO1xuICAgICAgdGhpcy5zdGF0ZUZvclRoaXJkQXBpWzRdID0gTnVtYmVyKHZhbHVlU2Vjb25kRWxlbWVudC52YWx1ZSk7XG4gICAgICB0ZXN0LnJlbmRlclRoaXJkU2xpZGVyKCdhcGlfdGhpcmQnLCB0aGlzLnN0YXRlRm9yVGhpcmRBcGkpO1xuICAgICAgdGhpcy5zcHlPblRoaXJkU2xpZGVyKCdhcGlfdGhpcmQnKTtcbiAgICB9O1xuICAgIG1heEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlTnVtYmVyVmFsdWUpO1xuICAgIG1pbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlTnVtYmVyVmFsdWUpO1xuICAgIHN0ZXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZU51bWJlclZhbHVlKTtcbiAgICBkZWZhdWx0VmFsdWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZU51bWJlclZhbHVlKTtcbiAgICB2YWx1ZVNlY29uZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlTnVtYmVyVmFsdWUpO1xuXG4gICAgLy8gY2hhbmdlIGJvb2xlYW4gZGF0YVxuICAgIGNvbnN0IG11bHRpRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpc011bHRpVGh1bWIzJyk7XG4gICAgY29uc3QgYnViYmxlRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93QnViYmxlMycpO1xuICAgIGNvbnN0IGlzVmVydGljYWxFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzVmVydGljYWwzJyk7XG4gICAgY29uc3QgdGlja3NFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dUaWNrczMnKTtcbiAgICBjb25zdCBjaGFuZ2VCb29sZWFuVmFsdWUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlRm9yVGhpcmRBcGlbNV0gPSBCb29sZWFuKG11bHRpRWxlbWVudC5jaGVja2VkKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JUaGlyZEFwaVs2XSA9IEJvb2xlYW4oYnViYmxlRWxlbWVudC5jaGVja2VkKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JUaGlyZEFwaVs3XSA9IEJvb2xlYW4oaXNWZXJ0aWNhbEVsZW1lbnQuY2hlY2tlZCk7XG4gICAgICB0aGlzLnN0YXRlRm9yVGhpcmRBcGlbOF0gPSBCb29sZWFuKHRpY2tzRWxlbWVudC5jaGVja2VkKTtcbiAgICAgIHRlc3QucmVuZGVyVGhpcmRTbGlkZXIoJ2FwaV90aGlyZCcsIHRoaXMuc3RhdGVGb3JUaGlyZEFwaSk7XG4gICAgICB0aGlzLnNweU9uVGhpcmRTbGlkZXIoJ2FwaV90aGlyZCcpO1xuICAgIH07XG4gICAgbXVsdGlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUJvb2xlYW5WYWx1ZSk7XG4gICAgYnViYmxlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VCb29sZWFuVmFsdWUpO1xuICAgIGlzVmVydGljYWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUJvb2xlYW5WYWx1ZSk7XG4gICAgdGlja3NFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUJvb2xlYW5WYWx1ZSk7XG5cbiAgICAvLyBjaGFuZ2Ugc3RyaW5nIGRhdGFcbiAgICBjb25zdCBiYXJDb2xvckVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFyQ29sb3IzJyk7XG4gICAgY29uc3QgdGh1bWJDb2xvckVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGh1bWJDb2xvcjMnKTtcbiAgICBjb25zdCBidWJibGVDb2xvckVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlQ29sb3IzJyk7XG4gICAgY29uc3QgY2hhbmdlU3RyaW5nVmFsdWUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlRm9yVGhpcmRBcGlbOV0gPSBTdHJpbmcoYmFyQ29sb3JFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JUaGlyZEFwaVsxMF0gPSBTdHJpbmcodGh1bWJDb2xvckVsZW1lbnQudmFsdWUpO1xuICAgICAgdGhpcy5zdGF0ZUZvclRoaXJkQXBpWzExXSA9IFN0cmluZyhidWJibGVDb2xvckVsZW1lbnQudmFsdWUpO1xuICAgICAgdGVzdC5yZW5kZXJUaGlyZFNsaWRlcignYXBpX3RoaXJkJywgdGhpcy5zdGF0ZUZvclRoaXJkQXBpKTtcbiAgICAgIHRoaXMuc3B5T25UaGlyZFNsaWRlcignYXBpX3RoaXJkJyk7XG4gICAgfTtcbiAgICBiYXJDb2xvckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlU3RyaW5nVmFsdWUpO1xuICAgIHRodW1iQ29sb3JFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVN0cmluZ1ZhbHVlKTtcbiAgICBidWJibGVDb2xvckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlU3RyaW5nVmFsdWUpO1xuICAgIFxuICAgIC8vIHJlbmRlciBzbGlkZXIgd2l0aCBkYXRhIGZyb20gcGFuZWxcbiAgICB0ZXN0LnJlbmRlclRoaXJkU2xpZGVyKCdhcGlfdGhpcmQnLCB0aGlzLnN0YXRlRm9yVGhpcmRBcGkpO1xuICAgIHRoaXMuc3B5T25UaGlyZFNsaWRlcignYXBpX3RoaXJkJyk7XG4gIH1cblxuICAvLyBGT1VSVEggUEFORUwgQU5EIEFQSVxuICAvLyBzdGF0ZSBnZXRzIGRhdGEgZnJvbSBwYW5lbFxuICBnZXREYXRhRnJvbUZvdXJ0aFBhbmVsKCkge1xuICAgIC8vIGdldCB2YWx1ZXMgZnJvbSBwYW5lbFxuICAgIGNvbnN0IGdldFZhbHVlID0gKGlkOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICAgICAgY29uc3QgZWxlbSA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgIHJldHVybiBOdW1iZXIoZWxlbS52YWx1ZSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRCb29sZWFuVmFsdWUgPSAoaWQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgICAgY29uc3QgZWxlbSA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgIHJldHVybiBCb29sZWFuKGVsZW0uY2hlY2tlZCk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRTdHJpbmdWYWx1ZSA9IChpZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGNvbnN0IGVsZW0gPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICByZXR1cm4gU3RyaW5nKGVsZW0udmFsdWUpO1xuICAgIH07XG5cbiAgICB0aGlzLnNldFN0YXRlKFtcbiAgICAgIGdldFZhbHVlKCdtYXg0JyksXG4gICAgICBnZXRWYWx1ZSgnbWluNCcpLFxuICAgICAgZ2V0VmFsdWUoJ3N0ZXA0JyksXG4gICAgICBnZXRWYWx1ZSgnZGVmYXVsdFZhbHVlNCcpLFxuICAgICAgZ2V0VmFsdWUoJ3ZhbHVlU2Vjb25kNCcpLFxuICAgICAgZ2V0Qm9vbGVhblZhbHVlKCdpc011bHRpVGh1bWI0JyksXG4gICAgICBnZXRCb29sZWFuVmFsdWUoJ3Nob3dCdWJibGU0JyksXG4gICAgICBnZXRCb29sZWFuVmFsdWUoJ2lzVmVydGljYWw0JyksXG4gICAgICBnZXRCb29sZWFuVmFsdWUoJ3Nob3dUaWNrczQnKSxcbiAgICAgIGdldFN0cmluZ1ZhbHVlKCdiYXJDb2xvcjQnKSxcbiAgICAgIGdldFN0cmluZ1ZhbHVlKCd0aHVtYkNvbG9yNCcpLFxuICAgICAgZ2V0U3RyaW5nVmFsdWUoJ2J1YmJsZUNvbG9yNCcpLFxuICAgIF0pO1xuICB9XG4gIFxuICAvLyB3aGVuIHNsaWRlciBjaGFuZ2VzIGRlZmF1bHQgYW5kIHNlY29uZCB2YWx1ZXMsIHBhbmVsIHNob3dzIGNoYW5nZXNcbiAgc3B5T25Gb3VydGhTbGlkZXIoaXRlbTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2xpZGVyID0gPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pPy5maXJzdENoaWxkO1xuICAgIGNvbnN0IHNldFNsaWRlclZhbHVlID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3RGVmYXVsdFZhbHVlID0gc2xpZGVyLmdldEF0dHJpYnV0ZSgnZGVmYXVsdC12YWx1ZScpO1xuICAgICAgaWYgKG5ld0RlZmF1bHRWYWx1ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmF1bHRWYWx1ZTQnKTtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IG5ld0RlZmF1bHRWYWx1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZUZvckZvdXJ0aEFwaVszXSA9IE51bWJlcihuZXdEZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV3RGVmYXVsdExlZnRWYWx1ZSA9IHNsaWRlci5nZXRBdHRyaWJ1dGUoJ2ZpcnN0LXZhbHVlJyk7XG4gICAgICBpZiAobmV3RGVmYXVsdExlZnRWYWx1ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmF1bHRWYWx1ZTQnKTtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IG5ld0RlZmF1bHRMZWZ0VmFsdWU7XG4gICAgICAgIHRoaXMuc3RhdGVGb3JGb3VydGhBcGlbM10gPSBOdW1iZXIobmV3RGVmYXVsdExlZnRWYWx1ZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXdSaWdodFZhbHVlID0gc2xpZGVyLmdldEF0dHJpYnV0ZSgnc2Vjb25kLXZhbHVlJyk7XG4gICAgICBpZiAobmV3UmlnaHRWYWx1ZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhbHVlU2Vjb25kNCcpO1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gbmV3UmlnaHRWYWx1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZUZvckZvdXJ0aEFwaVs0XSA9IE51bWJlcihuZXdSaWdodFZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzZXRTbGlkZXJWYWx1ZSk7XG4gICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0U2xpZGVyVmFsdWUpO1xuICB9XG5cbiAgLy8gc2xpZGVyIGdldHMgZGF0YSBmcm9tIHN0YXRlXG4gIGdldERhdGFGcm9tRm91cnRoU3RhdGUoKSB7XG4gICAgY29uc3QgbWF4RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXg0Jyk7XG4gICAgY29uc3QgbWluRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaW40Jyk7XG4gICAgY29uc3Qgc3RlcEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RlcDQnKTtcbiAgICBjb25zdCBkZWZhdWx0VmFsdWVFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlZmF1bHRWYWx1ZTQnKTtcbiAgICBjb25zdCB2YWx1ZVNlY29uZEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmFsdWVTZWNvbmQ0Jyk7XG4gICAgLy8gY2hhbmdlIG51bWJlciB2YWx1ZVxuICAgIGNvbnN0IGNoYW5nZU51bWJlclZhbHVlID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZUZvckZvdXJ0aEFwaVswXSA9IE51bWJlcihtYXhFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JGb3VydGhBcGlbMV0gPSBOdW1iZXIobWluRWxlbWVudC52YWx1ZSk7XG4gICAgICB0aGlzLnN0YXRlRm9yRm91cnRoQXBpWzJdID0gTnVtYmVyKHN0ZXBFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JGb3VydGhBcGlbM10gPSBOdW1iZXIoZGVmYXVsdFZhbHVlRWxlbWVudC52YWx1ZSk7XG4gICAgICB0aGlzLnN0YXRlRm9yRm91cnRoQXBpWzRdID0gTnVtYmVyKHZhbHVlU2Vjb25kRWxlbWVudC52YWx1ZSk7XG4gICAgICB0ZXN0LnJlbmRlckZvdXJ0aFNsaWRlcignYXBpX2ZvdXJ0aCcsIHRoaXMuc3RhdGVGb3JGb3VydGhBcGkpO1xuICAgICAgdGhpcy5zcHlPbkZvdXJ0aFNsaWRlcignYXBpX2ZvdXJ0aCcpO1xuICAgIH07XG4gICAgbWF4RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VOdW1iZXJWYWx1ZSk7XG4gICAgbWluRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VOdW1iZXJWYWx1ZSk7XG4gICAgc3RlcEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlTnVtYmVyVmFsdWUpO1xuICAgIGRlZmF1bHRWYWx1ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlTnVtYmVyVmFsdWUpO1xuICAgIHZhbHVlU2Vjb25kRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VOdW1iZXJWYWx1ZSk7XG5cbiAgICAvLyBjaGFuZ2UgYm9vbGVhbiBkYXRhXG4gICAgY29uc3QgbXVsdGlFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lzTXVsdGlUaHVtYjQnKTtcbiAgICBjb25zdCBidWJibGVFbGVtZW50ID0gPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dCdWJibGU0Jyk7XG4gICAgY29uc3QgaXNWZXJ0aWNhbEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXNWZXJ0aWNhbDQnKTtcbiAgICBjb25zdCB0aWNrc0VsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd1RpY2tzNCcpO1xuICAgIGNvbnN0IGNoYW5nZUJvb2xlYW5WYWx1ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGVGb3JGb3VydGhBcGlbNV0gPSBCb29sZWFuKG11bHRpRWxlbWVudC5jaGVja2VkKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JGb3VydGhBcGlbNl0gPSBCb29sZWFuKGJ1YmJsZUVsZW1lbnQuY2hlY2tlZCk7XG4gICAgICB0aGlzLnN0YXRlRm9yRm91cnRoQXBpWzddID0gQm9vbGVhbihpc1ZlcnRpY2FsRWxlbWVudC5jaGVja2VkKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JGb3VydGhBcGlbOF0gPSBCb29sZWFuKHRpY2tzRWxlbWVudC5jaGVja2VkKTtcbiAgICAgIHRlc3QucmVuZGVyRm91cnRoU2xpZGVyKCdhcGlfZm91cnRoJywgdGhpcy5zdGF0ZUZvckZvdXJ0aEFwaSk7XG4gICAgICB0aGlzLnNweU9uRm91cnRoU2xpZGVyKCdhcGlfZm91cnRoJyk7XG4gICAgfTtcbiAgICBtdWx0aUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlQm9vbGVhblZhbHVlKTtcbiAgICBidWJibGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZUJvb2xlYW5WYWx1ZSk7XG4gICAgaXNWZXJ0aWNhbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlQm9vbGVhblZhbHVlKTtcbiAgICB0aWNrc0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlQm9vbGVhblZhbHVlKTtcblxuICAgIC8vIGNoYW5nZSBzdHJpbmcgZGF0YVxuICAgIGNvbnN0IGJhckNvbG9yRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXJDb2xvcjQnKTtcbiAgICBjb25zdCB0aHVtYkNvbG9yRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aHVtYkNvbG9yNCcpO1xuICAgIGNvbnN0IGJ1YmJsZUNvbG9yRWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGVDb2xvcjQnKTtcbiAgICBjb25zdCBjaGFuZ2VTdHJpbmdWYWx1ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGVGb3JGb3VydGhBcGlbOV0gPSBTdHJpbmcoYmFyQ29sb3JFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JGb3VydGhBcGlbMTBdID0gU3RyaW5nKHRodW1iQ29sb3JFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuc3RhdGVGb3JGb3VydGhBcGlbMTFdID0gU3RyaW5nKGJ1YmJsZUNvbG9yRWxlbWVudC52YWx1ZSk7XG4gICAgICB0ZXN0LnJlbmRlckZvdXJ0aFNsaWRlcignYXBpX2ZvdXJ0aCcsIHRoaXMuc3RhdGVGb3JGb3VydGhBcGkpO1xuICAgICAgdGhpcy5zcHlPbkZvdXJ0aFNsaWRlcignYXBpX2ZvdXJ0aCcpO1xuICAgIH07XG4gICAgYmFyQ29sb3JFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVN0cmluZ1ZhbHVlKTtcbiAgICB0aHVtYkNvbG9yRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VTdHJpbmdWYWx1ZSk7XG4gICAgYnViYmxlQ29sb3JFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZVN0cmluZ1ZhbHVlKTtcbiAgICBcbiAgICAvLyByZW5kZXIgc2xpZGVyIHdpdGggZGF0YSBmcm9tIHBhbmVsXG4gICAgdGVzdC5yZW5kZXJGb3VydGhTbGlkZXIoJ2FwaV9mb3VydGgnLCB0aGlzLnN0YXRlRm9yRm91cnRoQXBpKTtcbiAgICB0aGlzLnNweU9uRm91cnRoU2xpZGVyKCdhcGlfZm91cnRoJyk7XG4gIH1cbn1cblxubmV3IFBhbmVsKCk7XG5leHBvcnQgZGVmYXVsdCBQYW5lbDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImRlbW9cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc2xpZGVyX3BsdWdpblwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzbGlkZXJfcGx1Z2luXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX3NvdXItNGY2OGQyXCIsXCJzcmNfZGVtby1wYWdlX2pxdWVyeV9pbmRleF90c1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9kZW1vLXBhZ2UvcGFuZWwudHNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==