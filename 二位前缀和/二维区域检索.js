/**
 * 给定一个二维矩阵，计算其子矩形范围内元素的总和，
 * 该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  const rowLen = matrix.length
  const colLen = matrix[0].length
  this.sums = new Array(rowLen+1).fill(0).map(a => new Array(colLen+1).fill(0))
  console.log(this.sums)
  for(let r = 0; r < rowLen; r++) {
    for(let c = 0; c < colLen; c++) {
      this.sums[r+1][c+1] = this.sums[r+1][c] + this.sums[r][c+1] - this.sums[r][c] + matrix[r][c]
    }
  }
  console.log(this.sums)
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.sums[row2+1][col2+1] - this.sums[row1][col2+1] - this.sums[row2+1][col1] + this.sums[row1][col1]
};

const matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]
const Martix = new NumMatrix(matrix)
console.log(Martix.sumRegion(2, 1, 4, 3))