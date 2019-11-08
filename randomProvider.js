var CryptoJs = require('crypto-js')

function toWordArray (buf) {
    return CryptoJs.lib.WordArray.create(buf)
}

function toBuffer (wa) {
    return Buffer.from(wa.toString(CryptoJs.enc.Hex), 'hex')
}

function getRandomValues(array) {
    const len = array.length
    const random = toBuffer(CryptoJs.lib.WordArray.random(len))
    for(let i = 0; i < random.length; i++) {
        array[i] = random[i]
    }
}

module.exports = {
    getRandomValues
}
