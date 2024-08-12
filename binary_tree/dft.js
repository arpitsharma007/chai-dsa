// class BstNode {
//   constructor(key) {
//     this.key = key;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }
// }

const depthFirstTraversal = (root) => {
  if (root === null) {
    return;
  }

  const values = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key);

    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.left);
    }
  }
};

const recursiveDepthFirstTraversal = (root) => {
  if (root === null) {
    return;
  }

  const leftValues = recursiveDepthFirstTraversal(root.left);
  const rightValues = recursiveDepthFirstTraversal(root.right);

  return [root.key, ...leftValues, ...rightValues];
  // [a, b, b, c, d, e, f, g]
};
