'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  transition: color 125ms ease-in-out;\n  background: white;\n  position: relative;\n  padding: 0.5rem;\n  z-index: 5;\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n'], ['\n  transition: color 125ms ease-in-out;\n  background: white;\n  position: relative;\n  padding: 0.5rem;\n  z-index: 5;\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-right: 1.2rem;\n  min-width: 6rem;\n  transition: fill 125ms ease-in-out;\n'], ['\n  margin-right: 1.2rem;\n  min-width: 6rem;\n  transition: fill 125ms ease-in-out;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  display: inline-block;\n  margin-right: 0.4rem;\n'], ['\n  cursor: pointer;\n  display: inline-block;\n  margin-right: 0.4rem;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n'], ['\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  fill: #f50;\n'], ['\n  fill: #f50;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  flex: 1 1 100%;\n  margin-bottom: 0;\n'], ['\n  flex: 1 1 100%;\n  margin-bottom: 0;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  margin: 0;\n'], ['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  margin: 0;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  font-size: 1.1rem;\n  letter-spacing: 0.1rem;\n  line-height: 1rem;\n  color: #444;\n  flex: 0 1 auto;\n  vertical-align: middle;\n'], ['\n  font-size: 1.1rem;\n  letter-spacing: 0.1rem;\n  line-height: 1rem;\n  color: #444;\n  flex: 0 1 auto;\n  vertical-align: middle;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  flex: 1 1 auto;\n  width: 100%;\n  display: block;\n  padding: 0.5rem 0;\n  margin: 0 0.5rem;\n'], ['\n  flex: 1 1 auto;\n  width: 100%;\n  display: block;\n  padding: 0.5rem 0;\n  margin: 0 0.5rem;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: .4rem;\n  background: #eee;\n  border-radius: 2px;\n  overflow: hidden;\n  transform: translateZ(0);\n'], ['\n  cursor: pointer;\n  display: block;\n  position: relative;\n  width: 100%;\n  height: .4rem;\n  background: #eee;\n  border-radius: 2px;\n  overflow: hidden;\n  transform: translateZ(0);\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  background: pink;\n'], ['\n  background: pink;\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  transition: transform .2s;\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: #f50;\n  display: block;\n'], ['\n  transition: transform .2s;\n  position: absolute;\n  width: 100%;\n  height: 4px;\n  background: #f50;\n  display: block;\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n'], ['\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n  animation: ', ' 0.8s linear infinite;\n  margin: 0 auto;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  width: 40px;\n  height: 40px;\n'], ['\n  animation: ', ' 0.8s linear infinite;\n  margin: 0 auto;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  width: 40px;\n  height: 40px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

require('whatwg-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Play = function (_Component) {
  _inherits(Play, _Component);

  function Play() {
    _classCallCheck(this, Play);

    return _possibleConstructorReturn(this, (Play.__proto__ || Object.getPrototypeOf(Play)).apply(this, arguments));
  }

  _createClass(Play, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { fill: '#000000', height: '24', viewBox: '0 0 24 24', width: '24' },
        _react2.default.createElement('path', { d: 'M8 5v14l11-7z' }),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      );
    }
  }]);

  return Play;
}(_react.Component);

var Pause = function (_Component2) {
  _inherits(Pause, _Component2);

  function Pause() {
    _classCallCheck(this, Pause);

    return _possibleConstructorReturn(this, (Pause.__proto__ || Object.getPrototypeOf(Pause)).apply(this, arguments));
  }

  _createClass(Pause, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { fill: '#000000', height: '24', viewBox: '0 0 24 24', width: '24' },
        _react2.default.createElement('path', { d: 'M6 19h4V5H6v14zm8-14v14h4V5h-4z' }),
        _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
      );
    }
  }]);

  return Pause;
}(_react.Component);

var config = { client_id: 'c5a171200f3a0a73a523bba14a1e0a29' };

var FormatTime = function FormatTime(totalSeconds) {
  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  var seconds = Math.floor(totalSeconds - hours * 3600 - minutes * 60);
  var result = hours < 1 ? '' : hours + ':';
  result += minutes;
  result += ':' + (seconds < 10 ? '0' + seconds : seconds);
  return result;
};

