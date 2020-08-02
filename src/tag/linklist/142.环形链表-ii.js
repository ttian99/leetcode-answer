/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (50.63%)
 * Likes:    563
 * Dislikes: 0
 * Total Accepted:    100.6K
 * Total Submissions: 196.3K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 * 
 * 说明：不允许修改给定的链表。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：tail connects to node index 1
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：tail connects to node index 0
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 输入：head = [1], pos = -1
 * 输出：no cycle
 * 解释：链表中没有环。
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：
 * 你是否可以不用额外空间解决此题？
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
var detectCycle = function (head) {

};

// 1.暴力法
// t-O(n*n) m-O(n)
var detectCycle = function (head) {
    var visitList = [];
    while (head) {
        for (let i = 0; i < visitList.length; i++) {
            const node = visitList[i];
            if (node === head) {
                return node;
            }
        }
        visitList.push(head);
        head = head.next;
    }
    return null;
};

// 2.暴力法-map
// t-O(n) m-O(n)
var detectCycle = function (head) {
    var visitList = new Map();
    while (head) {
        if (visitList.get(head)) {
            return head;
        } else {
            visitList.set(head, head);
            head = head.next;
        }
    }
    return null;
};

// 2.快慢指针
// t-O(n*n) m-O(n)
var detectCycle = function (head) {
    if (!head || !head.next) return null;
    var slow = head;
    var fast = head;
    // 是否有环
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            break;
        }
    }
    if (slow != fast) {
        return null;
    }
    // 
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};
// @lc code=end

