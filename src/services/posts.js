import { get, post } from './api'
import { transformDate } from '../util/index'

export const getPosts = category =>
  get('posts', { category })
    .then(response => response.json())
    .then(transformDate)

export const getPostById = id =>
  get(`posts/${id}`).then(response => response.json())

export const createPost = data => post('posts', data)
