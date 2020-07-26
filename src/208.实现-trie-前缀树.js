/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var TrieNode = function (val) {
    this.val = val;
    this.isword = false;
    this.children = {};
}

/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = new TrieNode('');
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    var node = this.root;
    var len = word.length;
    for (let i = 0; i < len; i++) {
        var c = word.charAt(i);
        if (!node.children[c]) {
            node.children[c] = new TrieNode(c);
        } 
        node = node.children[c];
    }
    node.isword = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    var node = this.root;
    var len = word.length;
    for (let i = 0; i < len; i++) {
        var c = word.charAt(i);
        if (!node.children[c]) {
            return false;
        }
        node = node.children[c];
    }
    return node.isword;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    var node = this.root;
    var len = prefix.length;
    for (let i = 0; i < len; i++) {
        var c = prefix.charAt(i);
        if (!node.children[c]) {
            return false;
        }
        node = node.children[c];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */


 /**
  * @测试
  * 15/15 (232ms)
  * time: 64.25%
  * memory: 100%(55.1MB)
  */
// @lc code=end

