// breadth

const treeSumWithBreadthFirstSearch = (root) => {
  if (root === null) return 0;

  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    const node = queue.shift;
    sum += node.key;

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return sum;
};

//depth

const treeSumWithDepthFirstTraversal = (root) => {
  if (root === null) {
    return 0;
  }

  return (
    root.key +
    treeSumWithDepthFirstTraversal(root.left) +
    treeSumWithDepthFirstTraversal(root.right)
  );
};
