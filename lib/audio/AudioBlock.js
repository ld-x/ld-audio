'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  width: 90%;\n  padding-bottom: 2rem;\n  margin: 0 auto;\n'], ['\n  position: relative;\n  width: 90%;\n  padding-bottom: 2rem;\n  margin: 0 auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 2px;\n  margin: -2px;\n  position: relative;\n  border: solid 1px #ddd;\n'], ['\n  padding: 2px;\n  margin: -2px;\n  position: relative;\n  border: solid 1px #ddd;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  user-select: none;\n'], ['\n  user-select: none;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  padding-top: 0.5rem;\n  padding-right: 1rem;\n  padding-bottom: 0.5rem;\n'], ['\n  padding-top: 0.5rem;\n  padding-right: 1rem;\n  padding-bottom: 0.5rem;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n'], ['\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  flex: 1;\n  cursor: pointer;\n  color: #ddd;\n  &:hover {\n    color: #333;\n  }\n'], ['\n  flex: 1;\n  cursor: pointer;\n  color: #ddd;\n  &:hover {\n    color: #333;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Player = require('./Player');

var _Player2 = _interopRequireDefault(_Player);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
    key: 'render',
    value: function render() {
      var _context;

      return _react2.default.createElement(
        BlockWrapper,
        { className: 'ld-block-wrapper' },
        _react2.default.createElement(
          Block,
          { className: 'ld-block' },
          _react2.default.createElement(
            BlockActionsWrapper,
            { className: 'ld-block-actions-wrapper' },
            _react2.default.createElement(
              BlockActions,
              { className: 'ld-block-actions' },
              _react2.default.createElement(
                BlockAction,
                { className: 'ld-block-action', onClick: (_context = this.props.container).remove.bind(_context), key: 'delete' },
                _react2.default.createElement(
                  'svg',
                  { width: '22', height: '22', viewBox: '0 0 24 24', className: 'ld-button-close' },
                  _react2.default.createElement(
                    'g',
                    { fill: 'currentColor' },
                    _react2.default.createElement('path', { d: 'M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' }),
                    _react2.default.createElement('path', { d: 'M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            AudioBlockWrapper,
            { className: 'ld-audio-block-wrapper' },
            _react2.default.createElement(_Player2.default, {
              url: this.props.data.src })
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;


var AudioBlockWrapper = _styledComponents2.default.div(_templateObject);

var AudioBlock = _styledComponents2.default.iframe(_templateObject2);

var BlockWrapper = _styledComponents2.default.div(_templateObject3);

var Block = _styledComponents2.default.div(_templateObject4);

var BlockActionsWrapper = _styledComponents2.default.div(_templateObject5);

var BlockActions = _styledComponents2.default.div(_templateObject6);

var BlockAction = _styledComponents2.default.div(_templateObject7);