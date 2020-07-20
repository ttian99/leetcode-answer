/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {

};

//1.暴力法

//2.栈
var checkValidString = function(s) {
    var count = 0, 
        len = s.length,
        stack = [], 
        tmp = '';
    while (count < len) {
        tmp = s.charAt(count);
        if (tmp == '(' || tmp == '*') {

        } else {
            
        }

        count++
    }
}
// @lc code=end

