'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResizableTextArea = function (_React$Component) {
  _inherits(ResizableTextArea, _React$Component);

  function ResizableTextArea() {
    _classCallCheck(this, ResizableTextArea);

    var _this = _possibleConstructorReturn(this, (ResizableTextArea.__proto__ || Object.getPrototypeOf(ResizableTextArea)).call(this));

    _this.onInput = function () {
      var _this$props;

      _this.setState({ scrollHeight: 0 }, function () {
        _this.setState({ scrollHeight: _this.textarea.scrollHeight });
      });

      (_this$props = _this.props).onInput.apply(_this$props, arguments);
    };

    _this.setRef = function (ref) {
      _this.textarea = ref;

      _this.props.ref(_this.textarea);
    };

    _this.state = {};
    return _this;
  }

  _createClass(ResizableTextArea, [{
    key: 'render',
    value: function render() {
      var style = _extends({}, this.props.style, {
        lineHeight: '1.5em',
        height: this.state.scrollHeight,
        overflowY: 'hidden'
      });

      return _react2.default.createElement('textarea', _extends({}, this.props, {
        style: style,
        ref: this.setRef,
        onInput: this.onInput
      }));
    }
  }]);

  return ResizableTextArea;
}(_react2.default.Component);

ResizableTextArea.defaultProps = {
  ref: Function.prototype,
  onInput: Function.prototype
};

ResizableTextArea.propTypes = {
  ref: _propTypes2.default.func,
  onInput: _propTypes2.default.func
};

exports.default = ResizableTextArea;