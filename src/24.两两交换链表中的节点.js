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
 * @alias 
 * - 记录当前节点cur和next 还要记录 前置节点prev
 * - 改变指向:
 * - 进入下一轮:
 * 
 */
// var swapPairs = function (head) {
//     var cur = head, prev = new ListNode(0);
//     prev.next = head;
//     while (cur && cur.next) {
//         var next = cur.next;
//         prev.next = next;
//         cur.next = next.next;
//         next.next = cur;
//         prev = cur;
//         cur = cur.next;
//     }
//     return prev.next;
// };

/**
 *  超哥示例
 */
// var swapPairs = function (head) {
//     var prev = new ListNode(0);
//     prev.next = head;
//     while (prev && prev.next) {
//         // 记录当前节点和下一节点
//         var a = prev.next;
//         var b = a.next;
//         // 交换操作
//         prev.next = b;
//         b.next = a;
//         a.next = b.next;
//         prev = a;
//     }
//     return head.next;
// }

// 2.自递归思路：
//    1. 确认head大于等于两个，否则返回
//    2. 获得第二个节点;
//    3. 第一个节点指向第三个节点, 传入第三个节点开始递归，获得已排序的链表；
//    4. 第二个节点指向第一个节点
//    5. 返回第二个节点；
// 
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    var next = head.next;
    head.next = swapPairs(next.next)
    next.next = head;
    return next;
}

/**
 * 1.迭代(哨兵节点)
 * @alias 思路
 * - 创建前置节点作为哨兵节点,循环1次哨兵节点走2格
 * - 结束条件:哨兵节点后面2个节点不为null
 * - 交换方法: 2个中间变量,记录当前节点和下一节点的next指针
 * @alias 复杂度
 * - 时间: O(n)
 * - 空间: O(1)
 * @alias 测试
 * 55/55 (80ms)
 * runtime 17.09%
 * memory 12.5% (37.8mb)
 * 
 */
var swapPairs = function (head) {
    var prev = new ListNode(0);
    prev.next = head;
    var result = prev;
    while (prev.next && prev.next.next) {
        var a = prev.next;
        var b = a.next;

        prev.next = b;
        a.next = b.next;
        b.next = a;
        prev = a;
    }
    return result.next;
}
// @lc code=end

