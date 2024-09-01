function hasPathDFS(graph, start, dest) {
  let stack = [start];
  let visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();

    if (node === dest) {
      return true;
    }

    if (!visited.has(node)) {
      visited.add(node);

      for (const neighbour of graph[node]) {
        stack.push(neighbour);
      }
    }
  }

  return false;
}

function hasPathBFS(graph, start, dest) {
  let queue = [start];
  let visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();

    if (node === dest) {
      return true;
    }

    // if(!visited.has(node)) {
    //   visited.add(node)
    //   for (const neighbour of graph[node]) {
    //     queue.push(neighbour)
    //   }
    // }

    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }

  return false;
}

function hasPathRec(graph, start, dest, visited = new Set()) {
  if (start === dest) {
    return true;
  }

  if (visited.has(start)) {
    return false;
  }

  visited.add(start);

  for (const neighbour of graph[start]) {
    if (hasPathRec(graph, neighbour, dest, visited) === true) {
      return true;
    }
  }

  return false;
}
