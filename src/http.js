function core (method, url, options) {
  let xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.onload = () => {
    options.success && options.success(xhr.response)
  }
  xhr.onerror = () => {
    options.fail && options.fail(xhr, xhr.status)
  }
  xhr.send(options.data)
}

export default {
  get () {},
  post (url, options) {
    return core('post', url, options)
  },
  put () {},
  delete () {},
  patch () {}
}