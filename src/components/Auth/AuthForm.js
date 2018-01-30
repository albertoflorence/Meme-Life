import React from 'react'
import { withStyles } from 'material-ui/styles'
import { Button, Checkbox } from 'material-ui'
import TextInput from '../UI/TextInput'
import { map } from '../../util/index'
import FormControlLabel from 'material-ui/Form/FormControlLabel'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    maxWidth: '250px',
    padding: theme.spacing.unit * 3 + 'px'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  actions: {
    marginTop: theme.spacing.unit * 3,
    textAlign: 'center'
  }
})

const handleSubmit = (data, callback) => event => {
  callback(event, data)
}

const Form = ({
  classes,
  validate,
  inputs,
  buttonLabel,
  onSubmit,
  onTextChange,
  onCheckBoxChange
}) => (
  <div className={classes.container}>
    <form onSubmit={handleSubmit(inputs, onSubmit)}>
      {map(
        inputs,
        ({ value, label, type }, fieldName) =>
          type === 'checkbox' ? (
            <FormControlLabel
              key={fieldName}
              control={
                <Checkbox
                  checked={value}
                  onChange={onCheckBoxChange(fieldName)}
                  value={fieldName}
                />
              }
              label={label}
            />
          ) : (
            <TextInput
              key={fieldName}
              label={label}
              type={type}
              value={value}
              displayError={validate.byField(fieldName, value)}
              onChange={onTextChange(fieldName)}
              className={classes.textField}
            />
          )
      )}
      <div className={classes.actions}>
        <Button
          raised
          disabled={validate.all(inputs)}
          type="submit"
          color="primary"
        >
          {buttonLabel}
        </Button>
      </div>
    </form>
  </div>
)

export default withStyles(styles)(Form)
