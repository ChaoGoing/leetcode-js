/**
 *  这里有一个非负整数数组 arr，你最开始位于该数组的起始下标 start 处。当你位于下标 i 处时，你可以跳到 i + arr[i] 或者 i - arr[i]。

    请你判断自己是否能够跳到对应元素值为 0 的 任一 下标处。

    注意，不管是什么情况下，你都无法跳到数组之外。
*/

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const reached = arr.map(() => false);
  const paths = [];
  function deep(index, path) {
    if (index < 0 || index > arr.length - 1) return;
    if (reached[index]) return;
    reached[index] = true;
    path.push(index);
    if (arr[index] === 0) {
      paths.push(path);
      return true;
    }
    const l = deep(index + arr[index], [...path]);
    if (l === true) return;
    const r = deep(index - arr[index], [...path]);
    if (r === true) return;
    reached[index] = false;
  }

  deep(start, []);
  return !!paths?.length;
};

var canReach2 = function (arr, start) {
  const reached = arr.map(() => false);
  function deep(index) {
    if (index < 0 || index > arr.length - 1) return;
    if (reached[index]) return;
    reached[index] = true;
    if (arr[index] === 0) {
      return true;
    }
    const l = deep(index + arr[index]);
    if (l === true) return true;
    const r = deep(index - arr[index]);
    if (r === true) return true;
    reached[index] = false;
  }

  const r = deep(start, []);
  return !!r;
};

var canReach3 = function (arr, start) {
  const stack = [start];
  const used = arr.map(() => false);
  while (stack.length) {
    const curr = stack.shift();
    used[curr] = true;
    const right = arr[curr] + curr;
    if (right < arr.length) {
      if (arr[right] === 0) return true;
      if (!used[right]) {
        stack.push(right);
      }
    }
    const left = curr - arr[curr];
    if (left >= 0) {
      if (arr[left] === 0) return true;
      if (!used[left]) {
        stack.push(left);
      }
    }
  }
  return false;
};

console.log(canReach3([4, 2, 3, 0, 3, 1, 2], 5));
