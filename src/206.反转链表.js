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
/**
 *  1.迭代
 *  input: 1-2-3-4-5-NULL
 *  output: 5-4-3-2-1-NULL
 *  时间复杂度: O(n)
 *  空间复杂度: O(1)
 */
var reverseList = function(head) {
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
 * 2.递归
 * 
 */
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    var cur = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return cur;
};
// @lc code=end

