/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numArr = `${n}`.split('');
  function finder(arr, i = 0) {
    if (i === arr.length) {
      return 0;
    }
    const arr2 = arr.filter((el, k) => k !== i);
    return Math.max(+arr2.join(''), finder(arr, i + 1));
  }
  return finder(numArr);
}

module.exports = deleteDigit;
