'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _insertDataBlock = require('./insertDataBlock');

var _insertDataBlock2 = _interopRequireDefault(_insertDataBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, Globo.com (https://github.com/globocom)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'getSoundCloudInfo',
    value: function getSoundCloudInfo(url) {
      var regexp = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
      return url.match(regexp) && url.match(regexp)[2];
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      e.preventDefault();
      var src = window.prompt('Enter the Audiocloud URL');
      if (!src) {
        return;
      }

      var soundcloudUrl = this.getSoundCloudInfo(src);
      console.log(soundcloudUrl);
      if (soundcloudUrl === undefined || soundcloudUrl === null) {
        return;
      }

      var data = { src: src, type: 'audio' };
      this.props.onChange((0, _insertDataBlock2.default)(this.props.editorState, data));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { fill: 'currentColor', className: 'ld-button-audio', onClick: this.onClick.bind(this), height: '24', viewBox: '0 0 24 24', width: '24' },
        _react2.default.createElement('path', { d: 'M8 5v14l11-7z' }),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;