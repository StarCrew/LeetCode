/**
 * Given an array of integers, find if the array contains any duplicates. 
 * Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums.length<2){
        return false;
    }
    function compare(a,b){
        return a-b;
    }
    nums=nums.sort(compare);
    for(var i=1;i<nums.length;i++){
        if(nums[i]===nums[i-1]){
            return true;
        }
    }
    return false;
};