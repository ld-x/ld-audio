'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AudioButton = require('./AudioButton');

var _AudioButton2 = _interopRequireDefault(_AudioButton);

var _AudioBlock = require('./AudioBlock');

var _AudioBlock2 = _interopRequireDefault(_AudioBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

exports.default = {
  type: 'audio',
  editable: false,
  button: _AudioButton2.default,
  block: _AudioBlock2.default
};