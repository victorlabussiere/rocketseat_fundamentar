function getFlag(str) {

    var flag = process.argv.indexOf(str) + 1
    return process.argv[flag]
}

module.exports = getFlag

