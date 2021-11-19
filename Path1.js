import path from 'path'
// var path = require('path');
var filename = path.basename('D:/neosoft/assignapp4.js');//gives base path name
console.log(filename);

var x = path.join('D', 'neosoft', 'assignapp4.js');//join path
console.log(x);

var ext = path.extname('/Users/Refsnes/demo_path.js');//file extension
console.log(ext);

console.log(path.isAbsolute('D:/neosoft/assignapp4.js')); //true
console.log(path.isAbsolute('test/demo_path.js')); //false
console.log(path.isAbsolute('/Users/Refsnes/demo_path.js')); //true
