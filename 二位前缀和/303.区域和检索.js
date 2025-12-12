/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = new Array(nums.length).fill(0)
  for(let i = 0; i < nums.length; i++) {
    this.nums[i+1] = this.nums[i] + nums[i]
  }
  return 
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.nums[right+1] - this.nums[left]
};

const numArray = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(numArray.sumRange(0,2))
console.log(numArray.sumRange(2,5))