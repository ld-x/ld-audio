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
