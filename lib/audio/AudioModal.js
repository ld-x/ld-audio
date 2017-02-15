'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  background-color: transparent;\n  border: none;\n  color: inherit;\n  font-size: 15px;\n  height: auto;\n  line-height: 1.2;\n  margin: 0;\n  padding: 16px;\n  width: 300px;\n\n  &:focus {\n    outline: none;\n  }\n'], ['\n  background-color: transparent;\n  border: none;\n  color: inherit;\n  font-size: 15px;\n  height: auto;\n  line-height: 1.2;\n  margin: 0;\n  padding: 16px;\n  width: 300px;\n\n  &:focus {\n    outline: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  padding: 0;\n  cursor: pointer;\n  border: 0;\n  height: 46px;\n  width: 46px;\n  background: transparent;\n  padding-right: 16px;\n  color: #ccc;\n\n  &:hover {\n    color: #9d1d20;\n  }\n'], ['\n  padding: 0;\n  cursor: pointer;\n  border: 0;\n  height: 46px;\n  width: 46px;\n  background: transparent;\n  padding-right: 16px;\n  color: #ccc;\n\n  &:hover {\n    color: #9d1d20;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: inline-block;\n  vertical-align: bottom;\n'], ['\n  display: inline-block;\n  vertical-align: bottom;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _insertDataBlock = require('./insertDataBlock');

var _insertDataBlock2 = _interopRequireDefault(_insertDataBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.state = { url: '' };
    return _this;
  }

  _createClass(_default, [{
    key: 'getSoundCloudInfo',
    value: function getSoundCloudInfo(url) {
      var regexp = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
      return url.match(regexp) && url.match(regexp)[2];
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactDom2.default.findDOMNode(this.refs.textInput).focus();
    }
  }, {
    key: 'onUrlChange',
    value: function onUrlChange(event) {
      event.stopPropagation();
      var url = event.target.value;
      this.setState({ url: url });
    }
  }, {
    key: 'setUrl',
    value: function setUrl(event) {
      this.submitUrl(this.state.url);
      this.props.closeModal();
    }
  }, {
    key: 'submitUrl',
    value: function submitUrl(src) {
      var audioSrc = this.getSoundCloudInfo(src);
      if (audioSrc === undefined || audioSrc === null) {
        return;
      }

      var data = { src: src, type: 'audio' };
      this.props.onChange((0, _insertDataBlock2.default)(this.props.editorState, data));
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(event) {
      event.preventDefault();
      this.setUrl();
    }
  }, {
    key: 'onCancel',
    value: function onCancel(event) {
      event.preventDefault();
      this.props.closeModal();
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.setUrl();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        this.props.closeModal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { whiteSpace: 'nowrap' } },
        _react2.default.createElement(AudioModalInput, {
          className: 'ld-audio-modal-input',
          ref: 'textInput',
          type: 'text',
          onChange: this.onUrlChange.bind(this),
          value: this.state.url,
          onKeyDown: this.onKeyDown.bind(this),
          placeholder: 'Type the soundcloud url and press enter' }),
        _react2.default.createElement(
          AudioModalButtonWrapper,
          { className: 'ld-audio-modal-button-wrapper' },
          _react2.default.createElement(
            AudioModalButton,
            {
              className: 'ld-audio-modal-submit-button',
              onClick: this.onSubmit.bind(this),
              type: 'button'
            },
            _react2.default.createElement(
              'svg',
              { fill: 'currentColor', width: '18', height: '18', viewBox: '0 0 24 24' },
              _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
              _react2.default.createElement('path', { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' })
            )
          ),
          _react2.default.createElement(
            AudioModalButton,
            {
              className: 'ld-audio-modal-close-button',
              onClick: this.onCancel.bind(this),
              type: 'button'
            },
            _react2.default.createElement(
              'svg',
              { width: '18', height: '18', viewBox: '0 0 24 24', className: 'ld-button-close' },
              _react2.default.createElement(
                'g',
                { fill: 'currentColor', fillRule: 'evenodd' },
                _react2.default.createElement('path', { d: 'M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' }),
                _react2.default.createElement('path', { d: 'M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' })
              )
            )
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;


var AudioModalInput = _styledComponents2.default.input(_templateObject);

var AudioModalButton = _styledComponents2.default.button(_templateObject2);

var AudioModalButtonWrapper = _styledComponents2.default.span(_templateObject3);