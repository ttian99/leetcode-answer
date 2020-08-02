/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 *
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (38.83%)
 * Likes:    919
 * Dislikes: 0
 * Total Accepted:    207.2K
 * Total Submissions: 529.9K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 示例：
 * 
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 
 * 
 * 说明：
 * 
 * 给定的 n 保证是有效的。
 * 
 * 进阶：
 * 
 * 你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

};

// 1.暴力法：遍历枚举-数组
// t-O(n) m-O(n)
var removeNthFromEnd = function (head, n) {
    var arr = [];
    var curr = head;
    while (curr) {
        arr.push(curr);
        curr = curr.next;
    }
    var del = arr.length - n;
    if (del == 0) {
        return head.next;
    } else if (del < 0) {
        return head;
    } else {
        var node = arr[del];
        var prev = arr[del - 1];
        prev.next = node.next;
        return head;
    }
};

// 2.快慢指针：
// - fast先走n步，然后slow和fast同步走，当fast到达链尾时，slow正好是倒数第n个节点
var removeNthFromEnd = function (head, n) {
    // 边界处理
    if (n <= 0 || !head) return head;
    let node = new ListNode(-1);
    node.next = head;
    let count = 0,
        fast = node;
    // 快指针先走n步
    while (count < n) {
        fast = fast.next;
        count++;
    }
    // 快慢指针并行前进
    let slow = node,
        prev = null;
    while (fast) {
        fast = fast.next;
        prev = slow;
        slow = slow.next;
    }
    // 这里面不存在slow为null的情况, 因为slow为null的时候, n为0, 在上面已经做了边界处理
    prev.next = slow.next;
    return node.next;
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end