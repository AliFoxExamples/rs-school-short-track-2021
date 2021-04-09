/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  function filler(targetArr, el, n = 1) {
    let amount = n;
    const item = `${el}(${n})`;
    if (!targetArr.includes(el)) {
      targetArr.push(el);
    } else if (targetArr.includes(item)) {
      filler(targetArr, el, ++amount);
    } else {
      targetArr.push(item);
    }
  }
  const arr = [];
  names.forEach((el) => (
    filler(arr, el)
  ));
  return arr;
}

module.exports = renameFiles;
