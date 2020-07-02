var lengthOfLongestSubstring = function (s) {

    // 1.暴力法
    // 遍历字符串
    // 字符串相加
    var len = s.length;
    var testStr = s.slice(0, 1);
    var testLen = 1;
    var maxLen = 1;
    var maxStr = testStr;
    for (let i = 1; i < len; i++) {
        const char = s.slice(i, i + 1);
        const idx = testStr.indexOf(char);
        if (idx == -1) { // 没有重复
            testStr += char;
            testLen += 1;
            maxLen = testLen;
            maxStr = testStr;
        } else {
            if (testLen > maxLen) {
                maxLen = testLen;
                maxStr = testStr;
            }
            testStr = char;
            testLen = 1;
        }

        //判断是否提前结束
        if (maxLen > len - i) {
            console.log('提前结束');
            break;
        }
    }
    console.log('maxStr = ' + maxStr);
    console.log('maxLen = ' + maxLen);
    return maxLen;
};

var lengthOfLongestSubstring = function (s) {
    /**
     * 1.暴力法:
     * 解题思路：
     * - 判断重复：移位法-移动窗口
     * - 找最大：记录
     * 时间复杂度: O(n*n)
     * 
     * 测试未通过案例：
     * 1."" 边界条件为考虑进去，变量i没有从0开始
     * 2."brnk" 提前结束条件判断错误
     * 3."dvdf" 重新判断子串的起点错误了
     * 4."anviaj" 提前结束导致的
     * 5."nfpdmpi" 
     * 
     * -设定1个记录字符串,1个记录长度
     * -遍历每个字符,该字符与记录字符串是否有重复
     * -无重复：将该字符加入记录字符串，长度+1
     * -有重复：记录字符串清空，该字符为新的记录
     */

    var len = s.length;

    var testStr = "";
    var maxStr = testStr; // 最长子串
    for (let i = 0; i < len; i++) {
        const char = s.slice(i, i + 1);
        const idx = testStr.indexOf(char);
        // 字符累加
        testStr += char;

        // 有重复时
        if (idx != -1) {
            // 从重复的字符串后一位开始
            testStr = testStr.slice(idx + 1)
        }

        // 超过最大字符串
        if (testStr.length > maxStr.length) {
            maxStr = testStr;
        }
        console.log('idx = ' + idx);
        console.log('testStr = ' + testStr);
        console.log('maxStr = ' + maxStr);
    }
    // console.log('maxStr = ' + maxStr);
    return maxStr.length;

};

var lengthOfLongestSubstring = function (s) {
    var hash = {};
    var len = s.length;
    var max = 0;
    var rk = -1;
    for (let i = 0; i < len; i++) {
        if (i != 0) {
            delete hash[s.charAt(i - 1)];
        }

        while (rk + 1 < len && !hash.hasOwnProperty(s.charAt(rk + 1))) {
            hash[s.charAt(rk + 1)] = true;
            ++rk;
        }
        max = Math.max(max, rk - i + 1);
    }
    return max;
}
var arr = [
    // "",
    // "brnk",
    "abcabcbb",
    // "bbbbb",
    // "pwwkew",
    // "nfpdmpi"
]

for (let index = 0; index < arr.length; index++) {
    const str = arr[index];
    var result = lengthOfLongestSubstring(str);
    console.log('test ' + index + ': result = ' + result);
}