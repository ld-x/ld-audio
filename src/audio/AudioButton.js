/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, {Component} from 'react'
import insertDataBlock from './insertDataBlock'

export default class extends Component {
  getSoundCloudInfo (url) {
    var regexp = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
    return url.match(regexp) && url.match(regexp)[2]
  }

  onClick (e) {
    e.preventDefault()
    const src = window.prompt('Enter the Audiocloud URL')
    if (!src) { return }

    let soundcloudUrl = this.getSoundCloudInfo(src)
    console.log(soundcloudUrl)
    if ( soundcloudUrl === undefined || soundcloudUrl === null) { return }

    const data = {src: src, type: 'audio'}
    this.props.onChange(insertDataBlock(this.props.editorState, data))
  }

  render () {
    return (
      <svg fill="currentColor" className='ld-button-audio' onClick={::this.onClick} height="24" viewBox="0 0 24 24" width="24" >
        <path d="M8 5v14l11-7z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    )
  }
}
