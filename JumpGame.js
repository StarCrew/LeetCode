/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var max=0;
    for(var i=0;i<=max && i<nums.length;i++){
        max=Math.max(max,nums[i]+i);
    }
    if(i===nums.length){
        return true;
    }
    return false;
};