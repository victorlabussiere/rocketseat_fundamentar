const getFlag = require('./getFlag')

console.log(`Olá ${getFlag("--name")}! ${getFlag('--greetings')}`)