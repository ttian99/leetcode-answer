/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // 1.个数判断：奇数为中间数，偶数为中间2数的平均值
    // 2.寻找中间值
    // [1  3  5]
    //   [2  4  6] 
    var len1 = nums1.length;
    var len2 = nums2.length;

    var len = len1 + len2;
    var isJI = len % 2 == 1; //是否为奇偶个数
    var middleIdx = Math.floor(len / 2); //中位值索引
    // if (isJI) {
    //     // 只有1个
    // } else {
    //     // 需要2个    
    // }

    var a0 = nums1[0];
    var b0 = nums2[0];
    var an = nums1[len1 - 1];
    var bn = nums2[len2 - 1];
    if (a0 < b0) {
        var lk = 0, at = a0;
        while (at > b0 && lk < len1) {
            at = nums1[lk];
            lk++;
        }
        var rk = 0, bt = b0;
        while (bt > an && rk < len2) {
            bt = nums2[rk];
            rk++;
        }

        if (lk <= rk) { // 有交集
            var count1 = len1 - lk + 1;
            var count2 = rk + 1;
            var totalCount = count1 + count2;
            for (let i = 0; i < totalCount; i++) {
                var idx = ;
            }


        } else { // 无交集

        }
        // if (b0 > an) { //有交集
        //     var lk = 0, at = a0;
        //     while (at > b0 && lk < len1) {
        //         at = nums1[lk];
        //         lk++;
        //     }
        //     var rk = 0, bt = b0;
        //     while (bt > an && rk < len2) {
        //         bt = nums2[rk];
        //         rk++;
        //     }
        // } else { //无交集
        //     if (i = j) { }
        // }
    } else {

    }

};
// @lc code=end

