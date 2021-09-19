/**
 * 在二维网格 grid 上，有 4 种类型的方格：

  1 表示起始方格。且只有一个起始方格。
  2 表示结束方格，且只有一个结束方格。
  0 表示我们可以走过的空方格。
  -1 表示我们无法跨越的障碍。
  返回在四个方向（上、下、左、右）上行走时，从起始方格到结束方格的不同路径的数目。

  每一个无障碍方格都要通过一次，但是一条路径中不能重复通过同一个方格。
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  let total = 0

  let marked = Array.from(grid).map((item, i) => [...grid[i]])

  let dirs = [[0,-1], [-1,0], [0,1], [1,0]]

  let start

  const rowlen = grid.length, collen = grid[0].length

  for(let i = 0; i < grid.length; i++) {
    let len = grid[i].length
    for(let j = 0; j < len; j++) {
      if(grid[i][j] === 1) {
        start = [i,j]
      }
    }
  }
  
};

const arr = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
const res = uniquePathsIII(arr)
console.log(res)