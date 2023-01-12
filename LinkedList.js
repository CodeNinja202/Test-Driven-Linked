class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const node = new Node(data, this.head);
    this.head = node;
    this.length++;
  }

  getByIndex(idx) {
    if (idx < 0) return null;
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      if (!current) return null;
      current = current.next;
    }
    return current;
  }


  insertAtIndex(idx, val) {
    if (idx < 0 || idx > this.length) return;
    if (idx === 0) return this.insertAtHead(val);
    const prev = this.getByIndex(idx - 1);
    const newNode = new Node(val, prev.next);
    prev.next = newNode;
    this.length++;
  }

  removeHead() {
    if (!this.head) return;
    this.head = this.head.next;
    this.length--;
  }

  removeAtIndex(idx) {
    if (idx < 0 || idx >= this.length) return;
    if (idx === 0) return this.removeHead();
    const prev = this.getByIndex(idx - 1);
    prev.next = prev.next.next;
    this.length--;
  }
}

// DON'T TOUCH BELOW!!!!!!!!!!!

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
