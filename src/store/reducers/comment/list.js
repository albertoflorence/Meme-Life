import { FETCH_COMMENTS, ADD_POST_COMMENT } from '../../constants'

const list = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.result
    case ADD_POST_COMMENT:
      return [action.comment._id, ...state]
    default:
      return state
  }
}

export default list

export const getIds = state => state
