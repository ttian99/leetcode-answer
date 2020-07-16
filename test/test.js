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

majorityElement([3,2,3])