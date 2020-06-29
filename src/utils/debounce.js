export default function debounce(fn, ms = 0) {
  let timeoutId
  // eslint-disable-next-line func-names
  return function(...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}
