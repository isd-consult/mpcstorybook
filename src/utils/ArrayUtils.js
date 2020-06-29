export default class ArrayUtils {
  /**
   * @param {array} array, ex: gender
   * @param {array} filters, ex: [["a", "b"], ["c", "d"]]
   * @return {string}
   */
  static convertFilteredArray(array, filters = null) {
    if (!filters || filters.length < 1) return []
    if (!array) return null

    const result = []
    array.forEach(item => {
      const newitem = {}
      filters.forEach(filter => {
        newitem[filter[1]] = item[filter[0]]
      })
      result.push(newitem)
    })
    return result
  }

  /**
   * @param {array} array, ex: gender
   * @param {string} attribute
   * @return {string}
   */
  static extractedArray(array = null, attr = null) {
    if (!attr || !array) return []
    const result = []
    array.forEach(item => {
      result.push(item[attr])
    })
    return result
  }

  static getMaxValue(array) {
    if (!array || array.length === 0) return null
    let result = array[0]
    array.forEach(item => {
      if (result < item) result = item
    })
    return result
  }

  static convertToNumbers(array) {
    if (!array) return []
    const result = []
    array.forEach(item => {
      result.push(Number(item))
    })
    return result
  }

  static getMaxDate(array) {
    if (!array || array.length === 0) return null
    let result = array[0]
    let maxDate = new Date(array[0].dtd.date_to)
    array.forEach(item => {
      const date = new Date(item.dtd.date_to)
      if (maxDate < date) {
        result = item
        maxDate = date
      }
    })
    return result
  }

  static groupBy(list, keyGetter) {
    const map = new Map()
    list.forEach(item => {
      const key = keyGetter(item)
      const collection = map.get(key)
      if (!collection) {
        map.set(key, [item])
      } else {
        collection.push(item)
      }
    })
    return map
  }

  static arraysEqual(a1, a2) {
    return JSON.stringify(a1) === JSON.stringify(a2)
  }
}
