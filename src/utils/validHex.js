const validHex = str => {
  if (str) {
    const stripStr = str.replace(/^##|#/, '')
    const regexp = /^[0-9a-fA-F]+$/
    if (regexp.test(stripStr) && stripStr.length <= 6) {
      return `#${stripStr}`
    }
  }
  return null
}

export default validHex
