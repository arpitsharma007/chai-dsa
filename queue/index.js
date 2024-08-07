class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[0];
  }

  printQueue() {
    let str = "";
    for (var element of this.queue) {
      str += element + "\n";
    }

    return str;
  }
}

let queue = new Queue();

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(4);

console.log(queue.printQueue());
queue.dequeue();

console.log(queue.printQueue());
