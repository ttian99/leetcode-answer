/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 *
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (65.87%)
 * Likes:    547
 * Dislikes: 0
 * Total Accepted:    124.1K
 * Total Submissions: 187.7K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 
 * 
 * 
 * 示例:
 * 
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 * 
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
 * @return {ListNode}
 */
// 1.暴力法
var swapPairs = function(head) {
    var prev = new ListNode();
    prev.next = head;
    var result = prev;
    while (prev.next && prev.next.next) {
        var a = prev.next;
        var b = a.next;
        // 交换
        var tmp = b.next;
        prev.next = b;
        b.next = a;
        a.next = tmp;
        // 往后走
        prev = a;
    }

    return result;
};

// 2.递归
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    var next = head.next;
    var nn = swapPairs(next.next);
    head.next = nn;
    next.next = head;
    return next;
}

// @lc code=end

