const priorityMap = {
  '+': 1,
  '-': 1,
  '*': 2,
  '%': 2,
  '/': 2,
  '^': 3
}


function _calc(nums, ops) {
  // 获取当前栈顶的两个数和符号进行计算

}

function calculate(s) {
  
  const nums = []
  const ops = []

  // 预处理

  let index = 0
  // 遍历
  while(index < s.length) {
    const symbol = s[index]

    if(symbol === '(') { // 将
      ops.push(symbol)
    }else if(symbol === ')') { // 循环计算ops中的数据，直到遇到'('或者ops为空

    }else if(Number.isInteger(Number(symbol))) { // 取出连续数字并入栈
      let value = 0
      while(Number.isInteger(Number(symbol))) {

        symbol = s[++i]
      }
    }else { // 将符号入栈，并与前一个符号比较优先级，如果优先级小于前一个，进行计算

    }
  }

  // 计算 剩余的数据
  while(ops.length) {

  }

}