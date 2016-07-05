/**
 * Given two arrays, write a function to compute their intersection.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var st1 = new Set(nums1);
    var st2 = new Set(nums2);
    var res = [];
    for (var number of st1) {
        if (st2.has(number)) res.push(number);
    }
    return res;
};
