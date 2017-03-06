# ld-audio
Audio plugin for [last-draft](http://lastdraft.vace.nz)

Plays audio in a custom player from soundcloud track urls. Support for last.fm in progres...

[![npm version](https://badge.fury.io/js/ld-audio.svg)](https://badge.fury.io/js/ld-audio)

# Install
```jsx
npm install ld-audio --save
```

# Use
```jsx
import {Editor} from 'last-draft'
import audio from 'ld-audio'
let plugins = [audio]

export default class ExampleEditor extends Component {
  constructor(props) {
    super(props)
    const INITIAL_STATE = editorStateFromHtml('<div></div>')
    this.state = { value: INITIAL_STATE }
  }

  onChange(editorState) {
    this.setState({ value: editorState })
  }

  render() {
    return (
      <Editor
        inline={['bold', 'italic', 'code', 'dropcap']}
        blocks={['h2', 'quote']}
        plugins={plugins}
        editorState={this.state.value}
        onChange={::this.onChange} />
    )
  }
}

```
## Styles

Last Draft plugins use styled-components 💅 for the base styling.

## Custom Styles with CSS

You can also add custom css to override the base styling with the following class names specified below:

```css
.ld-block-wrapper {}
.ld-block {}
.ld-block-actions-wrapper {}
.ld-block-actions {}
.ld-block-action {}
.ld-block-content {}
.ld-block-input-wrapper {}
.ld-block-input {}
.ld-audio-block-wrapper {}
.ld-audio-block {}
.ld-button-audio {}
.ld-audio-block-button {}
.ld-player {}
.ld-player-loader {}
.ld-player-progress-time {}
.ld-player-progress-bar-percent {}
.ld-player-progress-bar-progress {}
.ld-player-progress-bar-wrapper {}
.ld-player-progress-bar {}
.ld-player-progress-time {}
.ld-player-progress {}
.ld-player-display {}
.ld-player-control {}
.ld-player-control-icons-play {}
.ld-player-control-icon {}
.ld-player-control-icons-pause {}
```
