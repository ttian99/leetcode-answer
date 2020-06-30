var lengthOfLongestSubstring = function (s) {
    // var arr = s.split('');
    // console.log(arr);

    var len = s.length;
    let idx = 0;
    var testStr = ''; //
    var noRepeat = ''; //
    while (idx < len) {
        if (testStr.length == 0) {
            count;
        }
        var cur = arr[idx];
        var next = arr[idx + 1];

        var testStr = noRepeat + cur;

        if (testStr == next) {//重复
            noRepeat = next;
            idx = idx + 1;
        } else { //不重复
            idx += testStr.length;
        }
    }

    return '';

};

var str = 'abcabcba';

var len = lengthOfLongestSubstring(str);
console.log('len = ' + len);