const breadthFirstSearch = (root) => {
  if (root === null) {
    return;
  }

  const values = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    values.push(node.key);

    if (node.left !== null) {
      queue.push(node.left);
    }

    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return values;
};
