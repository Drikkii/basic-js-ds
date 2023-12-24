const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ElementQ {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.Perviy = null;
    this.Posled = null;
    this.length = 0;
  }

  getUnderlyingList() {
    if (this.length === 0) {
      return null;
    } else {
      return this.Perviy;
    }
  }

  enqueue(value) {
    const newElem = new ElementQ(value);

    if (this.length === 0) {
      this.Perviy = newElem;
      this.Posled = newElem;
    } else {
      this.Posled.next = newElem;
      this.Posled = newElem;
    }

    this.length += 1;
  }

  dequeue() {
    if (!this.Perviy) {
      return null;
    } else {
      const deletedElem = this.Perviy;
      this.Perviy = this.Perviy.next;
      this.length -= 1;

      return deletedElem.value;
    }
  }
}

module.exports = {
  Queue,
};
