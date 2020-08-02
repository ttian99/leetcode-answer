var removeNthFromEnd = function (head, n) {
    var arr = [];
    var curr = head;
    while (curr) {
        arr.push(curr);
        curr = curr.next;
    }
    var del = arr.length - n;
    if (del = 0) {
        return head.next; 
    } else if (del < 0) {
        return head;
    } else {
        var node = arr[del];
        var prev = arr[del - 1];
        prev.next = node.next;
        return head;
    }
};

removeNthFromEnd()