import { combineReducers } from 'redux'
import byId, * as fromById from './byId'
import createList, * as fromList from './createList'

const listByFilter = combineReducers({
  all: createList('all'),
  images: createList('images'),
  videos: createList('videos'),
  gifs: createList('gifs')
})

const posts = combineReducers({
  byId,
  listByFilter
})

export default posts

export const getPosts = (state, filter = 'all') => {
  const ids = fromList.getIds(state.listByFilter[filter])
  return ids.map(id => fromById.getPost(state.byId, id))
}

export const getPost = ({ byId }, id) => {
  return fromById.getPost(byId, id)
}
