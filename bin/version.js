const fs = require('fs')

const packageJson = fs.readFileSync(`package.json`, {
    encoding: 'utf8',
    flag: 'r',
})

const data = JSON.parse(packageJson)

var myArgs = process.argv.slice(2)

if (myArgs.includes('--fix')) {
    const version = data.version.split('.')
    version[2] = version[2] ? parseInt(version[2]) + 1 : 1

    data.version = version.join('.')
} else if (myArgs.includes('--new')) {
    const version = data.version.split('.')
    version[0] = parseInt(version[0]) + 1
    version[1] = 0
    version[2] = 0

    data.version = version.join('.')
} else if (myArgs.indexOf('-v') !== -1) {
    const v = myArgs[myArgs.indexOf('-v') + 1]
    if (v) {
        data.version = v
    }
} else {
    const version = data.version.split('.')
    version[1] = parseInt(version[1]) + 1
    version[2] = 0

    data.version = version.join('.')
}

console.log('rn-simple-swipe@', `v${data.version}`)
fs.writeFileSync('package.json', JSON.stringify(data, null, '\t'))
