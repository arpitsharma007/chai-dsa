const grid = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

function minIslandSize(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const visited = new Set();
  let smallestSize = Infinity;

  function dfs(r, c) {
    let pos = r + "," + c;

    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "W" ||
      visited.has(pos)
    ) {
      return 0;
    }

    let size = 1;

    visited.add(pos);

    size += dfs(r + 1, c);
    size += dfs(r - 1, c);
    size += dfs(r, c + 1);
    size += dfs(r, c - 1);

    return size;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "L" && !visited.has(r + "," + c)) {
        let count = dfs(r, c);
        console.log("Lowest size:", count);
        if (count < smallestSize) {
          smallestSize = count;
        }
      }
    }
  }

  return smallestSize;
}

console.log(minIslandSize(grid));
