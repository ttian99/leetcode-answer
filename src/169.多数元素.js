/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 1.暴力法：
 * @alias 思路
 * - 2次循环，第一次记录每个数出现的次数，第二次找出次数最多的值
 * @alias 复杂度
 * - 时间复杂度：O(n*n)
 * - 空间复杂度：O(n)
 * @alias 问题点
 * - 空间复杂度怎么计算
 * @alias 测试结果
 * 46/46(104ms)
 * runtime 11.36%
 * memory 7.14%(39.2MB)
 */
var majorityElement = function (nums) {
    var len = nums.length;
    var list = {};
    for (let i = 0; i < len; i++) {
        var element = nums[i];
        if (list[element] > 0) {
            list[element] += 1;
        } else {
            list[element] = 1;
        }
    }
    var maxNum = 0;
    let result;
    for (var key in list) {
        var value = list[key];
        if (value >= maxNum) {
            maxNum = value;
            result = key;
        }
    }
    return result;
};

/**
 * 2.map法
 * @alias 思路：
 * - 需要计数一般都是用Map或者Hash
 * - 在暴力法的基础上，每次循环时比较maxCount,当大于它时，记录当前的数值
 * @alias 复杂度
 * - 时间复杂度：O(n)
 * - 空间复杂度: O(n)
 * @alias 测试结果
 * 46/46(84ms)
 * runtime 46.27%
 * memory 7.14%(39.7MB)
 */
var majorityElement = function (nums) {
    var len = nums.length;
    var list = {};
    var maxCount = 0;
    var result;
    for (let i = 0; i < len; i++) {
        var element = nums[i];
        var count = list[element] || 0;
        count = count > 0 ? count + 1 : 1;
        list[element] = count;
        if (count >= maxCount) {
            maxCount = count;
            result = element;
        }
        // 提前结束
        if (maxCount > Math.ceil(len / 2)) {
            return result;
        }
    }
    return result;
};

/**
 * 3.sort
 * @alias 思路：
 * - 将数组排序，看重复的次数最多的值
 * - 由于必定出现>n/2的解，所以数组的第n/2个元素就是解。
 * @alias 复杂度：
 * - 时间复杂度：O(n*logn)
 * - 空间复杂度：O(logn) 或者 O(1)
 * @alias 问题点：
 * - 怎么找重复次数最多？
 * - 奇数怎么处理？
 * @alias 测试结果：
 * 46/46(88ms)
 * runtime 34/19%
 * memory 7.14% (40.8mb)
 */
var majorityElement = function (nums) {
    nums.sort();
    return nums[Math.floor(nums.length / 2)];
}

/**
 * 4.分治(divide & conquer)
 * @alias 思路
 * - 分为左右2边，求出左边的最多的值left，右边最多的值right
 * - 比较left和right的出现次数，返回较多者
 * - 递归函数，直到不能再分(长度为1)
 * @alias 复杂度
 * - 时间：O(n*logn)
 * - 空间：O(logn)
 * @alias 问题点
 * - 怎么
 * 
 * @alias 测试结果
 * 46/46(96ms)
 * runtime 19.75%
 * memory 7.14% (40mb)
 * 
 */
function repeatCount(nums, start, end, target) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (target == nums[i]) {
            count++;
        }
    }
    return count;
}
function getElement(nums, start, end) {
    // 递归结束
    if (start == end) {
        return nums[start];
    }

    // 分为2
    const mid = start + Math.floor((end - start) / 2);
    const left = getElement(nums, start, mid);
    const right = getElement(nums, mid + 1, end);

    if (left == right) {
        return left;
    } else {
        const leftCount = repeatCount(nums, start, end, left);
        const rightCount = repeatCount(nums, start, end, right);
        return leftCount > rightCount ? left : right;
    }
}
var majorityElement = function (nums) {
    return getElement(nums, 0, nums.length - 1);
};

/** 
 * 5.摩尔投票算法(Boyer-Moore)
 * @alias 思路
 * - 由于众数的数量>n/2,如果我们把众数记为 +1+1，把其他数记为 -1−1，将它们全部加起来，显然和大于 0，从结果本身我们可以看出众数比其他数多。
 * - 实现：假设目标数为众数，枚举遍历数组，当遇到相同数+1，不同数-1，当计数为0时，更换目标数为当前遍历数，直到遍历完成后，目标数即为所求的众数。
 * @alias 复杂度
 * - 时间：O(n)
 * - 空间：O(1)
 * @alias 测试结果：
 * 46/46(92ms)
 * runtime 24.96%
 * memory 7.14% (39.6mb)
 */
// var majorityElement = function (nums) {
//     var vote = 0;
//     var target;
//     var len = nums.length;
//     let i = 0;
//     for (; i < len; i++) {
//         if (vote == 0) {
//             target = nums[i];
//         }
//         vote += target == nums[i] ? 1 : -1;
//     }
//     return target;
// }
// @lc code=end

