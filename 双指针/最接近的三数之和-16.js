/**
 * 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
 * 
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let res = 0
  const _nums = nums.sort((a,b) => a - b);
  const len = nums.length;
  let i = 0, distance = Number.MAX_SAFE_INTEGER;
  while(i < len - 2) {
    let left = i + 1, right = len - 1;    
    while(left < right) {
      const sum = _nums[i] + _nums[left] + _nums[right]
      const _distance = sum - target   
      if(_distance === 0){
        return target
      }   
      if(Math.abs(_distance) < Math.abs(distance)) {
        res = sum
        distance = _distance
      }
      _distance > 0 ? right-- : left++ 
    }
    i++
  }
  return res
};

const arr = [-1,2,1,-4];
console.log(threeSumClosest(arr, 1))