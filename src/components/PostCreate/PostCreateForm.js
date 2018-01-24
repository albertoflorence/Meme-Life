import React from 'react'
import Card from 'material-ui/Card/Card'
import withStyles from 'material-ui/styles/withStyles'
import FileUpload from 'material-ui-icons/FileUpload'
import { Grid, MenuItem, Button } from 'material-ui'
import { map } from '../../util/index'
import TextInput from '../UI/TextInput'
import FileInput from '../UI/FileInput'
import Content from '../Content'

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
    margin: theme.spacing.unit
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing.unit * 3
  },
  preview: {
    width: '100%',
    height: '300px',
    padding: '20px'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  uploadButton: {
    marginTop: theme.spacing.unit * 2,
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.4)',
    color: theme.palette.primary.main
  },
  submitButton: {
    marginTop: theme.spacing.unit * 2
  }
})

const PostCreate = ({
  classes,
  validate,
  inputs,
  inputContent,
  onContentChange,
  onTextChange,
  onSubmit
}) => {
  return (
    <Card className={classes.root}>
      <form onSubmit={onSubmit}>
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
                onChange={onTextChange(name)}
                displayError={validate.byField(name, value)}
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
          {inputs.category.value &&
            renderContentInput(
              inputContent,
              classes,
              onContentChange,
              validate
            )}

          {inputContent.value && (
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.preview}
            >
              <Content
                url={inputContent.preview}
                category={inputs.category.value}
              />
            </Grid>
          )}
          <div style={{ textAlign: 'center' }}>
            <Button
              type="submit"
              color="primary"
              raised
              className={classes.submitButton}
              disabled={validate.all({
                ...inputs,
                content: { ...inputContent }
              })}
            >
              Create
            </Button>
          </div>
        </Grid>
      </form>
    </Card>
  )
}

const renderContentInput = (
  { type, accept, label, value },
  classes,
  onContentChange,
  validate
) => {
  if (type === 'file') {
    return (
      <FileInput
        className={classes.uploadButton}
        type={type}
        raised
        onChange={onContentChange}
        accept={accept}
      >
        {label}
        <FileUpload className={classes.rightIcon} />
      </FileInput>
    )
  }
  return (
    <TextInput
      className={classes.textField}
      onChange={onContentChange}
      displayError={validate.byField('content', value)}
      type={type}
      label={label}
    />
  )
}

export default withStyles(style)(PostCreate)
