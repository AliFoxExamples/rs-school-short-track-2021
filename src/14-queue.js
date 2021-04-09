// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.lastChain = false;
    this.depth = 0;
  }

  get size() {
    return this.depth;
  }

  enqueue(element) {
    if (!this.queue) {
      this.queue = new ListNode(element);
      this.depth++;
      return;
    }
    if (!this.lastChain) {
      this.lastChain = this.findLastChain(this.queue);
    }
    this.lastChain.next = new ListNode(element);
    this.lastChain = this.lastChain.next;
    this.depth++;
  }

  dequeue() {
    const temp = this.queue.value;
    this.queue = this.queue.next;
    this.depth--;
    return temp;
  }

  findLastChain(obj) {
    return obj.next === null ? obj : this.findLastChain(obj.next);
  }
}

module.exports = Queue;
