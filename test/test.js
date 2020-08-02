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
        var deleteKey = this.arr.pop();
        delete this.list[deleteKey];
    }
    if (this.list[key]) { //存在
        idx = this.arr.findIndex(v => key == v);
        this.arr.splice(idx, 1);   
    }
    this.list[key] = value;
    this.arr.unshift(key);
};

(() => {
    var cache = new LRUCache(2);
    console.log('' + cache.put(1, 1));
    console.log('' + cache.put(1, 1));
    console.log('' + cache.get(1));
    console.log('' + cache.put(3, 3));
    console.log('' + cache.get(2));
    console.log('' + cache.put(4, 4));
    console.log('' + cache.get(1));
    console.log('' + cache.get(3));
    console.log('' + cache.get(4));

    console.log('over')
})();

