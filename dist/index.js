"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-any
var React = require("react");
var react_native_1 = require("react-native");
var defaultFieldTemplate_1 = require("./defaultFieldTemplate");
var defaultOptionTemplate_1 = require("./defaultOptionTemplate");
var DEFAULT_TEXT = 'Pick an item...';
/**
 * React native customizable picker component
 */
var CustomPicker = /** @class */ (function (_super) {


    __extends(CustomPicker, _super);
    function CustomPicker(props) {
        var _this = _super.call(this, props) || this;


        _this.state = {
            modalVisible: false,
            selectedItem: null,
            enable:props.enable != null ? props.enable:true,
        };


        _this.showOptions = _this.showOptions.bind(_this);
        _this.hideOptions = _this.hideOptions.bind(_this);
        _this.selectOption = _this.selectOption.bind(_this);
        _this.clear = _this.clear.bind(_this);
        _this.getLabel = _this.getLabel.bind(_this);
        return _this;
    }


    CustomPicker.prototype.render = function () {
        var _this = this;
        var fieldTemplate = this.props.fieldTemplate || defaultFieldTemplate_1.default;
        var optionTemplate = this.props.optionTemplate || defaultOptionTemplate_1.default;
        var _a = this.props, modalAnimationType = _a.modalAnimationType, placeholder = _a.placeholder, options = _a.options, headerTemplate = _a.headerTemplate, footerTemplate = _a.footerTemplate, style = _a.style, backdropStyle = _a.backdropStyle, modalStyle = _a.modalStyle;
        var actions = {
            getLabel: this.props.getLabel || this.getLabel,
            clear: this.clear,
            open: this.showOptions,
            close: this.hideOptions
        };
        var maxHeight = this.props.maxHeight || react_native_1.Dimensions.get('window').height - 60;
        return (React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.TouchableOpacity, { onPress: this.state.enable?this.showOptions : null },
                React.createElement(react_native_1.View, { style: style }, fieldTemplate(__assign({ defaultText: placeholder || DEFAULT_TEXT, selectedItem: this.state.selectedItem }, actions)))),
            React.createElement(react_native_1.Modal, { transparent: true, visible: this.state.modalVisible, onRequestClose: this.hideOptions, animationType: modalAnimationType },
                React.createElement(react_native_1.TouchableWithoutFeedback, { onPress: this.hideOptions },
                    React.createElement(react_native_1.View, { style: [
                            { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },
                            backdropStyle
                        ] },
                        React.createElement(react_native_1.View, { style: [
                                { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
                                style
                            ] },
                            React.createElement(react_native_1.View, { style: [{ backgroundColor: 'white', maxHeight: maxHeight }, modalStyle] },
                                headerTemplate && headerTemplate(actions),
                                React.createElement(react_native_1.ScrollView, null, options.map(function (o, index) { return (React.createElement(react_native_1.TouchableOpacity, { onPress: function () {
                                        _this.selectOption(o);
                                    }, key: index }, optionTemplate(__assign({ item: o, getLabel: _this.props.getLabel || _this.getLabel }, actions)))); })),
                                footerTemplate && footerTemplate(actions))))))));
    };
    CustomPicker.prototype.componentDidMount = function () {
        var value = this.props.value;
        if (value) {
            this.selectOption(value);
        }
    };
    CustomPicker.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.value !== this.props.value) {
            this.selectOption(nextProps.value);
        }
    };
    /**
     * Default getLabel function. A get label from item function.
     * @param item Item value to translate.
     */
    CustomPicker.prototype.getLabel = function (item) {
        return item ? item.toString() : null;
    };
    /**
     * Show modal picker to display options.
     */
    CustomPicker.prototype.showOptions = function () {
        if (this.state.modalVisible) {
            return;
        }
        this.setState({ modalVisible: true }, this.props.onFocus);
    };
    /**
     * Hide options by hiding modal picker.
     */
    CustomPicker.prototype.hideOptions = function () {
        if (!this.state.modalVisible) {
            return;
        }
        this.setState({ modalVisible: false }, this.props.onBlur);
    };
    /**
     * Select an option.
     * @param selectedItem Item/option to select.
     */
    CustomPicker.prototype.selectOption = function (selectedItem) {
        var _this = this;
        var onValueChange = this.props.onValueChange;
        this.setState({ selectedItem: selectedItem }, function () {
            _this.hideOptions();
            if (onValueChange) {
                onValueChange(selectedItem);
            }
        });
    };
    /**
     * Clear selected value.
     */
    CustomPicker.prototype.clear = function () {
        this.selectOption(null);
    };
    return CustomPicker;
}(React.PureComponent));
exports.CustomPicker = CustomPicker;
//# sourceMappingURL=index.js.map
