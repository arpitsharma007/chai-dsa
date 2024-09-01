const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function breadthFS(graph, start) {
  let queue = [start];
  let visited = new Set();

  while(queue > 0) {
    const node = queue.shift()

    for (const neighbour of graph[node]) {
      if(!visited.has(neighbour)) {
        visited.add(neighbour)
        queue.push(neighbour)
      }
    }
  }
}