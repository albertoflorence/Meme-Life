import {
  getPosts,
  getPostById,
  createPost,
  createComment,
  likePost
} from '../../../services/posts'

import { API, FETCH_POSTS } from '../../constants'
import { postSchemaList, postSchema } from './schema'
import { normalize } from 'normalizr'

export const fetchPosts = filter => ({
  type: API,
  payload: {
    api: getPosts(filter),
    success: response => ({
      type: FETCH_POSTS,
      ...normalize(response, postSchemaList),
      filter: filter || 'all'
    }),
    label: 'post'
  }
})
