const chunk = require('./index');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunked = chunk(arr, 2);

console.log(chunked);