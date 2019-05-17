const puppeteer = require('puppeteer')

const base = `https://movie.douban.com/subject/`
const doubanId = '26100958'
const videoBase = `https://movie.douban.com/trailer/244458/`

const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

;(async () => {
    console.log('start...')

    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        dumpio: false // Whether to pipe the browser process stdout and stderr into process.stdout and process.stderr. Defaults to false.
    })

    const page = await browser.newPage()

    await page.goto(base + doubanId, {
        waitUntil: 'networkidle2' 
    })

    await sleep(1000)
    
   
    const result = await page.evaluate(() => {
        var $ = window.$
        var it = $('.related-pic-video')
        if (it && it.length > 0) {
            var link = it.attr('href')
            var cover = it.attr('style')
            // background-image:url(https://img3.doubanio.com/img/trailer/medium/2550759113.jpg?)
            var linkReg = /background-image:url\((.*?)\?\)/
            cover = cover.match(linkReg)[1]

            return {
                link,
                cover
            }
        }

        return {}
    })

    let video
    if (result.link) {
        await page.goto(result.link, {
            waitUntil: 'networkidle2'
        })

        await sleep(2000)

        video = await page.evaluate(() => {
            var $ = window.$
            var it = $('source')

            if (it && it.length > 0) {
                return it.attr('src')
            }
            return ''
        })
    }

    const data = {
        video,
        doubanId,
        cover: result.cover
    }


    browser.close()

    // send result 
    process.send(data)
    process.exit(0)
})()