/**
 * @param {number[]} height
 * @return {number}
 */
// 预处理高度
var trap1 = function(height) {
  const len = height.length
  const leftSum = [height[0]]
  for(let i = 1; i<len; i++) {
    leftSum[i] = Math.max(height[i], leftSum[i-1])
  }
  const rightSum = [height[len-1]]
  for(let i = len-2; i>=0; i--) {
    rightSum.unshift(Math.max(height[i], rightSum[0]))
  }
  let sum = 0
  for(let i = 1; i < len-1; i++) {
    sum += Math.min(leftSum[i], rightSum[i]) - height[i]
  }

  return sum
};

// const graphArr1 =  [0,1,0,2,1,0,1,3,2,1,2,1]
// console.log(trap1(graphArr1))

// 单调栈
const trap2 = (height) => {
  const stack = []
  let sum = 0
  for(let i=0; i < height.length; i++) {
    // stack.push(i)
    // if(height[i] <= height[stack[stack.length-2]]) {
    //   continue
    // }
    // while(stack.length > 2 && height[i] > height[stack[stack.length-2]] ){
    //   console.log(i, stack)

    //   const curr = stack.pop()
    //   const buttom = stack.pop()
    //   if(!stack.length) {
    //     break
    //   }
    //   const left = stack.pop()
    //   // console.log("curr", height[curr], "left", height[left], "buttom", height[buttom])
    //   console.log("增加", (Math.min(height[left], height[curr]) - height[buttom]) , (i-left-1))
    //   sum += (Math.min(height[left], height[curr]) - height[buttom]) * (i-left-1)
    //   stack.push(left)
    //   stack.push(i)
    // }  
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop()
      if (!stack.length) {
          break
      }
      const left = stack[stack.length - 1]
      const currWidth = i - left - 1
      const currHeight = Math.min(height[left], height[i]) - height[top]
      sum += currWidth * currHeight
  }
  stack.push(i)
  }
  return sum
}

console.log(trap2([2,0,2]))
console.log(trap2([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap2([2,1,0,2]))

// 双指针代替预处理
const trap3 = () => {

}

// console.log(trap3(graphArr1))

// 面积差值
const trap4 = () => {

}