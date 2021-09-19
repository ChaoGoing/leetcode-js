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
 * 低级错误： Array.from 是浅拷贝，marked = Array.from(grid) 会覆盖grid
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
  function checkRunAll() {
    console.log(marked)
    for(let i = 0; i < grid.length; i++) {
      let len = grid[i].length
      for(let j = 0; j < len; j++) {
        if(grid[i][j] === -1 || grid[i][j] === 2 || grid[i][j] === 1) {
          continue
        }
        if(!marked[i][j]) {
          return false
        }
      }
    }
    return true  
  }

  const route = []

  function searchDFS(row, column) {
    // console.log('row =>', row, 'column =>', column)
    // console.log(row, column)
    marked[row][column] = true
    route.push(row + ' ' + column)
    try{
      if(grid[row][column] === -1) return 
      if(grid[row][column] === 2 && checkRunAll()) {
        total += 1
        return
      }
      
      if(grid[row][column] === 2) {
        return 
      }
      
      for(let i = 0; i < dirs.length; i++) {
        const dir = dirs[i]
        const _r = row + dir[0], _c = column + dir[1]
        if(_r<0 || _r>= rowlen || _c < 0 || _c >= collen){
          continue
        }
        if(marked[_r][_c] === true || grid[_r][_c] === -1) {
          continue
        }
        searchDFS(_r, _c)
        marked[_r][_c] = false
        route.pop()
      }
    }catch(e) {
      console.log(e)
      console.log(marked, row, column)
    }
  }

  searchDFS(...start)
  return total
};

const arr = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
const res = uniquePathsIII(arr)
console.log(res)