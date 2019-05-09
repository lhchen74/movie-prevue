const Koa = require('koa')
const app = new Koa()

const indent = n => new Array(n).join('&nbsp;')

const mid1 = () => async (ctx, next) => {
    ctx.body = `<h3>请求 => 第一层中间件</h3>`
    next()
    ctx.body += `<h3>响应 => 第一层中间件</h3>`
}
const mid2 = () => async (ctx, next) => {
    ctx.body += `<h3>${indent(4)}请求 => 第二层中间件</h3>`
    next()
    ctx.body += `<h3>${indent(4)}响应 => 第二层中间件</h3>`
}
const mid3 = () => async (ctx, next) => {
    ctx.body += `<h3>${indent(8)}请求 => 第三层中间件</h3>`
    next()
    ctx.body += `<h3>${indent(8)}响应 => 第三层中间件</h3>`
}

app.use(mid1())
app.use(mid2())
app.use(mid3())

app.use(async ctx => {
    ctx.body += `<p style="color: #f0f"> 
        ${indent(12)} Koa 核心处理业务</p>`
})


app.listen(3000)

console.log('listening on 3000...')



// 请求 => 第一层中间件
//    请求 => 第二层中间件
//        请求 => 第三层中间件
//             Koa 核心处理业务
//        响应 => 第三层中间件
//    响应 => 第二层中间件
// 响应 => 第一层中间件
