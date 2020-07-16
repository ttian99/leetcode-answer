/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 1.暴力法
 * @alias 解题思路:
 * - 枚举:3次循环遍历3个元素
 * - 去重:遍历结果数组去重，通过排序保证只出现a<b<c的顺序出现。
 * @alias 复杂度分析
 * - 时间复杂度：O(排序复杂度*n*n*n)
 * - 空间复杂度: O(n)
 * @alias 测试结果
 * 
 * @alias 问题卡点：
 * - 数组去重: 通过排序保证，枚举的三元组 (a, b, c)(a,b,c) 满足 a \leq b \leq ca≤b≤c，保证了只有 (a, b, c)(a,b,c) 这个顺序会被枚举到
 */
var threeSum = function(nums) {
    var len = nums.length;
    var arr = [];
    for (let i = 0; i < len; i++) {
        const a = nums[i];
        for (let j = i + 1; j < len; j++) {
            const b = nums[j];
            for (let k = j + 1; k < len; k++) {
                const c = nums[k];
                if (a + b + c == 0) {
                    console.log('abc = ' + a + b + c + ' , ijk = ' + i + j + k);
                    var map = { a: true, b: true, c: true };
                    for (let l = 0; l < len; l++) {
                        const rmap = arr[l];
                        if (rmap[a] && rmap[b] && rmap[c]) continue; //重复了
                        arr.push([a, b, c]);
                        list.push(map);
                    }
                }
            }
        }
    }
    return arr;
};
// @lc code=end

