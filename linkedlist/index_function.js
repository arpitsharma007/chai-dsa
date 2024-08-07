class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the beginning
  insertAtBegginning(data) {
    const newNode = new Node(data);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    this.head = newNode;
  }

  // Insert at the end
  insertAtEnd(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let last = this.head;

    while (last.next) {
      last = last.next;
    }

    last.next = newNode;
  }

  deleteFirstNode() {
    // Better approach
    if (!this.head) {
      return;
    }

    this.head = this.head.next;

    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }

    // this.head = this.head.next;
  }

  deleteLastNode() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
    }

    let last = this.head;

    while (last.next.next) {
      last = last.next;
    }

    last.next = null;
  }

  deleteByKey(key) {
    if (!this.head) {
      console.log("Linked list is empty");
      return;
    }

    if (this.head.data === key) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      if (currentNode.next.data === key) {
        currentNode.next = currentNode.next.next;
        return;
      }
      currentNode = currentNode.next;
    }

    console.log("No node found with given key");
  }

  searchWithKey(key) {
    let current = this.head;

    while (current) {
      if (current.data === key) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // Traversal
  printList() {
    let current = this.head;

    let listValues = [];

    while (current) {
      listValues.push(current.data);
      current = current.next;
    }

    console.log(listValues.join(" -> "));
  }

  reverseAList() {
    previous = null;
    next = null;
    current = this.head;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }
}
