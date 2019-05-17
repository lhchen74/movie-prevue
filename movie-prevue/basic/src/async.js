const fs = require('fs')


function readFile (cb) {
    fs.readFile('./package.json', (err, data) => {
        if (err) cb(err)
        cb(null, data)
    })
}

// 1. callback
readFile((err, data) => {
    if (!err) {
        data = JSON.parse(data)
        console.log(data.name)
    }
})


// 2. promise
function readFileAsync(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

readFileAsync('./package.json')
    .then(data => {
        data = JSON.parse(data)
        console.log(data.name)
    }).catch(err => {
        console.log(err)
    })


// 3. co + generator + promise

const co = require('co')
const util = require('util')

co(function *() {
    let data = yield util.promisify(fs.readFile)('./package.json')
    data = JSON.parse(data)
    console.log(data.name)
})


// 4. async
const readAsync = util.promisify(fs.readFile)

async function init() {
    let data = await readAsync('./package.json')
    data = JSON.parse(data)
    console.log(data.name)
}

init()