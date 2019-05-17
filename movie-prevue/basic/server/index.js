const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')
const session = require('koa-session')

app.keys = ['session_key']

app.use(logger())
app.use(session(app))


app.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    await next()
})

app.use(async (ctx, next) => {
    ctx.body = '<h3>Hello World</h3>'
    await next()
    ctx.body = ctx.body + "!"
})

app.use(async ctx => {
    let n = ctx.session.views || 0
    ctx.session.views = ++n
    ctx.body = ctx.body + n + ' views'
})




app.listen(3000)
console.log('listening on 3000')