var _default = function (_Component3) {
  _inherits(_default, _Component3);

  _createClass(_default, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        url: _react.PropTypes.string
      };
    }
  }]);

  function _default(props) {
    _classCallCheck(this, _default);

    var resolveUrl = 'http://api.soundcloud.com/resolve.json?url=' + props.url + '/tracks&client_id=' + config.client_id;
    fetch(resolveUrl, {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (track) {
      _this3.initPlayer(track.id, track.title);
    });

    var _this3 = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this3.state = {
      loading: true,
      playing: false,
      audioPlayer: null,
      percent_remains: 100,
      percent_progress_remains: 100,
      duration: '0:00',
      current_time: '0:00',
      client_id: config.client_id
    };
    return _this3;
  }

  _createClass(_default, [{
    key: 'initPlayer',
    value: function initPlayer(audio_id, title) {
      var _this4 = this;

      this.setState({ audio_id: audio_id, title: title }, function () {
        _this4.setState({ loading: false }, function () {
          _this4.setState({ audioPlayer: _reactDom2.default.findDOMNode(_this4.refs.audio) }, function () {
            _this4.state.audioPlayer.ontimeupdate = function () {
              _this4.timeUpdated();
            };
            _this4.state.audioPlayer.onprogress = function () {
              _this4.progressUpdated();
            };
          });
        });
      });
    }
  }, {
    key: 'togglePlay',
    value: function togglePlay() {
      var _this5 = this;

      var _state = this.state,
          playing = _state.playing,
          audioPlayer = _state.audioPlayer;

      this.setState({ playing: !playing, showAudioPlayer: true }, function () {
        if (audioPlayer.paused) {
          audioPlayer.play();
        }
        if (!_this5.state.playing) {
          if (!audioPlayer.buffered.length) return;
          audioPlayer.pause();
        }
      });
    }
  }, {
    key: 'timeUpdated',
    value: function timeUpdated() {
      var _state2 = this.state,
          playing = _state2.playing,
          audioPlayer = _state2.audioPlayer;

      if (audioPlayer == undefined) {
        return;
      }
      var percent = audioPlayer.currentTime / audioPlayer.duration * 100;
      this.setState({ current_time: FormatTime(audioPlayer.currentTime) });
      this.setState({ duration: FormatTime(audioPlayer.duration) });
      this.setState({ percent_remains: 100 - percent });
    }
  }, {
    key: 'progressUpdated',
    value: function progressUpdated() {
      var _state3 = this.state,
          playing = _state3.playing,
          audioPlayer = _state3.audioPlayer;

      if (audioPlayer == undefined) return;
      if (!audioPlayer.buffered.length) return;
      var bufferedEnd = audioPlayer.buffered.end(audioPlayer.buffered.length - 1);
      if (audioPlayer.duration > 0) {
        var percent_remains = bufferedEnd / audioPlayer.duration * 100;
        this.setState({ percent_progress_remains: 100 - percent_remains });
      }
    }
  }, {
    key: 'positionChange',
    value: function positionChange(e) {
      var _this6 = this;

      var _state4 = this.state,
          audioPlayer = _state4.audioPlayer,
          playing = _state4.playing;

      if (!playing) {
        return;
      }
      var elem = _reactDom2.default.findDOMNode(this.refs.progress);
      var elemRect = elem.getClientRects();
      var elemLeft = elemRect[0].left;
      var elemWidth = elemRect[0].width;
      var clickPositionLeft = e.pageX;
      var percent_remains = 100 - (clickPositionLeft - elemLeft) / elemWidth * 100;
      var newTime = audioPlayer.duration - audioPlayer.duration * (percent_remains / 100);
      audioPlayer.currentTime = Math.floor(newTime);
      setTimeout(function () {
        if (audioPlayer.paused) {
          _this6.togglePlay();
        }
      }, 1000);
    }
  }, {
    key: 'renderPlayerIcons',
    value: function renderPlayerIcons() {
      var playing = this.state.playing;


      if (playing) {
        return _react2.default.createElement(
          PlayerControlIconPause,
          { className: 'ld-player-control-icons-pause' },
          _react2.default.createElement(
            PlayerControlIcon,
            { className: 'ld-player-control-icon', onClick: this.togglePlay.bind(this) },
            _react2.default.createElement(Pause, null)
          )
        );
      }

      return _react2.default.createElement(
        PlayerControlIconPlay,
        { className: 'ld-player-control-icons-play' },
        _react2.default.createElement(
          PlayerControlIcon,
          { className: 'ld-player-control-icon', onClick: this.togglePlay.bind(this) },
          _react2.default.createElement(Play, null)
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _state5 = this.state,
          playing = _state5.playing,
          audio_id = _state5.audio_id,
          audioPlayer = _state5.audioPlayer,
          percent_remains = _state5.percent_remains,
          title = _state5.title,
          duration = _state5.duration,
          current_time = _state5.current_time,
          client_id = _state5.client_id,
          loading = _state5.loading,
          percent_progress_remains = _state5.percent_progress_remains;


      if (loading) {
        return _react2.default.createElement(
          Player,
          { className: 'ld-player' },
          _react2.default.createElement(
            Loader,
            { height: '36', viewBox: '0 0 36 36', width: '36', className: 'ld-player-loader' },
            _react2.default.createElement('path', { d: 'M28.4,6.6C25.7,4.3,22.3,3,18.5,3C9.9,3,3,9.9,3,18.5S9.9,34,18.5,34c4.3,0,8.1-1.7,11-4.5l-1.8-1.8 c-2.3,2.3-5.6,3.8-9.1,3.8c-7.1,0-13-5.8-13-13s5.8-13,13-13c3.1,0,5.9,1.1,8.1,2.9l-4.5,4.5h8H33H33V2L28.4,6.6z', fill: 'currentColor' })
          )
        );
      }

      if (audio_id !== undefined) {
        var streamUrl = 'https://api.soundcloud.com/tracks/' + audio_id + '/stream?client_id=' + client_id;
        var time_remains = { transform: 'translateX(-' + percent_remains.toString() + '%)' };
        var progress_remains = { transform: 'translateX(-' + percent_progress_remains.toString() + '%)' };

        return _react2.default.createElement(
          Player,
          { className: 'player' },
          _react2.default.createElement('audio', { id: 'audio', preload: 'none', ref: 'audio', src: streamUrl }),
          _react2.default.createElement(
            PlayerControl,
            { className: 'ld-player-control' },
            this.renderPlayerIcons()
          ),
          _react2.default.createElement(
            PlayerDisplay,
            { className: 'ld-player-display', onClick: this.positionChange.bind(this) },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h4',
                null,
                title
              )
            ),
            _react2.default.createElement(
              PlayerProgress,
              { className: 'ld-player-progress' },
              _react2.default.createElement(
                PlayerProgressTime,
                { className: 'ld-player-progress-time' },
                current_time
              ),
              _react2.default.createElement(
                PlayerProgressBar,
                { className: 'ld-player-progress-bar' },
                _react2.default.createElement(
                  PlayerProgressBarWrapper,
                  { ref: 'progress', className: 'ld-player-progress-bar-wrapper' },
                  _react2.default.createElement(Progress, {
                    className: 'ld-player-progress-bar-progress',
                    style: progress_remains }),
                  _react2.default.createElement(PlayerProgressBarPercent, {
                    className: 'ld-player-progress-bar-percent',
                    style: time_remains })
                )
              ),
              _react2.default.createElement(
                PlayerProgressTime,
                { className: 'ld-player-progress-time' },
                duration
              )
            )
          )
        );
      }
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;


var Player = _styledComponents2.default.div(_templateObject);

var PlayerControl = _styledComponents2.default.div(_templateObject2);

var PlayerControlIcon = _styledComponents2.default.div(_templateObject3);

var PlayerControlIconPlay = _styledComponents2.default.div(_templateObject4);
var PlayerControlIconPause = _styledComponents2.default.div(_templateObject5);

var PlayerDisplay = _styledComponents2.default.div(_templateObject6);

var PlayerProgress = _styledComponents2.default.div(_templateObject7);

var PlayerProgressTime = _styledComponents2.default.span(_templateObject8);

var PlayerProgressBar = _styledComponents2.default.span(_templateObject9);

var PlayerProgressBarWrapper = _styledComponents2.default.span(_templateObject10);
var Progress = _styledComponents2.default.span(_templateObject11);
var PlayerProgressBarPercent = _styledComponents2.default.span(_templateObject12);

var rotate360 = (0, _styledComponents.keyframes)(_templateObject13);

var Loader = _styledComponents2.default.svg(_templateObject14, rotate360);