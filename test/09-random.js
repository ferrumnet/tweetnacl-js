const crypto = require('../randomProvider.js')
var test = require('tape');

test('random is not rediculus', function(t) {
    const buf1 = Buffer.alloc(20);
    const buf2 = Buffer.alloc(20);
    crypto.getRandomValues(buf1)
    crypto.getRandomValues(buf2)
    var hex1 = buf1.toString('hex')
    var hex2 = buf2.toString('hex')
    console.log(hex1, 'vs', hex2)
    t.assert(hex1 !== hex2, 'all good')
    t.end()
});

