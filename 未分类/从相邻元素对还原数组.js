/**
 * leetcode 1743
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */


/**
 * 单向构造
 * 思路比较简单，构造相邻关系表，元素个数为1代表元素处于第一个/末尾，以其中一个为首位按顺序构造即可
 */
var restoreArray_single = function(adjacentPairs) {
  // 将map从{}改成Map后，内存消耗提升拉满，从击败15到81
  const map = new Map();
  for (const adjacentPair of adjacentPairs) {
      map.get(adjacentPair[0]) ? map.get(adjacentPair[0]).push(adjacentPair[1]) : map.set(adjacentPair[0], [adjacentPair[1]]);
      map.get(adjacentPair[1]) ? map.get(adjacentPair[1]).push(adjacentPair[0]) : map.set(adjacentPair[1], [adjacentPair[0]]);
  }

  let first
  for(let [key,val] of map) {
    if(map.get(key).length === 1) {
      first = Number(key)
      break
    }
  }
  if(!first) {
    return false
  }

  
  const result = [first]
  let node = first
  while(map.get(node)) {
    const _temp = node
    if(map.get(node).length > 1) {
      node = map.get(node).find(n => map.get(n))
      result.push(node)
    }else {
      if(result.length <= 1) {
        node = map.get(node)[0]
        result.push(node)
      }
    }
    map.set(_temp, null)
  }
  return result
};

const adjacentPairs = [[2,1],[3,4],[3,2]]
console.log(restoreArray_single(adjacentPairs))


/**
 * 双向构造，先构建map, 先构建一个10^6(给定数组的长度为2 <= n <= 10^5)的数组，通过双指针, 左右指针的差等于元素个数时停止插入，[r+1, l+1]即为目标数组
 */
const restoreArray_double = function(adjacentPairs) {


}

console.log(restoreArray_double(adjacentPairs))

/**
 * 其它思路：
 * 类似拓扑排序的BFS和DFS,根据出入度来判断是否是首尾结点，通过visited数组来判断是否已经使用过， 但主流程其实是一样的
 * 有空实现一下，加深对拓扑排序的理解
 */