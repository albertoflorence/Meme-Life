import React, { Component } from 'react'
import { map } from '../util/index'
import TextInput from './UI/TextInput'
import { Grid, MenuItem, Button } from 'material-ui'
import Card from 'material-ui/Card/Card'
import withStyles from 'material-ui/styles/withStyles'
import FileUpload from 'material-ui-icons/FileUpload'
import FileInput from './UI/FileInput'

const style = theme => ({
  root: {
    flexGlow: 1,
    borderRadius: '10px',
    border: '1px solid rgba(0,0,0,0.3)',
    marginBottom: '50px'
  },
  body: {
    padding: '40px'
  },
  textField: {
    marginBottom: theme.spacing.unit * 2
  },
  title: {
    textAlign: 'center'
  },
  preview: {
    maxWidth: '100%',
    height: '200px',
    marginTop: '40px'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  uploadButton: {
    marginTop: '15px',
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.4)',
    color: theme.palette.primary.main
  },
  submitButton: {}
})

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
      value: '',
      preview: ''
    }
  }

  textChangeHandler = inputName => event => {
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

  contentChangeHandler = category => event => {
    let content
    if (category === 'videos') {
      content = {
        value: event.target.value,
        preview: event.target.value
      }
    } else {
      content = {
        value: event.target.files[0],
        preview:
          event.target.files[0] && URL.createObjectURL(event.target.files[0])
      }
    }
    this.setState({
      content: {
        ...this.state.content,
        ...content
      }
    })
  }
  get image_url() {
    return this.state.content.preview
  }

  renderInputFile() {
    const category = this.state.inputs.category.value
    if (!category) return null
    if (category === 'images') {
      return (
        <FileInput
          className={this.props.classes.uploadButton}
          type="file"
          raised
          onChange={this.contentChangeHandler(category)}
          accept=".png,.jpg"
        >
          Image Upload
          <FileUpload className={this.props.classes.rightIcon} />
        </FileInput>
      )
    }
    if (category === 'gifs') {
      return (
        <FileInput
          className={this.props.classes.uploadButton}
          raised
          type="file"
          onChange={this.contentChangeHandler(category)}
          accept=".gif"
        >
          Gif Upload
          <FileUpload className={this.props.classes.rightIcon} />
        </FileInput>
      )
    }
    if (category === 'videos') {
      return (
        <TextInput
          label={'Video Url'}
          onChange={this.contentChangeHandler(category)}
        />
      )
    }
  }

  handleSubmit = event => {
    event.preventDefault()
  }
  render() {
    const { inputs } = this.state
    const { classes } = this.props
    return (
      <Card className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <Grid container direction="column" className={classes.body}>
            <h3 className={classes.title}>Meme Creation</h3>
            {map(
              inputs,
              (
                { value, type, label, multiline, rows, select, options },
                name
              ) => (
                <TextInput
                  className={classes.textField}
                  onChange={this.textChangeHandler(name)}
                  select={select}
                  key={name}
                  multiline={multiline}
                  rows={rows}
                  value={value}
                  type={type}
                  label={label}
                >
                  {select &&
                    options.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                </TextInput>
              )
            )}
            {this.renderInputFile()}
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.preview}
            >
              {this.image_url && (
                <img
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                  src={this.image_url}
                  alt="test"
                />
              )}
            </Grid>
            <div style={{ textAlign: 'center' }}>
              <Button
                type="submit"
                color="primary"
                raised
                className={classes.submitButton}
              >
                Create
              </Button>
            </div>
          </Grid>
        </form>
      </Card>
    )
  }
}

export default withStyles(style)(PostCreate)
