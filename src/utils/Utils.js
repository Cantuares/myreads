export const debounce = {
  timeout: null,
  delay: 1000,
  search: () => {
    return (self, cb) => {
      self.timeout && clearTimeout(self.timeout);
      self.timeout = setTimeout(self.delayed.bind(null, self, cb), self.delay)
    }
  },
  delayed: (self, cb) => {
    cb.apply(self)
    self.timeout = null
  }
}
