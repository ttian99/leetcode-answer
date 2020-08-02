/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.list = {};
    this.arr = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    return this.list[key] || -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    var isFull = this.arr.length >= this.capacity;
    if (isFull) { // 满了
        this.list[key] = value;
        this.arr.unshift(key);
        var deleteKey = this.arr.pop();
        delete this.list[deleteKey];
        

    } else {
        if (this.list[key]) { //存在
            idx = this.arr.findIndex(v => key == v);
            this.arr.splice(idx, 1);
            this.list[key] = value;
            this.arr.unshift(key);
        } else {
            this.list[key] = value;
            this.arr.unshift(key);
        }

    }

    this.list[key] = value;
    this.arr.unshift(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

