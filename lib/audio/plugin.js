'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AudioButton = require('./AudioButton');

var _AudioButton2 = _interopRequireDefault(_AudioButton);

var _AudioBlock = require('./AudioBlock');

var _AudioBlock2 = _interopRequireDefault(_AudioBlock);

var _AudioModal = require('./AudioModal');

var _AudioModal2 = _interopRequireDefault(_AudioModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: 'audio',
  editable: false,
  button: _AudioButton2.default,
  block: _AudioBlock2.default,
  modal: _AudioModal2.default
}; /*
    * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
    *
    * License: MIT
    */