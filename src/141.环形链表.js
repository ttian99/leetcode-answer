/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 *
 * https://leetcode-cn.com/problems/linked-list-cycle/description/
 *
 * algorithms
 * Easy (48.63%)
 * Likes:    679
 * Dislikes: 0
 * Total Accepted:    189.5K
 * Total Submissions: 389.5K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，判断链表中是否有环。
 * 
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 输入：head = [1], pos = -1
 * 输出：false
 * 解释：链表中没有环。
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 你能用 O(1)（即，常量）内存解决此问题吗？
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
/**
 * 1.暴力法(循环超时判断)
 * @alias 思路:
 * - 不断枚举,判断1s超时.
 * @alias 复杂度
 */
// var hasCycle = function (head) {
//     let pos = -1;
//     setTimeout(() => {
//         pos = 1;
//     }, 1);
//     while (head && head.next) {
//         if (pos == 1) break;
//         head = head.next;
//     }
//     return pos == 1;
// };

/**
 * 2.标记法
 * @alias 思路:
 * - 枚举链表1遍
 * - 有: 枚举到任一节点,next节点为已经出现过的节点
 * - 无: 枚举到尾节点,next为空
 * @alias 复杂度:
 * - 时间: O(n * 1);
 * - 空间: O(n);
 * @alias 问题:
 * - 如何判断节点出现过了? 给节点做标记
 * @alias 测试:
 * 17/17 cases passed (92 ms)
 * Your runtime beats 24.17 % of javascript submissions
 * Your memory usage beats 8.33 % of javascript submissions (40.5 MB)
 */
var hasCycle = function (head) {
    while (head) {
        if (head.isShowed) return true;
        head.isShowed = true;
        head = head.next;
    }
    return false;
}

/**
 * 3.快慢指针(龟兔赛跑)
 * @alias 思路
 * - 快指针+2, 慢指针+1
 * - 有环的话肯定能相遇.
 * @alias 复杂度:
 * - 时间复杂度O(n)
 * - 空间复杂度O(1)
 * @alias 问题:
 * - 2个指针的初始值一致为head
 * - 移动的是指针,不是head
 * @alias 测试:
 * 17/17 cases passed (92 ms)
 * Your runtime beats 24.17 % of javascript submissions
 * Your memory usage beats 8.33 % of javascript submissions (40.6 MB)
 */
var hasCycle = function (head) {
    var slow = fast = head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast == slow) return true;
    }
    return false;
}
 // @lc code=end

