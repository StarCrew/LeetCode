/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i=0;  
    var j=0;  
    while(j < nums.length) {  
        if(nums[j] !== 0) {  
           if(j!== i) {   
                nums[i++] = nums[j];  
                nums[j] = 0;  
           } else {  
               ++i;  
           }  
        }   
        ++j;  
    }  
};
