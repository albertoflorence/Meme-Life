import { PAGINATION } from '../constants'

const pagination = (state = 0, action) => {
  switch (action.type) {
    case PAGINATION:
      return action.pages
    default:
      return state
  }
}

export default pagination

export const getPages = state => state
