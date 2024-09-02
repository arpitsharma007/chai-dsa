function biggestIsland(graph) {
  const visited = new Set();
  let largest = 0;

  function dfs(node) {
    if (visited.has(node)) {
      return 0;
    }

    visited.add(node);
    let size = 1;

    for (const neighbour of graph[node]) {
      size += dfs(neighbour);
    }

    return size;
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      let size = dfs(node);

      if (size > largest) {
        largest = size;
      }
    }
  }
}
