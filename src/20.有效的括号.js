/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (41.97%)
 * Likes:    1699
 * Dislikes: 0
 * Total Accepted:    329.8K
 * Total Submissions: 785.5K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

 /**
  * 1.栈:FILO
  * @思路
  * - 左括号直接押入栈
  * - 右括号判断: 栈不为空,栈顶元素与之是否匹配, 匹配则栈顶元素出栈.
  * - 最后栈必须为空.
  * @复杂度
  * - 时间: O(n)
  * - 空间: O(n)
  * @测试
  * 76/76 cases passed (104 ms)
  * Your runtime beats 7.18 % of javascript submissions
  * Your memory usage beats 6.06 % of javascript submissions (38.5 MB)
  */
var isValid = function (s) {
    var stack = [],
        idx = 0,
        len = s.length,
        tmp = '',
        list = { ')': '(', ']': '[', '}': '{' };

    while (idx < len) {
        tmp = s.charAt(idx);
        if (tmp == '(' || tmp == '[' || tmp == '{') {
            stack.push(tmp);
        } else {
            if (stack.length > 0) {
                var last = stack.slice(-1);
                if (list[tmp] == last) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
        idx++;
    }
    return stack.length == 0;
};

/**
 * 2.replace法
 * @思路
 * - 括号需要成对出现,从内到外替换成对的括号()[]{}
 * - 完成后,目标字符串应为空
 * @复杂度
 * - 时间: O(n)
 * - 空间: O(n)
 * @测试
 * 
 *
 */
var isValid = function (s) {
   
};

// @lc code=end

