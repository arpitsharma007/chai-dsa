function shortestPath(edges, start, dest) {
  const graph = createGraph(edges)

  const queue = [[start, 0]];
  const visited = new Set([start]);

  while(queue.length > 0) {
    const [node, distance] = queue.shift()

    if(node === dest) {
      return distance
    }

    for (const neighbour of graph[node]) {
      if(!visited.has(neighbour)) {
        visited.add(neighbour)
        queue.push([neighbour, distance + 1])
      }
    }
  }
}

const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

function createGraph(edges) {
  const graph = {};

  for (const edge of edges) {
    [a, b] = edge;

    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
}

