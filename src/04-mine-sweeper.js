/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((el, i, arr1) => (
    el.map((item, k, arr2) => {
      let num = 0;
      if (arr1[i - 1]) {
        num += +!!arr1[i - 1][k - 1] + +!!arr1[i - 1][k] + +!!arr1[i - 1][k + 1];
      }
      num += +!!arr2[k - 1] + +!!arr2[k + 1];
      if (arr1[i + 1]) {
        num += +!!arr1[i + 1][k - 1] + +!!arr1[i + 1][k] + +!!arr1[i + 1][k + 1];
      }
      return num;
    })
  ));
}

module.exports = minesweeper;
