

var m = require('../module-b')
var s = require('./module-a-b')

console.log(["MD5", m.md5func('hello')])
console.log(["SHA256", s.sha256func('hello')])
