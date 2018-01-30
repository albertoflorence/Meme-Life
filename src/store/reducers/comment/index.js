import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import list, * as fromList from './list'

const comments = combineReducers({
  byId,
  list
})

export default comments

export const getComments = (state, filter = 'all') => {
  const ids = fromList.getIds(state.list)
  return ids.map(id => fromById.getPost(state.byId, id))
}

export const getComment = ({ byId }, id) => {
  return fromById.getPost(byId, id)
}
