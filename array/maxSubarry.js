/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums.length) {
    return -1;
  }
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let sum = null;
    for (let j = i; j < nums.length; j++) {
      if (!sum) {
        sum = nums[j];
      } else {
        sum += nums[j];
      }
      max = Math.max(max, sum);
    }
  }
  return max;
};
