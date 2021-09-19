class TreeNode{
  constructor(val) {
    this.left = null
    this.right = null
    this.value = val
  }
  setVal(val) {
    this.value = val
  }
}

function generateTree(list) {
  // 通过一个栈来确定当前执行到哪个父节点
  let root = null;
  const _l = [];
  let _currIndex = 0;
  let index = -1;

  while(++index < list.length) {
    const currVal = list[index]
    if(_l.length) {
      const node = new TreeNode(currVal)
      const parent = _l[_currIndex]
      if(!parent.left) {
        parent.left = node
      }
      else if(!parent.right) {
        parent.right = node
        ++_currIndex
      }
      if(currVal != null) {
        _l.push(node)
      }
    }else {
      root = new TreeNode(currVal)
      _l.push(root)
    }
  }
  
  return root

}







const test1 = [1, null, 3, 2]
const test2 = [1, 2, 3, 4, 5, 6, 7, 8]

const result1 = generateTree(test1)
const result2 = generateTree(test2)

console.log(result1)
console.log(result2)