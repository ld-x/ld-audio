/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, {Component} from 'react'
import Block from '../block/Block'
import CloseIcon from './Close'
import Player from './Player'
import styled from 'styled-components'

export default class extends Component {
  constructor (props) {
    super(props)

    this.actions = [
      {
        key: 'delete',
        icon: CloseIcon,
        action: this.props.container.remove
      }
    ]
  }

  render () {
    return (
      <Block {...this.props} actions={this.actions}>
        <AudioBlockWrapper className='ld-Audio-block-wrapper'>
          <Player
            url={this.props.data.src} />
        </AudioBlockWrapper>
      </Block>
    )
  }
}

const AudioBlockWrapper = styled.div`
  position: relative;
  width: 90%;
  padding-bottom: 2rem;
  margin: 0 auto;
`

const AudioBlock = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
