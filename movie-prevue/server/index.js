const Koa = require('koa')
const app = new Koa()
const { htmlTpl, ejsTpl, pugTpl } = require('./tpl')
const ejs = require('ejs')
const pug = require('pug')

app.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    // ctx.body = htmlTpl

    // ctx.body = ejs.render(ejsTpl, {
    //     name: 'Ejs'
    // })

    ctx.body = pug.render(pugTpl, {
        name: 'Pug'
    })
})

app.listen(3000)