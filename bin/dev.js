#!/usr/bin/env node

const fs = require('fs')

fs.readdir('lib', (err, files) => {
    if (err) {
        return console.log(err)
    }

    var dir = 'example/lib'
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
    }

    files.forEach(fileName => {
        fs.copyFileSync(`lib/${fileName}`, `${dir}/${fileName}`)
    })
})

fs.readdir('example/src', (err, files) => {
    if (err) {
        return console.log(err)
    }

    files.forEach(fileName => {
        const fullPath = `example/src/${fileName}`
        swapImports(fullPath)
    })
})

const swapImports = path => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            return console.log(err)
        }

        let result = data.replace(
            "import Swipeable from 'rn-simple-swipe';",
            "import Swipeable from '../lib';",
        )

        fs.writeFile(path, result, 'utf8', err => {
            if (err) {
                return console.log(err)
            }
        })
    })
}
