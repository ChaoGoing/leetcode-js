/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 总结：犹豫不决先排序，步步逼近双指针
 * 
 * 解答错误：
 * 1.没有考虑考虑边界情况：所有数字相同 [0,0,0,0]
 * 2.缺少第二种去重的考虑
 * 总共考虑两种情况的去重：
 *   -外层遍历数组时，重复元素直接跳过
 *   -在找到满足的三个数后，指针需要向后判断，跳过重复的元素
 */


 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const _nums = nums.sort((a,b) => a - b);
  const res = [], len = nums.length;
  if(_nums[0] > 0) return res;
  for(let i = 0; i < len - 2; i++) {
    
    if(i>0 && _nums[i] === _nums[i-1]) {
      continue
    }
    console.log(i, _nums[i], _nums[i-1], _nums[i] === _nums[i-1])
    let left = i + 1, right = len - 1;
    while(left < right) {
      if(_nums[i] > 0) break;
      const _sum = _nums[i] + _nums[left] + _nums[right];
      if(_sum === 0) {
        res.push([_nums[i], _nums[left], _nums[right]])
        
        // 错误点1：去重
        while(_nums[left] === _nums[left+1]) {
          left++
        }
        while(_nums[right] === _nums[right-1]) {
          right--
        }
        left++; 
        right--;
      }else {
        _sum > 0 ? right-- : left++
      }
      
    }
  }
  return res
};

const nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))