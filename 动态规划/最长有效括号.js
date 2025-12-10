// leetcode32: 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

function validParenthese(str) {
  let target = str.split(""),
    maxlen = 0;
  const dp = new Array(str.length).fill(0);
  for (let i = 1; i < str.length; i++) {
    if (target[i] == ")") {
      if (target[i - 1] == "(") {
        dp[i] = (i > 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] > 0 && target[i - dp[i - 1] - 1] == "(") {
        dp[i] =
          dp[i - 1] + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2;
      }
      maxlen = Math.max(maxlen, dp[i]);
    }
  }
  console.log(dp);
  return maxlen;
}

const r = validParenthese("()()((()))(");
console.log(r);

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

// console.log(longestValidParentheses(")()()((()))"))
