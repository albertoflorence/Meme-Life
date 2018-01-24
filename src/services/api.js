import { queryParser } from '../util/index'

const baseUrl = 'http://localhost:8000/'
export const get = (url, params) => fetch(baseUrl + url + queryParser(params))

export const post = (url, body) =>
  fetch(baseUrl + url, {
    method: 'post',
    body: body
  })

export const postJson = (url, body) =>
  fetch(baseUrl + url, {
    method: 'post',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
