/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
    // 1.迭代
    // 链表一般体现在代码实现
    // input: 1-2-3-4-5-NULL
    // output: 5-4-3-2-1-NULL
    var cur = head, prev = null, tmp = cur ? cur.next : null;
    while (cur != null) {
        tmp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmp;
    }
    return prev;
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 1.迭代
    // 链表一般体现在代码实现
    // input: 1-2-3-4-5-NULL
    // output: 5-4-3-2-1-NULL
    var cur = head, prev = null, tmp = cur ? cur.next : null;
    while (cur != null) {
        tmp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmp;
    }
    return prev;
};
// @lc code=end

