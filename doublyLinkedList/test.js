const util = require('util');
const L = require('./index');
const DoublyLinkedList = L.DoublyLinkedList;

const l = new DoublyLinkedList();
// l.insertFirst('a');
// l.insertFirst('b');
// l.insertFirst('c');

l.insertLast('1');
l.insertLast('2');
l.insertLast('3');

console.log(util.inspect(l, false, null, true /* enable colors */))