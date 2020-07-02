/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * 1.暴力法:
 * 
 * 解题思路：
 * - 判断重复：遍历字符串
 * - 找最大：记录最长字符串
 * > 设定1个记录字符串,1个记录长度
 * > 遍历每个字符,该字符与记录字符串是否有重复
 * > 无重复：将该字符加入记录字符串，长度+1
 * > 有重复：记录字符串清空，该字符为新的记录
 * 
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
 * 测试结果: 
 * 987/987 cases passed (104 ms)
 * Your runtime beats 67.27 % of javascript submissions
 * Your memory usage beats 50.68 % of javascript submissions (40.2 MB)
 * 987/987 cases passed (92 ms)
 * Your runtime beats 92.02 % of javascript submissions
 * Your memory usage beats 36.98 % of javascript submissions (40.6 MB)
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
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

/**
 * 官方版本
 * @param {*} s 
 * @wiki https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/wu-zhong-fu-zi-fu-de-zui-chang-zi-chuan-by-leetc-2/
 */
var lengthOfLongestSubstring = function (s) {
    // 哈希集合，记录每个字符是否出现过
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1, ans = 0;
    for (let i = 0; i < n; ++i) {
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            occ.delete(s.charAt(i - 1));
        }
        while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
            // 不断地移动右指针
            occ.add(s.charAt(rk + 1));
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
};

/**
 * 自我实现官方版本
 * 思路：
 * 1.
 * @param {*} s 
 */
var lengthOfLongestSubstring = function (s) {
    var hash = {};
    var len = s.length;
    var max = 0;
    var rk = -1;
    for (let i = 0; i < len; i++) {
        if (i != 0) {
            delete hash[s.charAt(i - 1)];
        }
        while (rk + 1 < len && !hash.hasOwnProperty(s.charAt(rk + 1))) {
            hash[s.charAt(rk + 1)] = true;
            ++rk;
        }
        max = Math.max(max, rk - i + 1);
    }
    return max;
}

// @lc code=end

