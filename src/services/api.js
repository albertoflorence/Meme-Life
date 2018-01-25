import { queryParser } from '../util/index'

const makeFetch = ({ baseUrl, headers }) => (method = 'get') => (
  url,
  params
) => {
  let query = ''

  const options = {
    method
  }
  if (headers) {
    options.headers = headers
  }
  if (method.toLowerCase() !== 'get' && params) {
    options.body = JSON.stringify(params)
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
export const post = makeHttpMethodJSON('POST')
export const put = makeHttpMethodJSON('PUT')

export const toJSON = response => {
  try {
    return response.json()
  } catch (err) {
    console.log('failed to parse', err)
    return null
  }
}
