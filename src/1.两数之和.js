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
/**
 * 1.暴力法
 * 
 * - 复杂度分析
 * 时间复杂度: O(n*n)
 * 空间复杂度: O(1)
 * - 测试结果：
 * 29/29 cases passed (120 ms)
 * Your runtime beats 53.77 % of javascript submissions
 * Your memory usage beats 16.1 % of javascript submissions (35.6 MB)
 */
var twoSum = function (nums, target) {
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        var numA = nums[i];
        for (var j = i + 1; j < len; j++) {
            var numB = nums[j];
            if (numA + numB == target) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};

/**
 * 2.hash
 * 时间复杂度: O(n*1)
 * 空间复杂度: O(n)
 * 
 * 29/29 cases passed (76 ms)
 * Your runtime beats 73.45 % of javascript submissions
 * Your memory usage beats 100 % of javascript submissions (33.6 MB)
 */
var twoSum = function (nums, target) {
    var len = nums.length;
    var list = {};
    for (let i = 0; i < len; i++) {
        var a = nums[i];
        var b = target - a;
        if (list.hasOwnProperty(b)) {
            return [i, list[b]];
        } else {
            list[a] = i;
        }
    }
    return [-1, -1];
}
// @lc code=end

