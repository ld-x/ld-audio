import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import insertDataBlock from './insertDataBlock'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = { url: '' }
  }

  getSoundCloudInfo (url) {
    var regexp = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
    return url.match(regexp) && url.match(regexp)[2]
  }

  componentDidMount () {
    ReactDOM.findDOMNode(this.refs.textInput).focus()
  }

  onUrlChange (event) {
    event.stopPropagation()
    const url = event.target.value
    this.setState({url})
  }

  setUrl (event) {
    this.submitUrl(this.state.url)
    this.props.closeModal()
  }

  submitUrl (src) {
    let audioSrc = this.getSoundCloudInfo(src)
    if (audioSrc === undefined || audioSrc === null) { return }

    const data = {src: src, type: 'audio'}
    this.props.onChange(insertDataBlock(this.props.editorState, data))
  }


  onSubmit (event) {
    event.preventDefault()
    this.setUrl()
  }

  onCancel (event) {
    event.preventDefault()
    this.props.closeModal()
  }

  onKeyDown (event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.setUrl()
    } else if (event.key === 'Escape') {
      event.preventDefault()
      this.props.closeModal()
    }
  }

  render () {
    return (
      <div style={{whiteSpace: 'nowrap'}}>
        <AudioModalInput
          className='ld-audio-modal-input'
          ref='textInput'
          type='text'
          onChange={::this.onUrlChange}
          value={this.state.url}
          onKeyDown={::this.onKeyDown}
          placeholder='Type the soundcloud url and press enter' />

        <AudioModalButtonWrapper className='ld-audio-modal-button-wrapper'>
          <AudioModalButton
            className='ld-audio-modal-submit-button'
            onClick={::this.onSubmit}
            type='button'
          >
            <svg fill='currentColor' width='18' height='18' viewBox='0 0 24 24'>
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
            </svg>
          </AudioModalButton>

          <AudioModalButton
            className='ld-audio-modal-close-button'
            onClick={::this.onCancel}
            type='button'
          >
            <svg width='18' height='18' viewBox='0 0 24 24' className='ld-button-close'>
              <g fill='currentColor' fillRule='evenodd'>
                <path d='M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' />
                <path d='M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' />
              </g>
            </svg>
          </AudioModalButton>
        </AudioModalButtonWrapper>
      </div>
    )
  }
}

const AudioModalInput = styled.input`
  background-color: transparent;
  border: none;
  color: inherit;
  font-size: 15px;
  height: auto;
  line-height: 1.2;
  margin: 0;
  padding: 16px;
  width: 300px;

  &:focus {
    outline: none;
  }
`

const AudioModalButton = styled.button`
  padding: 0;
  cursor: pointer;
  border: 0;
  height: 46px;
  width: 46px;
  background: transparent;
  padding-right: 16px;
  color: #ccc;

  &:hover {
    color: #9d1d20;
  }
`

const AudioModalButtonWrapper = styled.span`
  display: inline-block;
  vertical-align: bottom;
`
