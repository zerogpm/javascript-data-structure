const midpoint = require('./index');
const util = require('util')
const L = require('./linkedlist');
const Node = L.Node;
const LinkedList = L.LinkedList;

const l = new LinkedList();
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');

console.log(util.inspect(midpoint(l).data, false, null, true /* enable colors */))