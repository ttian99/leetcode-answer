/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 *
 * https://leetcode-cn.com/problems/linked-list-cycle/description/
 *
 * algorithms
 * Easy (48.29%)
 * Likes:    695
 * Dislikes: 0
 * Total Accepted:    198.7K
 * Total Submissions: 406.8K
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


// 1.遍历，判断重复出现
// time: O(n) memory: O(n)
var hasCycle = function(head) {
    while (head) {
        if (head.v) return true;
        head.v = true;
        head = head.next;
    }
    return false;
};

// 2.快慢指针：a-1 b-2 a == b;
// t: O(n) memory: O(1)
// 出现问题：边界条件少于3个导致问题
var hasCycle = function(head) {
    var a = b = head;
    while (a && b && b.next) {
        a = a.next;
        b = b.next.next;
        if (a == b) return true;
    }
    return false;
};
// @lc code=end

