import { get, postFormData, toJSON, post } from './api'
import { transformDate } from '../util/index'

export const getPosts = category =>
  get('posts', { category })
    .then(toJSON)
    .then(transformDate)

export const getPostById = id => get(`posts/${id}`).then(toJSON)

export const createPost = data => postFormData('posts', data).then(toJSON)

export const createComment = data => post('posts/comments', data).then(toJSON)

export const likePost = data => post('posts/like', data).then(toJSON)
