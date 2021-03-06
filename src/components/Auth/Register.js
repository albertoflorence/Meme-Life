import React, { Component } from 'react'
import withValidation, {
  email,
  password,
  len,
  createValidation
} from '../../HOC/withValidation'
import AuthForm from './AuthForm'

class Register extends Component {
  state = {
    inputs: {
      name: {
        value: '',
        label: 'Name',
        type: 'text'
      },
      email: {
        value: '',
        label: 'Email',
        type: 'text'
      },
      password: {
        value: '',
        label: 'Password',
        type: 'password'
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
        buttonLabel="Sign Up"
      />
    )
  }
}

const rules = {
  validate: createValidation({
    email: [email],
    password: [password],
    name: [len(4, 32)]
  })
}

export default withValidation(rules)(Register)
