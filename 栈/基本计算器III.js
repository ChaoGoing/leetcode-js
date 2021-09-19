
const priorityMap = {
  '+': 1,
  '-': 1,
  '*': 2,
  '%': 2,
  '/': 2,
  '^': 3
}

const _calc = function (nums, ops) {
  if(nums.length < 2 || !ops.length) {
    return 
  }
  let ins = 0
  const right = nums.pop()
  const left = nums.pop()
  const symbol = ops.pop()
  switch (symbol) {
    case '-':
      ins += left - right
      break
    case '+':
      ins += left + right
      break
    case '*':
      ins += left * right
      break
    case '/':
      ins += Number.parseInt(left / right)
      break
    case '%':
      ins += left % right
      break
    default:
      break;
  }
  nums.push(ins)
  return ins
}

/**
 * @param {string} s
 * @return {number}
 */
var calculate_err = function(s) {

  const nums = []
  const ops = []
  let preSign = '+'
  // 预处理空格，(-, (+
  s = s.replace(/\s/g, '')
  s = s.replace(/\(\-/g, '(0-')
  s = s.replace(/\(\+/g, '(0+')
  console.log(s)
  
  for(let i = 0; i < s.length; i++) {
    console.log(nums, ops, s[i])
    const symbol = s[i]
    if(symbol === '(') {
      ops.push(symbol)
    }
    else if(symbol === ')') {
      console.log("f ops", ops)
      while(ops.length) {
        const n = ops[ops.length-1]
        if(n==='(') {
          ops.pop()
          break
        }else {
          _calc(nums, ops)
        }        
      }
    }
    else if(Number.isInteger(Number(symbol))) {
      let _nums = Number(symbol)
      while(Number.isInteger(Number(s[i+1])) ) {
        _nums = _nums * 10 + Number(s[i+1])
        i++
      }
      console.log("_nums", _nums)
      nums.push(Number(_nums))
    }
    else {
      // if (i > 0 && (s[i - 1] == '(' || s[i - 1] == '+' || s[i - 1] == '-')) {
      //   nums.push(0);
      // }
      
      ops.push(symbol)
      if(priorityMap[preSign] > priorityMap[symbol]) {
        console.log("final symbol")
        while(ops.length && ops[ops.length-1]!=='(') {
          _calc(nums, ops)
          i++
        }
        preSign = symbol
      } 
    }
  }


  while (ops.length && nums.length) {
    _calc(nums, ops);
  }
  console.log(nums, ops)
  return nums[nums.length-1];


}

// console.log(_calc([1, 2, 6], ['+', '*']))
console.log(calculate_err('(1+(4+5*2))+68)+2'))