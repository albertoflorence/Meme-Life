import { post, toJSON } from './api'

export const signIn = data => post('users/signin', data).then(toJSON)

export const signUp = data => post('users/signup', data).then(toJSON)
