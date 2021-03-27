class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class linkedlist {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
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

    getFirst() {
        return this.head;
    }

    getAt(index) {

        let counter = 0;
        let node = this.head;
        while (node) {
            if (index === counter) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (node.next === null) {
                return node;
            }
            node = node.next;
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        return this.head = this.head.next;
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

        let node = this.head;
        if (node === null) {
            return 'empty list';
        }

        if (index === 0) {
            this.head = this.head.next;
            return
        }

        let previousNode = this.getAt(index - 1);

        if (!previousNode || !previousNode.next) {
            return 'out of bound';
        }

        previousNode.next = previousNode.next.next;

        return 'node removed';
    }

    insertAt(index, data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previousNode = this.getAt(index - 1) || this.getLast();

        previousNode.next = new Node(data, previousNode.next);

    }

    insertLast(data) {

        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        this.getLast().next = new Node(data);

    }
}

const link = new linkedlist();
link.insertFirst(5);
link.insertFirst(11);


console.log("insert at", link.insertAt(0, 15));
console.log(link.size());
console.log(link.getFirst());