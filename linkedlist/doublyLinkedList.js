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

  insertAfterGivenNode(prevNode, data) {
    if (prevNode === null) {
      console.log("Invalid prevNode");
      return;
    }

    const newNode = new Node(data, prevNode.next, prevNode);

    if (prevNode.next !== null) {
      prevNode.next.previous = newNode;
    }

    prevNode.next = newNode;

    if (newNode.next === null) {
      this.tail = newNode;
    }
  }

  deleteAtBeginning() {
    if (this.head === null) {
      console.log("Linkedlist is empty, cannot be deleted");
      return;
    }

    // if (this.head.next === null) {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return;
    }

    let currentHead = this.head;

    this.head = this.head.next;

    this.head.previous = null;

    currentHead.next = null;
  }

  deleteAtEnd() {
    if(this.head === null) {
      console.log("Empty linkedlist");
      return;
    }

    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      lastNode = this.tail;
      this.tail = this.tail.previous;

      this.tail.next = null;
      lastNode.previous = null;
    }
  }

  reverse() {
    let current = this.head;
    let temp = null;

    while(current !== null) {
      //swapping
      temp = current.previous
      current.previous = current.next
      current.next = temp;
      current = current.previous
    }

    if(temp !== null) {
      this.tail = this.head;
      this.head = temp.previous
    }
  }
}
