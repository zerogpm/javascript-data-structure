const circular = require('./index');
const util = require('util');
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

const l = new List();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');

l.head = a;
a.next = b;
b.next = c;
c.next = null;



console.log(util.inspect(circular(l), false, null, true /* enable colors */))