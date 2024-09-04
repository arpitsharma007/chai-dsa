function maxPastCost(grid, row = 0, col = 0, memo = {}) {
  const pos = row + "," + col;

  if (
    row >= grid.length ||
    col >= grid[0].length
    // grid[row][col] === 'X'
  ) {
    return -Infinity;
  }

  // Check if arrived at given location
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return grid[row][col];
  }

  // return the cache result
  if (pos in memo) {
    return memo[pos];
  }

  const rightPaths = maxPastCost(grid, row + 1, col, memo);
  const downPaths = maxPastCost(grid, row, col + 1, memo);

  memo[pos] = grid[row][col] + Math.max(rightPaths + downPaths);

  return memo[pos];
}
