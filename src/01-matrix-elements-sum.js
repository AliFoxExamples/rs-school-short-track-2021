/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
  let sum = arr[0].reduce((old, curr) => old + curr);

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i].reduce((old, curr, k) => (arr[i - 1][k] ? old + curr : 0), 0);
  }

  return sum;
}

module.exports = getMatrixElementsSum;
