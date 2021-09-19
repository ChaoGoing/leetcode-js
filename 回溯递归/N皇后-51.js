/**
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
  给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
  每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 */

/**
 * @param {number} n
 * @return {string[][]}
*/
var solveNQueens = function(n) {
  const board = new Array(n)
  
  const result = []

  function callRow(row) {
    if(row >= n) {
      result.push([...board])
    }
    for(let i = 0; i < n; i++) {
      if(checkIsOk(row, i)) {
        board[row] = i
        callRow(row + 1)
      }
    }
  }
  function checkIsOk(row, column) {
    let leftup = column - 1, rightup = column + 1
    for(let r = row - 1; r >= 0; r--) {
      // board[r]为上一行皇后放置的位置
      if(board[r] === column) {
        return false
      }
      if(leftup >= 0 && board[r] === leftup) {
        return false
      }
      if(rightup < n && board[r] === rightup) {
        return false
      }
      leftup--
      rightup++
    }
    return true
  }
  callRow(0)
  // printf
  for(let i = 0; i < result.length; i++) {
    const temp = result[i]
    const _board = new Array(n).fill(true).map(item => new Array(n).fill('.'))
    for(let j = 0; j < n; j++) {
      console.log(temp, temp[j])
      _board[j][temp[j]] = 'Q'
      _board[j] = _board[j].join('')
    }
    result[i] = _board
  }
  console.log(result)
  return result
};


solveNQueens(4)