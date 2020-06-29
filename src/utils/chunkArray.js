/**
 * Returns an array with arrays of the given size.
 *
 * @param arr {Array} array to split
 * @param chunkSize {Integer} Size of every group
 */
export default function chunkArray (arr, chunkSize) {
    let index = 0
    const arrayLength = arr.length
    const tempArray = []
  
    for (index = 0; index < arrayLength; index += chunkSize) {
      tempArray.push(arr.slice(index, index + chunkSize))
    }
  
    return tempArray
  }  