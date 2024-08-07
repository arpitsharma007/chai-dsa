class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }

  contains() {
    this.stack.includes(element);
  }

  reverse() {
    this.stack.reverse();
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }

    return str;
  }
}

// Implememtation

let stack = new Stack();

stack.push(5);
stack.push(8);
stack.push(2);
stack.push(4);

// console.log(stack.printStack());
console.log(stack.peek());

// stack.reverse();
// console.log(stack.size());
// console.log(stack.printStack());
