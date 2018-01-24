import React, { Component } from 'react'
import withValidation, {
  createValidation,
  len,
  required
} from '../../HOC/withValidation'
import PostCreateForm from './PostCreateForm'

class PostCreate extends Component {
  state = {
    inputs: {
      title: {
        value: '',
        type: 'text',
        label: 'Title'
      },
      category: {
        value: '',
        select: true,
        label: 'Category',
        options: [
          { label: 'Images', value: 'images' },
          { label: 'Gifs', value: 'gifs' },
          { label: 'Videos', value: 'videos' }
        ]
      },
      description: {
        value: '',
        multiline: true,
        rows: 2,
        type: 'text',
        label: 'Description'
      }
    },
    content: {
      preview: '',
      value: null,
      label: '',
      type: '',
      accept: ''
    }
  }

  textChangeHandler = inputName => event => {
    if (inputName === 'category') {
      this.handleCategoryChange(event.target.value)
    }

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

  handleCategoryChange(category) {
    let content
    if (category === 'videos') {
      content = {
        type: 'text',
        label: 'Video Url'
      }
    } else {
      content = {
        type: 'file'
      }
      if (category === 'images') {
        content.accept = '.png,.jpg'
        content.label = 'Image Upload'
      } else {
        content.accept = '.gif'
        content.label = 'Gifs Upload'
      }
    }
    this.setState({
      content: {
        ...this.state.content,
        ...content,
        value: null,
        preview: null
      }
    })
  }

  contentChangeHandler = event => {
    const category = this.state.inputs.category.value
    let content =
      category === 'videos'
        ? {
            value: event.target.value,
            preview: event.target.value
          }
        : {
            value: event.target.files[0],
            preview: event.target.files[0]
              ? URL.createObjectURL(event.target.files[0])
              : ''
          }
    this.setState({
      content: {
        ...this.state.content,
        ...content
      }
    })
  }

  submitHandler = event => {
    event.preventDefault()
    this.props.onSubmit(event, {
      ...this.state.inputs,
      content: this.state.content
    })
  }

  render() {
    const { inputs } = this.state
    const { validate } = this.props
    return (
      <PostCreateForm
        inputs={inputs}
        inputContent={this.state.content}
        onTextChange={this.textChangeHandler}
        onContentChange={this.contentChangeHandler}
        onSubmit={this.submitHandler}
        validate={validate}
      />
    )
  }
}

const rules = {
  validate: createValidation({
    title: [required],
    description: [len(5, 60)],
    category: [required],
    content: [required]
  })
}

export default withValidation(rules)(PostCreate)
