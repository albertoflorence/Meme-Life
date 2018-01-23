import React from 'react'
import Button from 'material-ui/Button'
const style = {
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  width: '100%',
  opacity: 0
}

const FileInput = ({ label, children, accept, inputProps, ...props }) => {
  return (
    <Button {...props}>
      {label || children}
      <input type="file" style={style} accept={accept} {...inputProps} />
    </Button>
  )
}

export default FileInput
