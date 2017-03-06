/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

import React, {Component} from 'react'
import Player from './Player'
import styled from 'styled-components'

export default class extends Component {
  render () {
    return (
      <BlockWrapper className='ld-block-wrapper'>
        <Block className='ld-block'>
          <BlockActionsWrapper className='ld-block-actions-wrapper'>
            <BlockActions className='ld-block-actions'>
              <BlockAction className='ld-block-action' onClick={::this.props.container.remove} key='delete'>
                <svg width='22' height='22' viewBox='0 0 24 24' className='ld-button-close'>
                  <g fill='currentColor'>
                    <path d='M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' />
                    <path d='M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' />
                  </g>
                </svg>
              </BlockAction>
            </BlockActions>
          </BlockActionsWrapper>
          <AudioBlockWrapper className='ld-audio-block-wrapper'>
            <Player
              url={this.props.data.src} />
          </AudioBlockWrapper>
        </Block>
      </BlockWrapper>


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

const BlockWrapper = styled.div`
  padding: 2px;
  margin: -2px;
  position: relative;
  border: solid 1px #ddd;
`

const Block = styled.div`
  user-select: none;
`

const BlockActionsWrapper = styled.div`
  padding-top: 0.5rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
`

const BlockActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const BlockAction = styled.div`
  flex: 1;
  cursor: pointer;
  color: #ddd;
  &:hover {
    color: #333;
  }
`
