/**
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
 * find the one that is missing from the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var n=(1+nums.length)*nums.length/2;
    for(var i=0;i<nums.length;i++){
        n-=nums[i];
    }
    return n;
};