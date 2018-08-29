export const debounce = (delay, callback) => {
  let timeout
  return () => {
    let that = this, args = arguments,
      delayed = () => {
        callback.apply(that, args);
        timeout = null;
      }
    timeout && clearTimeout(timeout);
    timeout = setTimeout(delayed, delay || 250);
  }
}
