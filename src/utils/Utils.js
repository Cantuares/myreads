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

export const shelfOptions = [
  { title: `Currently Reading` , value: `currentlyReading`},
  { title: `Want to Read` , value: `wantToRead`},
  { title: `Read` , value: `read`},
  { title: `None` , value: `none`}]
