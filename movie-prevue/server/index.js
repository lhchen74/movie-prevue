const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    ctx.body = 'Index'
})

app.listen(3000)