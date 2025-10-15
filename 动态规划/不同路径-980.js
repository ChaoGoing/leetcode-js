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
  let start = null
  let emptyCells = 0
  
  const rowlen = grid.length, collen = grid[0].length
  const dirs = [[0,-1], [-1,0], [0,1], [1,0]] // 左、上、右、下

  // 找到起始位置并计算空方格数量
  for(let i = 0; i < rowlen; i++) {
    for(let j = 0; j < collen; j++) {
      if(grid[i][j] === 1) {
        start = [i, j]
      } else if(grid[i][j] === 0) {
        emptyCells++
      }
    }
  }

  // 回溯函数
  function backtrack(row, col, visited, steps) {
    // 检查边界和障碍
    if(row < 0 || row >= rowlen || col < 0 || col >= collen || 
       grid[row][col] === -1 || visited[row][col]) {
      return
    }

    // 到达终点
    if(grid[row][col] === 2) {
      // 检查是否访问了所有空方格（包括起始位置）
      if(steps === emptyCells + 1) {
        total++
      }
      return
    }

    // 标记当前位置为已访问
    visited[row][col] = true

    // 向四个方向探索
    for(let [dr, dc] of dirs) {
      backtrack(row + dr, col + dc, visited, steps + 1)
    }

    // 回溯：取消标记
    visited[row][col] = false
  }

  // 创建访问标记数组
  const visited = Array(rowlen).fill().map(() => Array(collen).fill(false))
  
  // 从起始位置开始回溯
  backtrack(start[0], start[1], visited, 0)
  
  return total
};

// 测试用例
const test1 = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
console.log('Test 1:', uniquePathsIII(test1)) // 期望输出: 4

const test2 = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
console.log('Test 2:', uniquePathsIII(test2)) // 期望输出: 2

const test3 = [[0,1],[2,0]]
console.log('Test 3:', uniquePathsIII(test3)) // 期望输出: 0

const test4 = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,2]]
console.log('Test 4:', uniquePathsIII(test4)) // 期望输出: 20