const cp = require('child_process')
const { resolve } = require('path')


;(async () => {
    const script = resolve(__dirname, '../crawler/video.js')
    // 产生子进程运行 script
    const child = cp.fork(script, [])
    // 标识爬虫脚本有没有运行过
    let invoked = false 

    child.on('error', err => {
        if (invoked) return 
        invoked = true
        console.log(err)
    })

    child.on('exit', code => {
        if (invoked) return 
        invoked = true
        let err = code === 0 ? null : new Error('exit code ' + code)
        if (err) console.log(err)
    })

    child.on('message', data => {
        console.log(data)
    })
})()