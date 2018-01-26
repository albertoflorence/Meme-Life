import { queryParser } from '../util/index'

const makeFetch = ({ baseUrl, headers }) => (method = 'get') => (
  url,
  params
) => {
  let query = ''
  const options = { method }

  if (headers) {
    options.headers = headers
  }
  if (method.toLowerCase() !== 'get' && params) {
    options.body = params
  } else if (params) {
    query = queryParser(params)
  }

  return fetch(baseUrl + url + query, options)
}

const baseUrl = 'http://localhost:8000/'
const jsonHeader = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}
const makeHttpMethodJSON = makeFetch({ baseUrl, headers: jsonHeader })
const makeHttpMethod = makeFetch({ baseUrl })

export const postFormData = makeHttpMethod('POST')
export const get = makeHttpMethodJSON('GET')
export const post = (url, body) =>
  makeHttpMethodJSON('POST')(url, JSON.stringify(body))
export const put = (url, body) =>
  makeHttpMethodJSON('PUT')(url, JSON.stringify(body))
export const patch = (url, body) =>
  makeHttpMethodJSON('PATCH')(url, JSON.stringify(body))

export const toJSON = response => response.json()
