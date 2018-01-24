import React from 'react'
import Card from 'material-ui/Card/Card'
import withStyles from 'material-ui/styles/withStyles'
import FileUpload from 'material-ui-icons/FileUpload'
import { Grid, MenuItem, Button } from 'material-ui'
import { map } from '../../util/index'
import TextInput from '../UI/TextInput'
import FileInput from '../UI/FileInput'

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
    maxWidth: '100%',
    height: '200px',
    padding: '20px'
  },
  previewContent: { maxWidth: '100%', maxHeight: '100%' },

  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  uploadButton: {
    marginTop: theme.spacing.unit * 2,
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.4)',
    color: theme.palette.primary.main
  },
  submitButton: {}
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

          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.preview}
          >
            {renderPreview(inputContent, classes)}
          </Grid>
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

const renderPreview = ({ preview }, classes) => {
  if (!preview) return
  const type = preview.slice(0, 4)
  if (type === 'blob')
    return <img className={classes.previewContent} src={preview} alt="test" />
  else if (type === 'http') {
    return (
      <iframe
        title={'Video Preview'}
        className={classes.previewContent}
        src={preview.replace('watch?v=', 'embed/')}
      />
    )
  }
}

export default withStyles(style)(PostCreate)
