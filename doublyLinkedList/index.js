class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor(values = []) {
        this.head = null;
        this.tail = null;

        for (let value of values) {
            this.insertLast(value);
        }
    }

    clear() {
        this.head = null;
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }

        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            node = node.next;
            counter++;
        }
        return null;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        let counter = 1;
        let previous = this.head;
        let node = this.head.next;
        while (node) {
            if (counter === index) {
                previous.next = new Node(data, node);
                return;
            }
            previous = node;
            node = node.next;
            counter++;
        }

        previous.next = new Node(data, node);
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }

        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index - 1) {
                if (node.next) {
                    return (node.next = node.next.next);
                } else {
                    return (node.next = null);
                }
            }
            node = node.next;
            counter++;
        }
    }

    getFirst() {
        return this.head;
    }

    insertFirst(data) {
        this.head = new Node(data, this.getFirst());
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node.next) {
            node = node.next;
        }

        return node;
    }

    insertLast(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return true;
        }

        let temp = this.tail;
        this.tail = node;
        node.prev = temp;
        temp.next = node;

        return this;
    }

    forEach(fn) {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            fn(node);
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, DoublyLinkedList };