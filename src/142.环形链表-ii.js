/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (50.95%)
 * Likes:    543
 * Dislikes: 0
 * Total Accepted:    95.6K
 * Total Submissions: 187.4K
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
var detectCycle = function(head) {
    
};

/**
 * 1.暴力法:
 * @alias 思路
 * - 枚举一次链表,出现过的节点记录在一个数组内
 * - 每次枚举一个新节点,判断是否与之前的节点相等.
 * @alias 复杂度
 * - 时间: O(n*n)
 * - 空间: O(n)
 * @alias 测试
 * 16/16 cases passed (220 ms)
 * Your runtime beats 5.04 % of javascript submissions
 * Your memory usage beats 12.5 % of javascript submissions (40.3 MB)
 */
var detectCycle = function(head) {
   var arr = [];
   while (head) {
       for (let i = 0; i < arr.length; i++) {
           const element = arr[i];
           if (element == head) {
               return head;
           }
       }
       arr.push(head);
       head = head.next;
   } 
   return null;
};
/**
 * 2. 快慢指针
 * 
 */

// @lc code=end

