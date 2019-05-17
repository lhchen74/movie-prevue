const doSync = (sth, time) => new Promise(resolve => {
    setTimeout(() => {
        resolve()
        console.log(`> ${sth} cost ${time}ms`)
    }, time)
})

const doAsync = (sth, time, cb) => {
    setTimeout(() => {
        console.log(`> ${sth} cost ${time}ms`)
        cb && cb()
    })
}

const doElse = (sth) => {
    console.log(`> ${sth}`)
}

let Me = {
    doSync, doAsync
}

let Girl = {
    doSync, doAsync, doElse
}

;(async () => {
    console.log('Case1: girl come front the gate')
    await Me.doSync('me brushteeth', 1000)
    console.log('> do nothing, waiting...')
    await Girl.doSync('girl take a bath', 2000)
    console.log('< girl do other thing')

    console.log('------------------------------')

    console.log('Case2: girl come front the gate')
    Me.doAsync('me brushteeth', 1000, () => {
        console.log('> notification girl come to take a bath')
        Girl.doAsync('girl take a bath', 2000)
    })
    console.log('< girl do other thing')
})()