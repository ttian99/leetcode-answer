/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    /**
     * 1.暴力法:
     * 解题思路：
     * - 判断重复：移位法-移动窗口
     * - 找最大：记录
     * 时间复杂度: O(n*n)
     * 
     * 测试未通过案例：
     * 1."" 边界条件为考虑进去，变量i没有从0开始
     * 2."brnk" 提前结束条件判断错误
     * 3."dvdf" 重新判断子串的起点错误了
     * 4."anviaj" 提前结束导致的
     * 5."nfpdmpi" 
     * 6."abcabcbb" 有重复的条件判断错误，忽略了0的情况
     * 
     * -设定1个记录字符串,1个记录长度
     * -遍历每个字符,该字符与记录字符串是否有重复
     * -无重复：将该字符加入记录字符串，长度+1
     * -有重复：记录字符串清空，该字符为新的记录
     *
     * 测试结果: 
     *  987/987 cases passed (104 ms)
     *  Your runtime beats 67.27 % of javascript submissions
     *  Your memory usage beats 50.68 % of javascript submissions (40.2 MB)
     * 
     * 987/987 cases passed (92 ms)
     * Your runtime beats 92.02 % of javascript submissions
     * Your memory usage beats 36.98 % of javascript submissions (40.6 MB)
     */

    var len = s.length;
    var testStr = "";
    var maxStr = testStr; // 最长子串
    for (let i = 0; i < len; i++) {
        const char = s.slice(i, i + 1);
        const idx = testStr.indexOf(char);
        // 字符累加
        testStr += char;
        // 有重复时
        if (idx >= 0) {
            // 从重复的字符串后一位开始
            testStr = testStr.slice(idx + 1)
        }
        // 超过最大字符串
        if (testStr.length > maxStr.length) {
            maxStr = testStr;
        }
    }
    return maxStr.length;
};
// @lc code=end

