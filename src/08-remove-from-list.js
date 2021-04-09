/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  function ListNode(x) {
    this.value = x;
    this.next = null;
  }

  function deepCopy(obj) {
    const node = new ListNode(obj.value);
    node.next = obj.next !== null ? deepCopy(obj.next) : null;
    return node;
  }

  function deepCheck(list) {
    let obj = deepCopy(list);
    obj = obj.value === k ? obj.next : obj;
    obj.next = obj.next !== null ? deepCheck(obj.next) : obj.next;
    return obj;
  }

  return deepCheck(deepCopy(l), k);
}

module.exports = removeKFromList;
