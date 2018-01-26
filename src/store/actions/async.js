import { ASYNC_START, ASYNC_END, ASYNC_ERROR } from '../constants'

export const asyncStart = label => ({
  type: ASYNC_START,
  label
})
export const asyncEnd = label => ({
  type: ASYNC_END,
  label
})
export const asyncError = (error, label) => ({
  type: ASYNC_ERROR,
  label,
  error
})
