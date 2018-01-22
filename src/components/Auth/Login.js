import React, { Component } from 'react'
import withValidation, {
  email,
  password,
  createValidation
} from '../../HOC/withValidation'
import AuthForm from './AuthForm'

class Login extends Component {
  state = {
    inputs: {
      email: {
        value: '',
        label: 'Email',
        type: 'text'
      },
      password: {
        value: '',
        label: 'Password',
        type: 'password'
      },
      unknow: {
        value: '',
        label: 'xd',
        type: 'text'
      }
    }
  }

  handleInputChange = inputName => event => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [inputName]: {
          ...this.state.inputs[inputName],
          value: event.target.value
        }
      }
    })
  }

  render() {
    const { validate, onSubmit } = this.props
    return (
      <AuthForm
        inputs={this.state.inputs}
        validate={validate}
        onTextChange={this.handleInputChange}
        onSubmit={onSubmit}
        buttonLabel="Sign In"
      />
    )
  }
}

const rules = {
  validate: createValidation({
    email: [email],
    password: [password]
  })
}

export default withValidation(rules)(Login)
