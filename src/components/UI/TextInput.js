import React, { Component } from 'react'
import { TextField } from 'material-ui'

class TextInput extends Component {
  state = {
    touched: false
  }

  handlerBlur = (...args) => {
    this.setState({ touched: true })
    if (this.props.onBlur) {
      this.props.onBlur(...args)
    }
  }

  render() {
    const { displayError, helperText, ...props } = this.props
    const error = this.state.touched ? displayError : null
    return (
      <TextField
        onBlur={this.handlerBlur}
        error={!!error}
        helperText={error || helperText}
        {...props}
      />
    )
  }
}

export default TextInput
