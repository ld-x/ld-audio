/*
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'
import 'whatwg-fetch'

class Play extends Component {
  render() {
    return (
      <svg fill='#000000' height='24' viewBox='0 0 24 24' width='24'>
          <path d='M8 5v14l11-7z'/>
          <path d='M0 0h24v24H0z' fill='none'/>
      </svg>
    );
  }
}

class Pause extends Component {
  render() {
    return (
      <svg fill='#000000' height='24' viewBox='0 0 24 24' width='24'>
          <path d='M6 19h4V5H6v14zm8-14v14h4V5h-4z'/>
          <path d='M0 0h24v24H0z' fill='none'/>
      </svg>
    );
  }
}

const config = { client_id: 'c5a171200f3a0a73a523bba14a1e0a29' }

let FormatTime = function(totalSeconds) {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  let seconds = Math.floor(totalSeconds - hours * 3600 - minutes * 60);
  let result = hours < 1 ? '' : hours + ':';
  result += minutes;
  result += ':' + (seconds < 10 ? '0' + seconds : seconds);
  return result;
}

export default class extends Component {
  static get propTypes () {
    return {
      url: PropTypes.string
    }
  }

  constructor (props) {
    let resolveUrl = `http://api.soundcloud.com/resolve.json?url=${props.url}/tracks&client_id=${config.client_id}`
    fetch(resolveUrl, {
    	method: 'get'
    }).then((response) => {
      return response.json()
    }).then((track) => {
      this.initPlayer(track.id, track.title)
    })

    super(props)
    this.state = {
      loading: true,
      playing: false,
      audioPlayer: null,
      percent_remains: 100,
      percent_progress_remains: 100,
      duration: '0:00',
      current_time: '0:00',
      client_id: config.client_id
    }
  }

  initPlayer (audio_id, title) {
    this.setState({audio_id, title}, () => {
      this.setState({loading: false}, () => {
        this.setState({ audioPlayer: ReactDOM.findDOMNode(this.refs.audio) }, () => {
          this.state.audioPlayer.ontimeupdate = () => { this.timeUpdated() };
          this.state.audioPlayer.onprogress = () => { this.progressUpdated() };
        })
      })
    })
  }

  togglePlay () {
    const { playing, audioPlayer } = this.state;
    this.setState({ playing: !playing, showAudioPlayer: true }, () => {
      if (audioPlayer.paused) {
        audioPlayer.play()
      }
      if (!this.state.playing) {
        if (!audioPlayer.buffered.length) return;
        audioPlayer.pause()
      }
    })
  }

  timeUpdated () {
    const { playing, audioPlayer } = this.state;
    if(audioPlayer == undefined){ return }
    let percent = (audioPlayer.currentTime / audioPlayer.duration) * 100
    this.setState({ current_time: FormatTime(audioPlayer.currentTime) })
    this.setState({ duration: FormatTime(audioPlayer.duration) })
    this.setState({ percent_remains: 100 - percent})
  }

  progressUpdated () {
    const { playing, audioPlayer } = this.state;
    if (audioPlayer == undefined) return;
    if (!audioPlayer.buffered.length) return;
    var bufferedEnd = audioPlayer.buffered.end(audioPlayer.buffered.length - 1);
    if (audioPlayer.duration > 0) {
      let percent_remains = (bufferedEnd / audioPlayer.duration) * 100
      this.setState({ percent_progress_remains: 100 - percent_remains})
    }
  }

  positionChange (e) {
    const { audioPlayer, playing } = this.state
    if (!playing) { return }
    let elem = ReactDOM.findDOMNode(this.refs.progress)
    let elemRect = elem.getClientRects()
    let elemLeft = elemRect[0].left
    let elemWidth = elemRect[0].width
    let clickPositionLeft = e.pageX
    let percent_remains =  100 - ( (clickPositionLeft - elemLeft) / elemWidth * 100 )
    let newTime = audioPlayer.duration - ( audioPlayer.duration * (percent_remains / 100) )
    audioPlayer.currentTime = Math.floor(newTime)
    setTimeout( () => {
      if(audioPlayer.paused) { this.togglePlay() }
    }, 1000)
  }

  renderPlayerIcons() {
    const { playing } = this.state

    if (playing) {
      return (
        <PlayerControlIconPause className='player__control__icons--pause'>
          <PlayerControlIcon className='player__control__icon' onClick={::this.togglePlay}>
            <Pause  />
          </PlayerControlIcon>
        </PlayerControlIconPause>
      );
    }

    return (
      <PlayerControlIconPlay className='player__control__icons--play'>
        <PlayerControlIcon className='player__control__icon' onClick={::this.togglePlay}>
          <Play />
        </PlayerControlIcon>
      </PlayerControlIconPlay>
    )
  }

  render () {
    const {
      playing, audio_id, audioPlayer, percent_remains, title,
      duration, current_time, client_id, loading, percent_progress_remains
    } = this.state

    if (loading) {
      return (
        <Player className='playere'>
          <Loader height='36' viewBox='0 0 36 36' width='36' className='ld-player-loader'>
            <path d='M28.4,6.6C25.7,4.3,22.3,3,18.5,3C9.9,3,3,9.9,3,18.5S9.9,34,18.5,34c4.3,0,8.1-1.7,11-4.5l-1.8-1.8 c-2.3,2.3-5.6,3.8-9.1,3.8c-7.1,0-13-5.8-13-13s5.8-13,13-13c3.1,0,5.9,1.1,8.1,2.9l-4.5,4.5h8H33H33V2L28.4,6.6z' fill='currentColor' />
          </Loader>
        </Player>
      )
    }

    if (audio_id !== undefined) {
      let streamUrl = `https://api.soundcloud.com/tracks/${audio_id}/stream?client_id=${client_id}`
      let time_remains = { transform: `translateX(-${percent_remains.toString()}%)` }
      let progress_remains = { transform: `translateX(-${percent_progress_remains.toString()}%)` }

      return (
      	<Player className='player'>
          <audio id='audio' preload='none' ref='audio' src={streamUrl} />
          <PlayerControl className='player__control'>
            { this.renderPlayerIcons() }
          </PlayerControl>

          <PlayerDisplay className='player__display' onClick={::this.positionChange}>
            <div><h4>{title}</h4></div>
            <PlayerProgress className='player__progress'>
              <PlayerProgressTime className='player__progress__time'>{current_time}</PlayerProgressTime>
              <PlayerProgressBar className='player__progress__bar'>
                <PlayerProgressBarWrapper ref='progress'>
                  <Progress
                    className='player__progress__bar--progress'
                    style={progress_remains} />
                  <PlayerProgressBarPercent
                    className='player__progress__bar--percent'
                    style={time_remains} />
                </PlayerProgressBarWrapper>
              </PlayerProgressBar>
              <PlayerProgressTime className='player__progress__time'>{duration}</PlayerProgressTime>
            </PlayerProgress>
          </PlayerDisplay>
        </Player>
      )
    }

  }
}


const Player = styled.div`
  transition: color 125ms ease-in-out;
  background: white;
  position: relative;
  padding: 0.5rem;
  z-index: 5;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`

const PlayerControl = styled.div`
  margin-right: 1.2rem;
  min-width: 6rem;
  transition: fill 125ms ease-in-out;
`

const PlayerControlIcon = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-right: 0.4rem;
`

const PlayerControlIconPlay = styled.div`
`
const PlayerControlIconPause = styled.div`
  fill: #f50;
`

const PlayerDisplay = styled.div`
  flex: 1 1 100%;
  margin-bottom: 0;
`

const PlayerProgress = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0;
`

const PlayerProgressTime = styled.span`
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  line-height: 1rem;
  color: #444;
  flex: 0 1 auto;
  vertical-align: middle;
`

const PlayerProgressBar = styled.span`
  flex: 1 1 auto;
  width: 100%;
  display: block;
  padding: 0.5rem 0;
  margin: 0 0.5rem;
`

const PlayerProgressBarWrapper = styled.span`
  cursor: pointer;
  display: block;
  position: relative;
  width: 100%;
  height: .4rem;
  background: #eee;
  border-radius: 2px;
  overflow: hidden;
  transform: translateZ(0);
`
const Progress = styled.span`
  background: pink;
`
const PlayerProgressBarPercent = styled.span`
  transition: transform .2s;
  position: absolute;
  width: 100%;
  height: 4px;
  background: #f50;
  display: block;
`

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Loader = styled.svg`
  animation: ${rotate360} 0.8s linear infinite;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 40px;
  height: 40px;
`
