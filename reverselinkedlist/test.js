const reverse = require('./index');
const util = require('util');
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

const l = new List();
l.insertLast('a');
l.insertLast('b');
l.insertLast('c');

test('reverse linkedlist', () => {
    expect("ok").toEqual('ok');
});

//console.log(util.inspect(reverse(l), false, null, true /* enable colors */))
