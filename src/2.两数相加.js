/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    /**
     * 解题思路:
     * 1.创建新链表l3
     * 2.当前节点值val：l1值+l2值+进位值
     * 3.当前节点的下一节点next: l1.next || l2.next || 需要进位
     * 4.进入下一个节点next: l1.next l2.next l3.next
     * 
     * 时间复杂度：O(n)
     * 空间复杂度：O(n)
     * 测试耗时：130ms-140ms
     * 占用内存：41.2MB
     * 
     * */ 
    var l3 = result = {};
    var carry = 0; //进位
    while (l1 || l2 || carry) {
        // 取和: l1 + l2 + 进位
        var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        // 计算是否需要进位
        carry = sum >= 10 ? 1 : 0;
        // 下一个
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        // 赋值
        l3.val = sum % 10;
        l3.next = (l1 || l2 || carry) ? new ListNode(0) : null;

        l3 = l3.next;
    }
    return result;
};
// @lc code=end

