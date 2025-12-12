/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

const leftBound = (arr, target) => {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      right = mid - 1;
    }
  }
  if (left >= arr.length || arr[left] !== target) return -1;
  return left;
};

var searchMatrix = function (matrix, target) {
  for (let i = matrix.length - 1; i >= 0; i--) {
    if (matrix[i][0] <= target) {
      return leftBound(matrix[i], target) !== -1;
    }
  }
  return false
};

const r = searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  3
);
console.log("r: ", r);
const r2 = searchMatrix([[1]], 0);
console.log("r2: ", r2);
