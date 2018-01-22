export const map = (iterator, callback) => {
  const arr = []
  for (let key in iterator) {
    arr.push(callback(iterator[key], key))
  }
  return arr
}

export const some = (iterator, callback) => {
  const test = false
  for (let key in iterator) {
    if (callback(iterator[key], key)) return true
  }
  return test
}
