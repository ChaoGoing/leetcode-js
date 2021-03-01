/**
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成
 * 
 * 总结：关键在于抓住替换的执行顺序
 * 左指针++ -> 两个数不相等 ? 替换 : 无操作 -> 右指针++
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let left = 0;
  let right = 1;
  while(right < nums.length) {
    if(nums[right] !== nums[left] && left !== right) {
      left++
      nums[left] = nums[right]
    }
    right++
  }
  return left
};

var removeDuplicates2 = function(nums) {
  let p = 0;
  for(let i = 1; i < nums.length; i++) {
      if(nums[i] !== nums[p]) {
          p++
          nums[p] = nums[i]
      }
  }
  return p + 1
};

let n = [1,1,2,4,4,5]
removeDuplicates2(n)
console.log(removeDuplicates(n), n)