/**
 * Suppose a sorted array is rotated at some pivot unknown to you beforehand.
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * You may assume no duplicate exists in the array.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 0){
        return -1;
    }
    if(nums.length === 1){
        if(nums[0] === target){
            return 0;
        }
        else{
            return -1;
        }
    }
    var l = 0;  
    var r = nums.length - 1;  
    while (l <= r) {  
        var mid = Math.floor((l + r) / 2);  
        if (target === nums[mid]) return mid;  
        if (nums[l] <= nums[r]) {  
            if (target < nums[mid]) r = mid - 1;  
            else l = mid + 1;  
        } else if (nums[l] <= nums[mid]) {  
            if (target > nums[mid] || target < nums[l]) l = mid + 1;  
            else r = mid - 1;  
        } else {  
            if (target < nums[mid] || target > nums[r]) r = mid - 1;  
            else l = mid + 1;  
        }  
    }  
    return -1; 
};
