/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var searchInsert=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]>=target){
            searchInsert=i;
            return searchInsert;
        }
        if((i===nums.length-1)&&nums[i]<target){
            searchInsert=nums.length;
            return searchInsert;
        }
    }
    return searchInsert;
};
