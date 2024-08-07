class Node {
  constructor(data, next = null, previous = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtbeginning(data) {
    let node = new Node(data, this.head, null);

    if (this.head !== null) {
      this.head.previous = node;
    }

    this.head = node;

    if (this.tail === null) {
      this.tail = node;
    }
  }

  insertAtEnd(data) {
    let node = new Node(data, null, this.tail);

    if (this.tail !== null) {
      this.tail.next = node;
    }

    this.tail = node;

    if (this.head === null) {
      this.head = node;
    }
  }
}
