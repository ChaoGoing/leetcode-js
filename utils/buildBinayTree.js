const DLinkedList = require('./DLinkedList.js')

function TreeNode(ele) {
  this.ele = ele
  this.left = null
  this.right = null
}

class BinaryTree{
  constructor(root) {
    this.root = root
  }
  insert() {

  }
  // 中序遍历
  inorder(node, cb = () => {}) {
    
  }
  // 后序遍历
  postOrder(node, cb) {
    
  }
  // 前序遍历
  preOrderr(node, cb) {
    
  }
}

/**
 * 将数组装转换成二叉树
 * @param {*} arr 
 * @returns 
 */
function buildBinaryTree(arr) {

 
  
  const t = linkedlist.get(0).getEle()
  return new BinaryTree(t)
}

const tree = buildBinaryTree([5,3,6,2,4,null,8,1,null,null,null,7,9])
tree.inorder(tree.root, (node) => {
  console.log(node.ele)
})