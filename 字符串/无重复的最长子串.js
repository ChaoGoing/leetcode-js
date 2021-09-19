/**
 * @param {string} s
 * @return {number}
 */

// input: s = "abcabcbb"
// 最长子串"abc"
// output: 3

/***
 * 思路： 滑动窗口(区别于双指针)
 * 维护一个动态的数组，当有重复的字符出现时，移动窗口左边界
 * 
 */
/**　错误记录：遇到重复的字符后，左指针指增加1,右指针保持不变, 而不是跳到重复的位置 */
// 双指针模拟窗口
var lengthOfLongestSubstring = function(s) {
  const set = new Set()
  let target = "", num = 0, tempNum = 0, temTarget = ""
  let left = 0, right = 0
  let exist
  for(let left = 0; left<s.length; left++) {
    if(left !== 0) {
      set.delete(s[left-1])
    }
    while(right < s.length && !(exist = set.has(s[right]))) {
      set.add(s[right])
      temTarget+=s[right]
      tempNum+=1
      right++
    }

    // 如果有重复的字符，下一次重新遍历前需要在记录表中移除这个字符，把指针定位到这个元素后开始下一次的遍历
    if(tempNum>num) {
      num = tempNum
      target = temTarget
    }
    if(right === s.length) {
      break
    }
    tempNum -= 1
    temTarget = temTarget.substring(1)
  }
  console.log(target, num)
  return [target, num]
};

// 官方： 数组（窗口）
var lengthOfLongestSubstring2 = function(s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1, ans = 0;
    for (let i = 0; i < n; ++i) {
        if (i != 0) {
            console.log([...occ], s.charAt(i-1))
            // 左指针向右移动一格，移除一个字符
            occ.delete(s.charAt(i - 1));
        }
        while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
            // 不断地移动右指针
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, rk - i + 1);
    }
    console.log(ans)
    return ans;
};

lengthOfLongestSubstring('bbbbb')
lengthOfLongestSubstring('pwwkew')
lengthOfLongestSubstring('au')
lengthOfLongestSubstring('didv')
