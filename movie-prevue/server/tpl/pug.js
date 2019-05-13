module.exports = `
doctype
html(lang='en')
    head
        meta(charset='utf-8')
        title Koa Srever Pug
        link(href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.css" rel="stylesheet")
        script(src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js")
        script(src="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.js")
    body
        .container
            .row
                .col-md-8
                    h1 Hello #{name}
                .col-md-4
                    p dynamic pug page
`