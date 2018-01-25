import { get, postFormData, put, toJSON } from './api'
import { transformDate } from '../util/index'

export const getPosts = category =>
  get('posts', { category })
    .then(toJSON)
    .then(transformDate)

export const getPostById = id =>
  get(`posts/${id}`)
    .then(toJSON)
    .then(transformDate)

export const createPost = data => postFormData('posts', data).then(toJSON)

export const createComment = data => put('posts', data)
