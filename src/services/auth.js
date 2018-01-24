import { postJson } from './api'

export const signIn = data => postJson('users/signIn', data)

export const signUp = data => postJson('users/signUp', data)
