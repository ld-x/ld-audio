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
      <svg width='24' height='24' onClick={::this.onClick} className='ld-button-audio'>
        <path fill='currentColor' d='M10 9v6l5-3-5-3zm8.222-3H5.778C4.8 6 4 6.6 4 7.333v9.334C4 17.4 4.8 18 5.778 18h12.444C19.2 18 20 17.4 20 16.667V7.333C20 6.6 19.2 6 18.222 6z' fillRule='evenodd' />
      </svg>
    )
  }
}
