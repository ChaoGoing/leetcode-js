/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/** 双指针从后往前 */
const merge = function(nums1, m, nums2, n) {
  let first = m-1, second = n-1;
  let index = m + n - 1
  while(first > -1 && second > -1) {
      /**
       * 简化
       * nums1[first] >= nums2[second] 
       *  ? nums1[index] = nums1[first--] 
       *  : nums1[index] = nums2[second--] 
       */
      if(nums1[first] >= nums2[second]) {
          nums1[index] = nums1[first] 
          first--;
      }else {
          nums1[index] = nums2[second] 
          second--
      }
      index--
  }
  while(second > -1) {
      nums1[second] = nums2[second] 
      second--
  }
  return nums1
} 

/**
 * 其他解法：
 * 1.先合并后排序
 * 2.双指针从前往后
 */