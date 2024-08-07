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
}

LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};

LinkedList.prototype.insertAtEnd = function (data) {
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
};

LinkedList.prototype.insertAfter = function (prevNode, data) {
  if (!prevNode) {
    console.log("The given prev node cannot be null");
    return;
  }

  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    console.log("Head is empty");
    return;
  }
  this.head = this.head.next;
};

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return; // If linked list is empty
  }

  if (!this.head.next) {
    this.head = null; // if there is only one node
    return;
  }

  let secondLast = this.head;

  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }

  secondLast.next = null;
};

LinkedList.prototype.deleteByKey = function (key) {
  // if list is empty
  if (!this.head) {
    console.log("list is empty");
    return;
  }

  if (this.head.data === key) {
    this.head = this.head.next;
  }

  let current = this.head;

  while (current.next !== null) {
    if (current.next.data === key) {
      current.next = current.next.next;
    }
    current = current.next;
  }

  console.log("No node found with key: ", key);
};

// Search operation

LinkedList.prototype.search = function (key) {
  let current = this.head;

  while (current) {
    if (current.data === key) {
      return true;
    }
  }

  return false;
};

// Traversal

LinkedList.prototype.printList = function () {
  let current = this.head;

  let listValues = [];
  while (current) {
    listValues.push(current.data);
    current = current.next;
  }

  console.log(listValues);
};
