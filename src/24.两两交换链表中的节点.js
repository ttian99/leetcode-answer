/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * 1.暴力法(交换)
 * tmp = cur.next
 * cur.next = cur;
 * cur = tmp;
 * 
 */
var swapPairs = function (head) {
    var cur = head, next = cur.next;
    while(cur.next != null) {
        var tmp = cur.next;
        cur.next.next = cur;
        cur.next = tmp;
    }
    return head;
};
// @lc code=end

