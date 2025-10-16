// 栈
var longestValidParentheses = function(s) {
    let maxans = 0;
    const stack = [];
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (!stack.length) {
                stack.push(i);
            } else {
                maxans = Math.max(maxans, i - stack[stack.length - 1]);
            }
        }
      // console.log(stack, maxans, s[i], i)
    }
    return maxans;
  }; 
  
  console.log(longestValidParentheses(")()()((()))"))