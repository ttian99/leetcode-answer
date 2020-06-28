/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 1.暴力法
    // 复杂度：
    // var len = nums.length;
    // for (var i = 0; i < len; i++) {
    //     var numA = nums[i];
    //     for (var j = i + 1; j < len; j++) {
    //         var numB = nums[j];
    //         if (numA + numB == target) {
    //             return [i, j];
    //         }
    //     }
    // }
    // return [-1, -1];

    // 2.优化方法: 利用hashMap
    var len = nums.length;
    var list = {};
    for (var i = 0; i < len; i++) {
        var numA = nums[i];
        var numB = target - numA;
        if (list.hasOwnProperty(numB)) {
            return [i, list[numB]];
        } else {
            list[numA] = i;
        }
    }

    return [-1, -1];
};
// @lc code=end

