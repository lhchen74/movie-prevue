// import { promisify } from 'util'
// import { resolve as r} from 'path'
// import { readFile, writeFileSync as wfs} from 'fs' 
// import * as qs from 'querystring'


// promisify(readFile)(r(__dirname, '../package.json'))
//     .then(data => {
//         data = JSON.parse(data)
//         console.log(data.name)
//         wfs(r(__dirname, './name'), String(data.name), 'utf8')
//     })



// import {name, getName} from './ex'

// // 通过 export default 导出的，导入时可以不使用 {}
// // 并且不需要与导出名相同
// import ageee from './ex'

// console.log(name)
// console.log(getName())
// console.log(ageee)


import { promisify } from 'util'
import { readFile } from 'fs'
import { resolve } from 'path'

const readAsync = promisify(readFile)

async function init() {
    let data = await readAsync(resolve(__dirname, '../package.json'))
    data = JSON.parse(data)
    console.log(data.name)
}

init()