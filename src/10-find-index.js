/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  const halfLength = Math.ceil(array.length / 2);

  function reverseIndex(v) {
    for (let i = array.length - 1; i >= halfLength; i--) {
      if (array[i] === v) {
        return i;
      }
    }
    return 0;
  }

  return halfLength >= value ? array.indexOf(value) : reverseIndex(value);
}

module.exports = findIndex;
