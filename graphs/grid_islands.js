function islandCount(grid) {
  const rows = grid.length;
  const columns = grid[0].length;

  const visited = new Set();
  let count = 0;

  function dfs(r, c) {
    const pos = r + "," + c;

    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= columns ||
      grid[r][c] === "W" ||
      visited.has(pos)
    ) {
      return;
    }

    visited.add(pos);

    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (grid[r][c] === "L" && !visited.has(r + "," + c)) {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}

const grid = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

console.log(islandCount(grid));
