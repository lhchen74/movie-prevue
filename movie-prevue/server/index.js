const Koa = require('koa')
const app = new Koa()
// const { htmlTpl, ejsTpl, pugTpl } = require('./tpl')
// const ejs = require('ejs')
// const pug = require('pug')
const views = require('koa-views')
const { resolve } = require('path')


app.use(views(resolve(__dirname, './views'), {
    extension:'pug'
}))

app.use(async (ctx, next) => {
    // ctx.type = 'text/html; charset=utf-8'
    // ctx.body = htmlTpl

    // ctx.body = ejs.render(ejsTpl, {
    //     name: 'Ejs'
    // })

    // ctx.body = pug.render(pugTpl, {
    //     name: 'Pug'
    // })

    await ctx.render('index', {
        name: 'koa-views and pug'
    })
})

app.listen(3000)