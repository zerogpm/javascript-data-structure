function reverse(list) {
    let currentNode = list.getFirst();
    let pre = null;
    while(currentNode) {
        let nextNode = currentNode.next;
        currentNode.next = pre;
        pre = currentNode;
        currentNode = nextNode;
    }
    return pre;
}

module.exports = reverse;