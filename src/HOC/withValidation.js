import React from 'react'

export const createValidation = rules => {
  const byField = (field, value) =>
    rules[field] &&
    rules[field].map(rule => rule(value, field)).find(error => error)

  const all = values =>
    Object.keys(values).some(field => {
      let value =
        typeof values[field] === 'object' && values[field].value !== undefined
          ? values[field].value
          : values[field]
      return byField(field, value)
    })

  return {
    byField,
    all
  }
}

const withValidation = validations => Component => props => (
  <Component {...props} {...validations} />
)

export default withValidation

export const email = value =>
  /^[\w\-\.]+@[\w]+(\.\w+){1,2}$/.test(value) // eslint-disable-line no-useless-escape
    ? null
    : 'Please, provide a valid email address'

export const password = value =>
  value.trim().length >= 6
    ? null
    : 'Please, provide a password with at least 6 length long'

export const required = (value, name) => {
  if (typeof value === 'string' && value.trim().length > 0) return null
  if (!value) return `${name} is required`

  return null
}

export const len = (min, max) => (value, name) => {
  if (value.trim().length < min) return `the ${name} is too short`
  if (value.trim().length > max) return `the ${name} is too long`
  return null
}

export const image = (value, name) => /.(png|jpg|gif)$/.test(value)
