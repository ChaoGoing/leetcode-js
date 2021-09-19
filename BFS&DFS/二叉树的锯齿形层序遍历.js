/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */ 

// bfs+双端队列
const { generateTree } = require('../utils/generateTree.js')

const root = generateTree([0,2,4,1,null,3,-1,5,1,null,6,null,8])

var zigzagLevelOrder = function(root) {
  if(!root) {
    return
  }
  const stack = [root]
  // stack.push(root)
  let order = 'left'
  const result = []
  while(stack.length) {
    let levleList = []
    const size = stack.length
    console.log("size", size, stack)
    for(let i = 0; i < size; i++) {
      const node = stack.shift()
      if(order === 'left') {
        levleList.push(node.val)
      }else {
        levleList.unshift(node.val)
      }
      node.left && (stack.push(node.left))
      node.right && (stack.push(node.right))
    }
    result.push(levleList)
    order = order === 'left' ? 'right' : 'left'
  }
  return result
};

const r = zigzagLevelOrder(root)
console.log(r)