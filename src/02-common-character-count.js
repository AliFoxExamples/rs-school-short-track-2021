/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function filler(arr) {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
      obj[arr[i]] = arr[i] in obj ? obj[arr[i]] + 1 : 1;
    }
    return obj;
  }

  const obj1 = filler(s1.split(''));
  const obj2 = filler(s2.split(''));

  return Object.keys(obj1).reduce((old, curr) => (
    curr in obj2 ? old + Math.min(obj1[curr], obj2[curr]) : old
  ), 0);
}

module.exports = getCommonCharacterCount;
